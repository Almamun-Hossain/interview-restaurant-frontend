"use client";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/image";
import Container from "../UI/Container";
import useAuth from "@/app/_hook/useAuth";
import { useRouter } from "next/navigation";
import UserNavlist from "../molecule/UserNavlist";
import AdminNavlist from "../molecule/AdminNavlist";
import { useSession } from "next-auth/react";

const Navbar = () => {
  let { data: session } = useSession();
  let { logout } = useAuth();
  const router = useRouter();
  const onLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <div className="bg-primary shadlow-lg w-full">
      <Container>
        <nav className="py-3 flex items-center justify-between">
          {/* Logo on the left */}
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Restaurant Logo" className="h-12 w-12" />
              <span className="text-white text-lg font-semibold">
                Curry Leaves
              </span>
            </div>
          </Link>

          {/* Menu items on the right */}

          <div className="flex items-center space-x-4">
            {session?.user?.isAdmin ? (
              <AdminNavlist />
            ) : (
              <UserNavlist user={session?.user} />
            )}

            {session?.user ? (
              <>
                <div className="group relative">
                  <button className="text-white hover:text-secondary">
                    {session?.user?.name}
                  </button>
                  <ul className="hidden z-50 group-hover:block absolute w-full">
                    <div className="bg-white text-gray-800 rounded shadow-lg mt-1 py-1">
                      <li>
                        <Link
                          href="/profile"
                          className="block px-2 py-1 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={(e) => onLogout(e)}
                          className="block px-2 py-1 hover:text-secondary"
                        >
                          Logout
                        </button>
                      </li>
                    </div>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="text-white hover:text-secondary">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-white hover:text-secondary"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
