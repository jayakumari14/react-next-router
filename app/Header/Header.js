"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="bg-green-500 text-white flex justify-between items-center text-lg p-5">
        <h1>Logo</h1>
        <div>
          <Link href="/About" className="m-5">
            About
          </Link>
          <Link href="/Contact" className="m-5">
            Contact
          </Link>
          <Link href="/Courses" className="m-5">
            Courses
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
