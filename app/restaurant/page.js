"use client";
import React from "react";
import GuestLayout from "../_layout/GuestLayout";
import Loading from "../_components/UI/Loading";
import { Default } from "@/public/image";
import Card from "../_components/molecule/Card";
import ImageItem from "../_components/UI/ImageItem";
import ActionButton from "../_components/UI/ActionButton";
import Search from "../_components/Template/Search";
import useFetchQuery from "../_hook/useFetchQuery";
import NothingFound from "../_components/molecule/NothingFound";

const page = () => {
  let { data, isError, isLoading } = useFetchQuery(
    "allRestaurants",
    "restaurants"
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <GuestLayout>
      <h1>Showing all restaurant</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.restaurants ? (
          data.restaurants.map((item) => (
            <Card
              key={item.id}
              image={
                <ImageItem
                  src={item.thumbnail ? item.thumbnail : Default}
                  title={item.name}
                />
              }
              restaurant={item}
              action={<ActionButton />}
            />
          ))
        ) : (
          <NothingFound />
        )}
      </div>
    </GuestLayout>
  );
};

export default page;
