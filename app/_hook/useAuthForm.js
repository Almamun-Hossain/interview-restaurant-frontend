import React, { useState } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const useAuthForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let { login, register } = useAuth();

  const router = useRouter();

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    login(formData);
    // if (data) {
    //   toast("You have successfully logged in");
    //   setFormData({ ...formData, email: "", password: "" });
    //   router.back();
    // }
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    let data = await register(formData);
    if (data) {
      setFormData({ ...formData, name: "", email: "", password: "" });
      router.push("/login");
    }
  };

  return { formData, setFormData, onChange, submitLogin, submitRegister };
};

export default useAuthForm;
