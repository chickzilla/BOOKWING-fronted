"use client";
import React from 'react';
import Image from 'next/image'
import OrganizeDetail from '@/components/detailPage/organizeDetail';
import RunningDetail from '@/components/detailPage/runningDetail';
import PackagePanel from '@/components/detailPage/packagePanel';

export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  return (
    // <main className='h-[300vh] w-[100vw] bg-white '>
    //   <div className='flex flex-col items-center h-[200vh] w-[100vw] '>
    //     <RunningDetail eventName='Event Name' date='20/20/20' />

    //     <OrganizeDetail />
    //     <div className='text-black items-start w-[80vw]'>
    //       <h1 className='text-2xl'>Races offered by this event</h1>
    //       <p>You have less than a week to prepare</p>
    //     </div>



    //     <PackagePanel />



    //   </div>
    // </main>
    <main className='h-[300vh] w-[100vw] bg-white mt-[70px]'>
      <div className='flex flex-col w-[100vw] h-[200vh] items-center space-y-16 pt-10 '>
        
        <RunningDetail eventName='Event Name' date='20/20/20' />
        

        <OrganizeDetail />

        <PackagePanel/>

      </div>

    </main>
  );
}
