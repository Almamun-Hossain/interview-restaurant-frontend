import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
};

export default Providers;
