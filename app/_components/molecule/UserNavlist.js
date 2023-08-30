import React from "react";
import Link from "next/link";
const UserNavlist = ({ user = null }) => {
  return (
    <>
      <Link href="/restaurant" className="text-white hover:text-secondary">
        Restaurant
      </Link>

      {user && !(user.isAdmin)? (
        <Link href="/reservation" className="text-white hover:text-secondary">
          Reservation
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default UserNavlist;
