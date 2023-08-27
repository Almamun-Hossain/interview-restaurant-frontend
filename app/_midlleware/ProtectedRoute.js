import { useContext, useEffect } from "react";
import { UserContext } from "../_utils/UserProvider";
import { useRouter } from "next/navigation";
import useFetchQuery from "../_hook/useFetchQuery";

const ProtectedRoute = ({ children }) => {
  let { user, setUser } = useContext(UserContext);
  let router = useRouter();
  let { data } = useFetchQuery("user-data", "/user/me");
  let token = localStorage.getItem("token") || null;

  useEffect(() => {
    if (!token && !user) {
      router.push("/login");
    }
    if (!user && data) {
      setUser(data.user);
    }
  }, [user, data]);
  return children;
};

export default ProtectedRoute;
