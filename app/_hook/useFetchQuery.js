import { useQuery } from "react-query";
import Axios from "../_utils/Axios";

const useFetchQuery = (key, path) => {
  async function fetchData() {
    const { data } = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/${path}`
    );
    if (!data) {
      throw new Error("Network response was not ok");
    }
    return data;
  }
  return useQuery({ queryKey: key, queryFn: fetchData });
};

export default useFetchQuery;
