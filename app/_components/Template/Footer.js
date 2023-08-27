import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-dark py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2023 Curry Leaves. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Terms of Use
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
