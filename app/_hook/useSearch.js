import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { processSearchURL } from "../_utils/ProcessSearchURL";
import useFetchQuery from "./useFetchQuery";

const useSearch = () => {
  const router = useRouter();
  let searchParams = useSearchParams();
  let searchData = {
    food: searchParams.get("food") || "",
    shop: searchParams.get("shop") || "",
    address: searchParams.get("address") || "",
    country: searchParams.get("country") || "",
  };

  const [formData, setFormData] = useState(searchData);

  let apiUrl = processSearchURL(formData) || "search";

  let [url, setUrl] = useState(apiUrl);

  let { data, refetch, isLoading } = useFetchQuery("fetch-search", url);

  const onInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let updateURL = processSearchURL(formData) || "search";
    setUrl(updateURL);
    router.replace(apiUrl);
  };
  useEffect(() => {
    refetch();
  }, [url, formData]);

  return { formData, data, isLoading, onInputChange, onSubmit };
};

export default useSearch;
