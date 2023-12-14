"use client";
import React from 'react';
import Image from 'next/image'
import BasicSelect from '@/components/detailPage/dropBox';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import OrganizeDetail from '@/components/detailPage/organizeDetail';
import RunningDetail from '@/components/detailPage/runningDetail';

export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  return (
    <main className='h-[150vh] w-[100vw] bg-white'>
      <div className='flex flex-col justify-around items-center h-[100vh] w-[100vw]'>
        <RunningDetail eventName='Event Name' date='20/20/20'/>

        <OrganizeDetail />


      </div>
    </main>
  );
}
