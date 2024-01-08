"use client";

import Link from "next/link";
import { removeCookie } from "typescript-cookie";
import { useEffect, useState } from "react";
import { getCookie } from "typescript-cookie";
import getUserProfile from "@/libs/getUserProfile";
import { User } from "@/interface";
import { useRouter } from "next/navigation";

export default function NavbarAuth() {
  const [isToken, setIsToken] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getToken = getCookie("jwt");
    setToken(getToken || "");
    if (getToken) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (isToken) {
        try {
          const result = await getUserProfile({ token });
          const user: User = result.user;
          setUsername(user.username);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUser();
  }, [isToken]);

  const handleSignOut = () => {
    removeCookie("jwt");
    setIsToken(false);
    window.location.href = "/";
  };
  return (
    <div className="h-full w-[100%] flex flex-row items-center text-white font-md justify-between pr-2">
      <div className="h-[100%] flex items-center justify-center pr-8 w-[50%] overflow-hidden items-center flex flex-row text-center text-sm">
        {isToken ? `Runner: ${username}` : "Hi Guest"}
      </div>
      <div className=" h-[100%] flex items-center justify-center w-[25%]">
        <Link
          href="/register"
          className="border border-white p-2 hover:bg-white hover:text-[#B22222] transition duration-300 rounded-md w-[100%] text-center"
        >
          Create account
        </Link>
      </div>
      <div className="h-[100%] flex items-center justify-center pr-8 pl-5 w-[25%]">
        {isToken ? (
          <div
            onClick={() => {
              handleSignOut();
            }}
            className="hover:cursor-pointer w-[100%] text-center"
          >
            Sign out
          </div>
        ) : (
          <Link href="/login" className="w-[100%] text-center">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
