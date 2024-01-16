"use client";

import { Booking, User } from "@/interface";
import getBookingByUserID from "@/libs/getBookingByUserID";
import getUserProfile from "@/libs/getUserProfile";
import { useEffect, useState } from "react";
import BookingDetail from "./BookingDatail";
import { getCookie } from "typescript-cookie";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BookingDescribetion({ Token }: { Token: string }) {
  const [bookings, setBookings] = useState<Booking[]>();
  useEffect(() => {
    const getBookings = async () => {
      const UID = getCookie("id");
      if (!UID) return;
      try {
        const bookings = await getBookingByUserID(Token, UID);
        setBookings(bookings);
      } catch (error) {
        alert(error);
      }
    };
    getBookings();
  }, []);
  const [DeleteID, setDeleteID] = useState<string>("");
  useEffect(() => {
    if (DeleteID === "") return;
    const newBookings = bookings?.filter((bookings) => {
      return bookings.id !== DeleteID;
    });
    setBookings(newBookings);
    alert("Delete Success " + DeleteID);
  }, [DeleteID]);

  return (
    <div className="flex w-[100%] h-[100%] flex flex-col items-center justify-center pt-[70px] space-y-5">
      <div className="w-[80%] h-[30%] text-black font-bold text-5xl">
        Booking List
      </div>
      <div className="flex flex-col w-[80%] h-[70%] justify-center items-center py-12">
        {bookings?.length === 0 ? (
          <div className="text-center text-gray-500 text-4xl">NO BOOKING</div>
        ) : (
          bookings?.map((booking: Booking) => (
            <BookingDetail
              booking={booking}
              setDeleteID={(e: string) => setDeleteID(e)}
              key={booking.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
