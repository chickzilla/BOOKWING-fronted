"use client";
<<<<<<< Updated upstream
import React from "react";
import Image from "next/image";
import OrganizeDetail from "@/components/detailPage/organizeDetail";
import RunningDetail from "@/components/detailPage/runningDetail";
import PackagePanel from "@/components/detailPage/packagePanel";
||||||| Stash base
import React from 'react';
import Image from 'next/image'
import OrganizeDetail from '@/components/detailPage/organizeDetail';
import RunningDetail from '@/components/detailPage/runningDetail';
import PackagePanel from '@/components/detailPage/packagePanel';
=======
import React from 'react';
import Image from 'next/image'
import OrganizeDetail from '@/components/detailPage/organizeDetail';
import RunningDetail from '@/components/detailPage/runningDetail';
import PackagePanel from '@/components/detailPage/packagePanel';
import RouteMap from '@/components/detailPage/routeMap';
import IncludeInEntry from '@/components/detailPage/include';
>>>>>>> Stashed changes

export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  return (
<<<<<<< Updated upstream
    <main className="h-[300vh] w-[100vw] bg-white mt-[70px]">
      <div className="flex flex-col w-[100vw] h-[200vh] items-center space-y-16 pt-10 ">
        <RunningDetail eventName="Event Name" date="20/20/20" />

||||||| Stash base
    <main className='h-[300vh] w-[100vw] bg-white mt-[70px]'>
      <div className='flex flex-col w-[100vw] h-[200vh] items-center space-y-16 pt-10 '>
        
        <RunningDetail eventName='Event Name' date='20/20/20' />
        

=======
    <main className='h-[400vh] w-[100vw] bg-white mt-[70px]'>
      <div className='flex flex-col w-[100vw] h-[400vh] items-center space-y-14 pt-10 '>
        
        <RunningDetail eventName='Event Name' date='20/20/20' />
>>>>>>> Stashed changes
        <OrganizeDetail />
<<<<<<< Updated upstream

        <PackagePanel />
||||||| Stash base

        <PackagePanel/>

=======
        <PackagePanel/>
        <RouteMap imgSrc = "/img/route_map.jpg"/>
        <IncludeInEntry/>
>>>>>>> Stashed changes
      </div>
    </main>
  );
}
