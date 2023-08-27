"use client";
import Input from "@/app/_components/UI/Input";
import Label from "@/app/_components/UI/Label";
import Loading from "@/app/_components/UI/Loading";
import useFetchQuery from "@/app/_hook/useFetchQuery";
import AppLayout from "@/app/_layout/AppLayout";
import { Card } from "@material-tailwind/react";
import React from "react";

const AddFood = () => {
  let { data, isLoading } = useFetchQuery("restaurants", "restaurants");
  if (isLoading) return <Loading />;
  return (
    <AppLayout>
      <Card className="my-5 w-1/2 mx-auto p-5">
        <h1 className="pb-2">Add Food</h1>
        <div className="my-2">
          <form>
            <div className="grid grid-flow-row grid-cols-1 gap-4">
              <div>
                <Label title="Food Title" />
                <Input
                  name="title"
                  type="text"
                  placeholder="Food name"
                  required="true"
                />
              </div>
              <div>
                <Label title="Food Description" />
                <Input
                  name="description"
                  type="text"
                  placeholder="Food name"
                  required="true"
                />
              </div>
              <div>
                <Label title="Food Price" />
                <Input
                  name="price"
                  type="number"
                  min={0}
                  placeholder="Food name"
                  required="true"
                />
              </div>
            </div>
          </form>
        </div>
      </Card>
    </AppLayout>
  );
};

export default AddFood;
