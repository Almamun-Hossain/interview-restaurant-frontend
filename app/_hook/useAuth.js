import { useContext, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { UserContext } from "../_utils/UserProvider";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Axios from "../_utils/Axios";

// Import and create your global context (UserContext) here
// You can create a UserProvider that wraps your App component

const useAuth = () => {
  const { user, setUser } = useContext(UserContext); // Adjust to your context name

  // Registration Mutation
  const registratioMutation = useMutation(async ({ name, email, password }) => {
    try {
      let { data } = await Axios.post(`/user/register`, {
        name,
        email,
        password,
      });
      // Set the user data in the global context
      localStorage.setItem("token", data.token);
      Cookies.set("token", data.token);
      setUser(data.user);
      return data;
    } catch (error) {
      toast(error.response.data.message);
      // throw new Error("Failed to register");
    }
  });
  // Login Mutation
  const loginMutation = useMutation(async ({ email, password }) => {
    try {
      const { data } = await Axios.post(`/user/login`, { email, password });
      // Set the user data in the global context
      localStorage.setItem("token", data.token);
      Cookies.set("token", data.token);
      setUser(data.user);
      return data;
    } catch (error) {
      toast(error.response.data.message);
      throw new Error("Failed to register");
    }
  });

  // Logout Mutation
  const logoutMutation = useMutation(async () => {
    try {
      let { data } = await Axios.post(`/user/logout`);
      // Clear the user data in the global context
      setUser(null);
      localStorage.removeItem("token");
      Cookies.remove("token");
      return data;
    } catch (error) {
      console.log(error);
      toast(error.response.data.message);
      //   throw new Error("Failed to log out");
    }
  });

  // Login Mutation
  const updatePasswordMutation = useMutation(
    async ({ oldPassword, newPassword }) => {
      try {
        const { data } = await Axios.put(`/user/password/update`, {
          oldPassword,
          newPassword,
        });
        return data;
      } catch (error) {
        toast(error.response.data.message);
        throw new Error("Failed to register");
      }
    }
  );

  const register = async (data) => {
    return await registratioMutation.mutateAsync(data);
  };

  const login = async ({ email, password }) => {
    return await loginMutation.mutateAsync({ email, password });
  };

  const logout = async () => {
    return await logoutMutation.mutateAsync();
  };
  const updatePassword = async ({ oldPassword, newPassword }) => {
    return await updatePasswordMutation({ oldPassword, newPassword });
  };

  return { register, login, logout, updatePassword };
};

export default useAuth;