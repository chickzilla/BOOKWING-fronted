"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrganizeDetail from "@/components/detailPage/organizeDetail";
import RunningDetail from "@/components/detailPage/runningDetail";
import PackagePanel from "@/components/detailPage/packagePanel";
import IncludeInEntry from "@/components/detailPage/include";
import MapDetail from "@/components/detailPage/mapDetail";
import getEventByID from "@/libs/getEventByID";
import { error } from "console";
import { Event } from "@/interface";
export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  const [event,setEvent] = useState<Event >({
    id: "",
    name: "",
    longitude: 0,
    latitude: 0,
    type: [],
    picture: "",
    province: "",
    date: "",
    time: "",
    package: [],
    description: ""
  });
  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const data= await getEventByID(params.eventid);
        setEvent(data);
        
      }catch (error){
        console.log("ERROR")
      }
    };
    fetchData();
    
  }, []);
  return (

    <main className="h-[400vh] w-[100vw] bg-white mt-[70px]">
      <div className="flex flex-col w-[100vw] h-[400vh] items-center space-y-14 ">
        <RunningDetail eventName={event?.name} date={event.date} distance={event.type} />
        <OrganizeDetail eventDetail= {event.description}/>
        <PackagePanel />
        <IncludeInEntry allInclude={event.package} />
        {/* <MapDetail /> */}
      </div>
    </main>
  );
}
