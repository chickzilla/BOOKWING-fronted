import getEventByID from "@/libs/getEventByID";

export default async function BookingPage({
  params,
}: {
  params: { eventid: string; type: string };
}) {
  const event = await getEventByID(params.eventid);
  console.log(event);

  return (
    <main className="flex justify-center w-full bg-neutral-100 h-[100vh] py-16 pt-[160px]">
      <div className="bg-white w-[70%] h-[50vh] justify-between px-5 py-5 rounded-xl shadow-lg border-2 border-black hover:cursor-pointer duration-300">
        <div className="text-black text-2xl">{event.name}</div>
        <div className="text-black">{event.distance}</div>
        <div className="text-black">{event.location}</div>
        <div className="text-black">{event.data}</div>
        <div className="text-black">{event.time}</div>
      </div>
    </main>
  );
}
