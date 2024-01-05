import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function OrganizeDetail({
  eventDetail,
}: {
  eventDetail: string;
}) {
  return (
    <div className="w-[80%] h-[40vh] text-black rounded-lg px-5">
      <h1 className="text-3xl pt-10 font-bold">About the Event 🏃‍♂️🌟</h1>
      <p className="text-lg py-5 indent-16 text-justify text-gray-800">
        {eventDetail}
      </p>
    </div>
  );
}
