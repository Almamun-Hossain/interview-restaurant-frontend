"use client";
import React, { useEffect } from "react";
import GuestLayout from "../_layout/GuestLayout";
import Food from "../_components/Template/Food";
import Search from "../_components/Template/Search";
import Loading from "../_components/UI/Loading";
import NothingFound from "../_components/molecule/NothingFound";
import useSearch from "../_hook/useSearch";

const SearchPage = () => {
  let { formData, data, isLoading, onInputChange, onSubmit } = useSearch();

  if (isLoading) return <Loading />;

  return (
    <GuestLayout>
      <div className="my-5">
        <Search
          searchData={formData}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />

        {data.length > 0 ? <Food foodItems={data} /> : <NothingFound />}
      </div>
    </GuestLayout>
  );
};

export default SearchPage;
