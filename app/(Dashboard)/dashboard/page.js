"use client";
import AppLayout from "@/app/_layout/AppLayout";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const {data:session} = useSession();
  return (
    <AppLayout>
      <h1>Welcome {session?.user?.name}</h1>
    </AppLayout>
  );
};

export default Dashboard;
