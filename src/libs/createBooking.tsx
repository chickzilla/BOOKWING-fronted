import { Booking } from "@/interface";

export default async function createBooking({
  booking,
  token,
}: {
  booking: Booking;
  token: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(booking),
    }
  );
  if (!response.ok) {
    throw new Error("Fail to create booking");
  }
  return await response.json();
}
