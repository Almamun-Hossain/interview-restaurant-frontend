"use client";
import React from "react";
import useFetchQuery from "../_hook/useFetchQuery";
import Loading from "../_components/UI/Loading";
import AppLayout from "../_layout/AppLayout";
import Food from "../_components/Template/Food";

const AllFood = () => {
  let { data, isLoading } = useFetchQuery("foods", "foods");
  if (isLoading) return <Loading />;
  return <AppLayout>{data.foods && <Food foodItems={data.foods} />}</AppLayout>;
};

export default AllFood;
