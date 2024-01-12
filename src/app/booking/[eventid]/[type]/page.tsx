import BookingInformation from "@/components/BookingDetail/BookingInformation";
import EventBookingDatail from "@/components/BookingDetail/EventBookingDetail";
import getEventByID from "@/libs/getEventByID";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField/TextField";

export default async function BookingPage({
  params,
}: {
  params: { eventid: string; type: string };
}) {
  const event = await getEventByID(params.eventid);

  return (
    <main className="flex flex-col items-center w-full bg-neutral-100 h-auto py-16 pt-[145px]">
      <EventBookingDatail event={event} type={params.type} />
      <BookingInformation eventid={params.eventid} eventtype={params.type} />
    </main>
  );
}
