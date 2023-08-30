"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import AppCookiesProvider from "./AppCookiesProvider";

const Providers = ({ children }) => {
  const client = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={client}>
        <AppCookiesProvider>{children}</AppCookiesProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
