import Link from "next/link";
import React from "react";
import ImageItem from "../UI/ImageItem";
import { Default } from "@/public/image";
import Image from "next/image";

const Card = ({
  image = null,
  info = null,
  restaurant = null,
  action = null,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg relative h-full">
      {image}
      {info}
      {restaurant ? (
        <>
          <Link
            href={`/restaurant/${restaurant.id}`}
            className="text-secondary mb-2"
          >
            {restaurant.name}
          </Link>
          <p className="text-gray-600 mb-4">
            {restaurant.address}, {restaurant.country}
          </p>
        </>
      ) : (
        ""
      )}
      {restaurant?.id ? (
        <Link
          href={`/reservation/${restaurant?.id}`}
          className={`relative bottom-0 w-full my-2 ${
            !restaurant ? "isDisabled" : ""
          }`}
        >
          {action}
        </Link>
      ) : (
        <div>{action}</div>
      )}
    </div>
  );
};

export default Card;
