"use client";
import BookingDescribetion from "@/components/BookingDetail/BookingDescribetion";
import getBookingByUserID from "@/libs/getBookingByUserID";
import { useEffect, useState } from "react";
import { getCookie } from "typescript-cookie";

export default function MyBookingPage() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = () => {
      const token = getCookie("jwt");
      setToken(token || "");
    };
    getToken();
  }, []);
  return (
    <main className="bg-neutral-100 dark:bg-gray-900 flex flex-col items-center w-full bg-neutral-100 h-[auto] min-h-[100vh] pt-[70px]">
      {token && <BookingDescribetion Token={token}></BookingDescribetion>}
    </main>
  );
}
