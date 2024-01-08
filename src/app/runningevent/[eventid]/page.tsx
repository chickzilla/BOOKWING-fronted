"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrganizeDetail from "@/components/detailPage/organizeDetail";
import RunningDetail from "@/components/detailPage/runningDetail";
import PackagePanel from "@/components/detailPage/packagePanel";
import IncludeInEntry from "@/components/detailPage/include";
import MapDetail from "@/components/detailPage/mapDetail";
import getEventByID from "@/libs/getEventByID";
import { Event } from "@/interface";
import EventType_Data from "@/data/eventType";

export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  const [event, setEvent] = useState<Event>({
    id: "",
    name: "",
    longitude: 0,
    latitude: 0,
    type: [],
    picture: "",
    province: "",
    location: "",
    date: "",
    time: "",
    package: [],
    description: "",
    organizer: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventByID(params.eventid);
        setEvent(data);

        if (data != null) {
          const eventTypes: string[] = data.type.map((type: string) => {
            const eventType = EventType_Data.find(
              (event) => event.link === type
            );
            return eventType ? eventType.title : type;
          });
          setEvent({ ...data, type: eventTypes });
        }
      } catch (error) {
        console.log("ERROR");
      }
    };
    fetchData();
  }, []);
  return (
    <main className="w-full bg-neutral-100 h-auto py-16 mt-[70px]">
      <div className="flex flex-col w-[100%] h-[100%] items-center space-y-20 ">
        <RunningDetail
          eventName={event?.name}
          date={event.date}
          distance={event.type}
          picture={event.picture}
          location={event.location}
        />
        <OrganizeDetail eventDetail={event.description} />
        <IncludeInEntry allInclude={event.package} />
        <PackagePanel
          id={params.eventid}
          allDistance={event.type}
          date={event.date}
          time={event.time}
          province={event.location}
        />
        <MapDetail />
      </div>
    </main>
  );
}
