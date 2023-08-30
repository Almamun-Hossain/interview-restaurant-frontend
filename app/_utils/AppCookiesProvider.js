import { useSession } from "next-auth/react";
import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";

const AppCookiesProvider = ({ children }) => {
  let { data: session } = useSession();
  let [cookies, setCookies] = useCookies([session]);
  if (session && session.user) {
    if (!cookies.token)
      setCookies("token", session.user.token, {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
  }

  return <CookiesProvider>{children}</CookiesProvider>;
};

export default AppCookiesProvider;
