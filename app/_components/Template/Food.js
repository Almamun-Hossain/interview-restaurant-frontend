"use client";
import React, { useState } from "react";
import Card from "../molecule/Card";
import ImageItem from "../UI/ImageItem";
import ItemTitle from "../UI/ItemTitle";
import ActionButton from "../UI/ActionButton";
import Price from "../UI/Price";

const Food = ({ foodItems }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <Card
            key={item.id}
            image={<ImageItem src={item.thumbnail} title={item.title} />}
            info={
              <>
                <ItemTitle title={item.title} />
                <Price value={item.price} />
              </>
            }
            restaurant={item.restaurant}
            action={<ActionButton />}
          />
        ))}
      </div>
    </>
  );
};

export default Food;
