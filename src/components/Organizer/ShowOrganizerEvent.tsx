"use client";

import getEventsByOrganizer from "@/libs/getEventsByOrganizer";
import { Event } from "@/interface";
import { useState, useEffect } from "react";
import EventCard from "../EventCard";

export default function ShowOrganizerEvent({
  organizer,
}: {
  organizer: string;
}) {
  const [eventList, setEventList] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventsByOrganizer("user1");
        setEventList(data);
      } catch (error) {
        setEventList([]);
      }
    };
    fetchEvent();
  }, []);

  return (
    <div className="w-[80%] h-[auto] flex flex-col space-y-5 py-5 overflow-x-hidden p-10">
      {eventList.length === 0 ? (
        <div className="text-center text-gray-500 text-4xl">NO EVENT</div>
      ) : (
        eventList.map((event: Event) => (
          <div className="w-[100%]" key={event.id}>
            <EventCard Event={event} />
          </div>
        ))
      )}
    </div>
  );
}
