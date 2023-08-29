"use client";
import useAuthForm from "@/app/_hook/useAuthForm";
import GuestLayout from "@/app/_layout/GuestLayout";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Register = () => {
  let { formData, submitRegister, onChange } = useAuthForm();
  let router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <GuestLayout>
      <div className="min-h-[500px] flex place-items-start justify-center items-center">
        <div className="w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center">
            <h3 className="capitalize">Join with us</h3>
          </div>
          <form onSubmit={(e) => submitRegister(e)} method="post">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => onChange(e)}
                required={true}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => onChange(e)}
                required={true}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={formData.password}
                onChange={(e) => onChange(e)}
                required={true}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary"
                href="/login"
              >
                Already have account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Register;
