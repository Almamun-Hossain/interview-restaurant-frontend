"use client";
import GuestLayout from "@/app/_layout/GuestLayout";
import React from "react";
import { useParams } from "next/navigation";
import useFetchQuery from "@/app/_hook/useFetchQuery";
import Loading from "@/app/_components/UI/Loading";
import NothingFound from "@/app/_components/molecule/NothingFound";
import Card from "@/app/_components/molecule/Card";
import ImageItem from "@/app/_components/UI/ImageItem";
import ItemTitle from "@/app/_components/UI/ItemTitle";
import ActionButton from "@/app/_components/UI/ActionButton";
import Price from "@/app/_components/UI/Price";
const RestaurantFood = () => {
  const params = useParams();
  let { data, isError, isLoading } = useFetchQuery(
    "foods",
    `restaurant/${params.id}`
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <GuestLayout>
      <div className="my-4 shadow-md">
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2"></div>
      </div>
      {data.foods && data.foods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.foods.map((item) => (
            <Card
              key={item.id}
              image={<ImageItem src={item.thumbnail} title={item.title} />}
              info={
                <>
                  <ItemTitle title={item.title} />
                  <Price value={item.price} />
                </>
              }
              action={<ActionButton />}
            />
          ))}
        </div>
      ) : (
        <NothingFound />
      )}
    </GuestLayout>
  );
};

export default RestaurantFood;
