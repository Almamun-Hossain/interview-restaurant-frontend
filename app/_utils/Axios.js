import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default Axios;
