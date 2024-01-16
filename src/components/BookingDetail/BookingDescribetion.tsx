import { Booking, User } from "@/interface";
import getBookingByUserID from "@/libs/getBookingByUserID";
import getUserProfile from "@/libs/getUserProfile";
import { useEffect, useState } from "react";
import BookingDetail from "./BookingDatail";

export default function BookingDescribetion({ token }: { token: string }) {
  //const [user, setUser] = useState<User>();
  const [bookings, setBookings] = useState<Booking[]>();
  console.log(token);
  useEffect(() => {
    // const getUser = async () => {
    //   if (token) {
    //     const userProfile = await getUserProfile({ token });
    //     setUser(userProfile.user);
    //   }
    // };
    // getUser();
    const getBookings = async () => {
      const bookings = await getBookingByUserID({ token });
      setBookings(bookings);
    };
    getBookings();
  });

  return (
    <div className="flex bg-white w-[65%] h-[50vh] justify-between px-8 py-5 rounded-xl shadow-lg border-2 border-black hover:cursor-pointer mb-20">
      <div className="flex flex-col min-w-[55%] justify-between">
        {bookings?.length === 0 ? (
          <div className="text-center text-gray-500 text-4xl">NO BOOKING</div>
        ) : (
          bookings?.map((booking) => <BookingDetail />)
        )}
      </div>
    </div>
  );
}
