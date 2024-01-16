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
    <main className="flex flex-col items-center w-full bg-neutral-100 h-[100vh] py-16 pt-[145px]">
      <BookingDescribetion token={token}></BookingDescribetion>
    </main>
  );
}
