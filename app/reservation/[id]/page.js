"use client";
import Input from "@/app/_components/UI/Input";
import Loading from "@/app/_components/UI/Loading";
import useFetchQuery from "@/app/_hook/useFetchQuery";
import AppLayout from "@/app/_layout/AppLayout";
import TwelveHourTimeSelect from "@/app/_components/UI/TwelveHourTimeSelect";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "@/app/_utils/Axios";

const ReservationForm = () => {
  const params = useParams();

  if (!params.id) reutrn;
  let { data, isLoading } = useFetchQuery(
    "restaurant-data",
    `restaurant/${params.id}`
  );
  const router = useRouter();

  let [formData, setFormData] = useState({
    reserveDate: new Date(),
    reserveTime: "",
    restaurant: params.id,
  });

  if (isLoading) return <Loading />;
  console.log(data);

  let onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.reserveTime) {
      alert("Choose a time");
      return;
    }

    try {
      let { data } = await Axios.post("/reservations", formData);
      if (data) {
        setFormData({
          reserveDate: new Date(),
          reserveTime: "",
          restaurant: params.id,
        });
        toast("Reservation Confirmed");

        router.push("/reservation");
      }
    } catch (error) {
      toast(error.response.data.message);
    }
  };
  return (
    <AppLayout>
      <div className="w-1/2 mx-auto my-10 bg-white shadow-lg p-10">
        <div className="text-center">
          <h3>{data?.restaurant?.name}</h3>
          <span className="text-lg text-secondary">
            {data?.restaurant?.address}, {data?.restaurant?.country}
          </span>
          {data?.restaurant?.availivility ? (
            <p className="text-green-600">On Service</p>
          ) : (
            <p className="text-secondary">Out of service</p>
          )}
        </div>

        {data?.restaurant?.availivility ? (
          <div className="my-5">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="data"
                >
                  Select Date
                </label>

                <Input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  name="reserveDate"
                  type="date"
                  placeholder="Select Date"
                  value={formData.data}
                  onChange={onChange}
                  required={true}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <TwelveHourTimeSelect
                value={formData.reserveTime}
                onChange={onChange}
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white bg-secondary px-5 py-2 rounded-md"
                >
                  Make Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </AppLayout>
  );
};

export default ReservationForm;
