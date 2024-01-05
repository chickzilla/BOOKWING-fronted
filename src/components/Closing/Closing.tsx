import getEventsByProvince from "@/libs/getEventsByProvince";
import { Event } from "@/interface";
import EventCard from "../EventCard";

export default async function Closing() {
  let events: Event[] = [];
  try {
    events = await getEventsByProvince("Bangkok");
  } catch (error) {
    events = [];
  }

  return (
    <div className="flex flex-col w-[100%] h-[80%] pt-5 overflow-y-auto space-y-10 px-20">
      {events.length === 0 ? (
        <div className="text-center text-gray-500 text-4xl">NO EVENT</div>
      ) : (
        events.map((event: Event) => (
          <div key={event.id} className="w-[100%]">
            <EventCard Event={event} />
          </div>
        ))
      )}
    </div>
  );
}
