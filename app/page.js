"use client";
import { useSession } from "next-auth/react";
import Food from "./_components/Template/Food";
import Search from "./_components/Template/Search";
import Loading from "./_components/UI/Loading";
import NothingFound from "./_components/molecule/NothingFound";
import useFetchQuery from "./_hook/useFetchQuery";
import useSearch from "./_hook/useSearch";
import GuestLayout from "./_layout/GuestLayout";

export default function Home() {
  const { data: session } = useSession();
  let { data, isLoading, onInputChange, onSubmit } = useSearch(false);
  // const { data, isLoading, refetch } = useFetchQuery("allfoods", "foods");
  if (isLoading) return <Loading />;
  console.log(session);
  return (
    <GuestLayout>
      <div className="py-3">
        <h2>Explore all Foods</h2>
      </div>
      <Search onChange={onInputChange} onSubmit={onSubmit} />
      {data?.length > 0 ? <Food foodItems={data} /> : <NothingFound />}
    </GuestLayout>
  );
}
