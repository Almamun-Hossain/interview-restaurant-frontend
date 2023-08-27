import { NotFound } from "@/public/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NothingFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={NotFound} className="w-96" alt="data not found" />
      <h2 className="text-secondary my-4">Nothing found</h2>
      <Link
        href={"/"}
        className="bg-primary rounded-lg text-white text-xl px-5 py-3"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NothingFound;
