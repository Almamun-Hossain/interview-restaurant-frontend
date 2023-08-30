import { useSession } from "next-auth/react";
import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";

const AppCookiesProvider = ({ children }) => {
  // let cookie = new Cookies();
  let { data: session } = useSession();
  let [cookies, setCookies] = useCookies([session]);
  if (session && session.user) {
    if (!cookies.token) {
      setCookies("token", session.user.token, {
        httpOnly: true,
        path: "/",
        sameSite: "none",
        secure: true,
      });
    }
  }

  return <CookiesProvider>{children}</CookiesProvider>;
};

export default AppCookiesProvider;
