import getEventsByProvince from "@/libs/getEventsByProvince";
import { Event } from "@/interface";
import EventCard from "../EventCard";

export default async function Closing() {
  const events = await getEventsByProvince("Bangkok");

  return (
    <div className="flex flex-col w-[100%] h-[80%] pt-5 overflow-y-auto space-y-10 px-20">
      {events.map((event: Event) => (
        <div key={event.id} className="w-[100%]">
          <EventCard Event={event} />
        </div>
      ))}

      {/*<div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <EventCard eventid="Rayong1" />
        <EventCard eventid="Rayong2" />
        <EventCard eventid="Rayong3" />
      </div>
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <EventCard eventid="Rayong4" />
        <EventCard eventid="Rayong5" />
        <EventCard eventid="Rayong6" />
  </div>*/}
    </div>
  );
}
