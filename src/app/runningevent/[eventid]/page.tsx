"use client";
import React from "react";
import Image from "next/image";
import OrganizeDetail from "@/components/detailPage/organizeDetail";
import RunningDetail from "@/components/detailPage/runningDetail";
import PackagePanel from "@/components/detailPage/packagePanel";

export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  return (
    <main className="h-[300vh] w-[100vw] bg-white mt-[70px]">
      <div className="flex flex-col w-[100vw] h-[200vh] items-center space-y-16 pt-10 ">
        <RunningDetail eventName="Event Name" date="20/20/20" />

        <OrganizeDetail />

        <PackagePanel />
      </div>
    </main>
  );
}
