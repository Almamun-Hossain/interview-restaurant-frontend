"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./UserProvider";
import { SessionProvider } from "next-auth/react";
import AppCookiesProvider from "./AppCookiesProvider";

const Providers = ({ children }) => {
  const client = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={client}>
        <UserProvider>
          <AppCookiesProvider>{children}</AppCookiesProvider>
        </UserProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
