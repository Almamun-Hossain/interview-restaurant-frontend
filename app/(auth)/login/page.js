"use client";
import Label from "@/app/_components/UI/Label";
import useAuthForm from "@/app/_hook/useAuthForm";
import GuestLayout from "@/app/_layout/GuestLayout";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  let { formData, submitLogin, onChange } = useAuthForm();
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
            <h3 className="capitalize">Login to your account</h3>
            <div className="text-sm">
              <p>
                <span>
                  <strong>Test User: </strong>almamun@mail.com{" "}
                </span>
                <strong>Password: </strong>almamun@123
              </p>
              <p>
                <strong>Test Admin: </strong>almamun-admin@mail.com{" "}
                <strong>Password:</strong> almamun@123
              </p>
            </div>
          </div>
          <form onSubmit={(e) => submitLogin(e)} method="post">
            <div className="mb-4">
              <Label title="Email" />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChange}
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
                placeholder="******************"
                value={formData.password}
                onChange={onChange}
                required={true}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="text-center my-3">
            <span>
              Don&apos;t have account create?{" "}
              <Link
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary"
                href="/register"
              >
                Sign Up?
              </Link>
            </span>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;
