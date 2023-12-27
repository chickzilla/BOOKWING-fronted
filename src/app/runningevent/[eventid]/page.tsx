"use client";
import React from "react";
import Image from "next/image";
import OrganizeDetail from "@/components/detailPage/organizeDetail";
import RunningDetail from "@/components/detailPage/runningDetail";
import PackagePanel from "@/components/detailPage/packagePanel";
import IncludeInEntry from "@/components/detailPage/include";
import MapDetail from "@/components/detailPage/mapDetail";
export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  return (

    <main className="h-[400vh] w-[100vw] bg-white mt-[70px]">
      <div className="flex flex-col w-[100vw] h-[400vh] items-center space-y-14 ">
        <RunningDetail eventName="Adrenaline SUB 1 Chiang Rai" date="17 Dec, 2023 (Sun)" distance={["3km", "5km"]} />
        <OrganizeDetail eventDetail= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum rem! Nesciunt ab voluptatibus quod quia. Culpa ex natus dolorem, aut sed debitis ea quas, quasi necessitatibus aperiam voluptate et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum rem! Nesciunt ab voluptatibus quod quia. Culpa ex natus dolorem, aut sed debitis ea quas, quasi necessitatibus aperiam voluptate et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum rem! Nesciunt ab voluptatibus quod quia. Culpa ex natus dolorem, aut sed debitis ea quas, quasi necessitatibus aperiam voluptate et."/>
        <PackagePanel />
        <IncludeInEntry allInclude={["Finisher medal",
          "Event T-shirts",
          "Drink Stations",
          "Timing chip (single use)",
          "Toilets",
          "Goodie bag",
          "Medical Assistance"]} />
        <MapDetail />
      </div>
    </main>
  );
}
