"use client";

import getEventsByProvince from "@/libs/getEventsByProvince";
import { Event } from "@/interface";
import EventCard from "../EventCard";
import { useEffect, useState } from "react";

export default function Closing() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data1");
      try {
        if (events.length > 0) return;
        const data = await getEventsByProvince("Bangkok");
        console.log("data", data);
        setEvents(data);
      } catch (error) {
        console.log("ERROR FETCHING DATA BY PROVINCE");
        setEvents([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-[100%] h-[80%] pt-5 overflow-y-auto space-y-10 px-20 ">
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
