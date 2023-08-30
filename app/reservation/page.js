"use client";
import React, { useState } from "react";
import AppLayout from "../_layout/AppLayout";
import useFetchQuery from "../_hook/useFetchQuery";
import Loading from "../_components/UI/Loading";
import { Table } from "../_components/Template/Table";
import { toast } from "react-toastify";
import Axios from "../_utils/Axios";
import NothingFound from "../_components/molecule/NothingFound";

const Reservation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let { data, refetch, isLoading } = useFetchQuery(
    "reservation",
    "reservations"
  );

  if (isLoading) return <Loading />;

  const filteredReservations = data?.filter((reservation) =>
    reservation.restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const onCancel = async (e) => {
    e.preventDefault();
    try {
      let id = e.currentTarget.id;
      let { data } = await Axios.delete(`/reservation/${id}`);
      if (data) {
        toast(data.message);
        refetch();
      }
    } catch (error) {
      toast(error?.response?.data.message);
    }
  };

  return (
    <AppLayout>
      <h1>Getting data</h1>
      {filteredReservations ? (
        <Table
          title={"Recent Reservations"}
          data={filteredReservations}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCancel={onCancel}
        />
      ) : (
        <NothingFound />
      )}
    </AppLayout>
  );
};

export default Reservation;
