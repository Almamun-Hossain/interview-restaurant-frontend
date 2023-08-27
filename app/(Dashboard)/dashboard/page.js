"use client";
import AppLayout from "@/app/_layout/AppLayout";
import { UserContext } from "@/app/_utils/UserProvider";
import { useContext } from "react";

const Dashboard = () => {
  let { user } = useContext(UserContext);
  return (
    <AppLayout>
      <h1>Welcome {user?.name}</h1>
    </AppLayout>
  );
};

export default Dashboard;
