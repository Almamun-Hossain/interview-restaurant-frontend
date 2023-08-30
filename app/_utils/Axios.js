import axios from "axios";
import { getCookie } from "cookies-next";
axios.defaults.withCredentials = true;
const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getCookie("authToken")}`,
  },
});

export default Axios;
