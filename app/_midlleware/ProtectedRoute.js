"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ProtectedRoute = ({ children }) => {
  const { data: session } = useSession();
  let router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);
  return children;
};

export default ProtectedRoute;
