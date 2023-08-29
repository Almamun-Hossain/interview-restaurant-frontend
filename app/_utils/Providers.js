import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./UserProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <UserProvider>
        <SessionProvider>{children}</SessionProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default Providers;
