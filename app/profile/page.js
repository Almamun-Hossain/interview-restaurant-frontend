"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../_utils/UserProvider";
import AppLayout from "../_layout/AppLayout";
import Input from "../_components/UI/Input";
import useAuth from "../_hook/useAuth";
import { toast } from "react-toastify";
import Axios from "../_utils/Axios";

const Profile = () => {
  let { user } = useContext(UserContext);
  let [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  let { updatePassword } = useAuth();

  let onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    try {
      // alert(JSON.stringify(formData));
      // return;
      let { data } = await Axios.put("/user/password/update", formData);
      if (data) {
        toast(data.message);
        setFormData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast(error?.response?.data?.message);
    }
  };

  return (
    <AppLayout>
      <div className="w-1/2 mx-auto my-10 bg-white shadow-lg p-10">
        <div className="text-center">
          <h3>Welcome, {user?.name}</h3>
          <span className="text-xl text-secondary">{user?.email}</span>
        </div>

        <div className="my-5">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Old Password
              </label>
              <Input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="oldPassword"
                type="password"
                placeholder="Type old password"
                value={formData.oldPassword}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                New Password
              </label>
              <Input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="newPassword"
                type="password"
                placeholder="Type new password"
                value={formData.newPassword}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <Input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Type password again"
                value={formData.confirmPassword}
                onChange={onChange}
              />
            </div>
            <div className="text-center">
              {user?.email === "almamun@mail.com" ||
              user?.email === "almamun-admin@mail.com" ? (
                <button
                  type="button"
                  className="text-white bg-gray px-5 py-2 rounded-md"
                  disabled={true}
                >
                  Can't update password for this Users
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-secondary px-5 py-2 rounded-md"
                >
                  Update Password
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
