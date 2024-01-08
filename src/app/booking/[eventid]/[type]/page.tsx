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
  console.log(event);

  return (
    <main className="flex flex-col items-center w-full bg-neutral-100 h-auto py-16 pt-[145px]">
      <EventBookingDatail event={event} type={params.type} />
      <div className="flex flex-col gap-y-8 bg-white w-[50%] h-auto items-center px-8 py-12 rounded-xl shadow-lg border-2 border-black hover:cursor-pointer">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          sx={{
            width: "80%",
          }}
          size="small"
          value=""
          //onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          sx={{
            width: "80%",
          }}
          size="small"
          value=""
          //onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          sx={{
            width: "80%",
          }}
          size="small"
          value=""
          //onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          sx={{
            width: "80%",
          }}
          size="small"
          value=""
          //onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </main>
  );
}
