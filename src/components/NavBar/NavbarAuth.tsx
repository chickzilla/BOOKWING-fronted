"use client";

import Link from "next/link";
import { removeCookie } from "typescript-cookie";
import { useEffect, useState } from "react";
import { getCookie } from "typescript-cookie";

export default function NavbarAuth() {
  const [isToken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie("jwt");
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  const handleSignOut = () => {
    removeCookie("jwt");
    window.location.reload();
  };
  return (
    <div className="h-full w-[100%] flex flex-row items-center text-white font-md justify-end pr-8">
      <div className=" h-[100%] flex items-center justify-center w-[50%]">
        <Link
          href="/register"
          className="border border-white p-2 hover:bg-white hover:text-[#B22222] transition duration-300 rounded-md"
        >
          Create account
        </Link>
      </div>
      <div className="h-[100%] flex items-center justify-center pr-8 pl-5 w-[50%]">
        {isToken ? (
          <div
            onClick={() => {
              handleSignOut();
            }}
            className="hover:cursor-pointer"
          >
            Sign out
          </div>
        ) : (
          <Link href="/login"> Sign in </Link>
        )}
      </div>
    </div>
  );
}
