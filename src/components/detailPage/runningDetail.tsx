'use client'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';
import { useState ,useEffect} from 'react';
export default function RunningDetail({ eventName, date ,distance }: { eventName: string, date: string,distance:string[] }) {

    const [allDistance,setAllDistance] = useState("");
    useEffect(() => {
        setAllDistance(distance.join(", "));
    }, [distance]);
    
    return (
        <div className='flex flex-row w-[80vw] h-[50vh] space-x-24 mt-20 overflow-hidden '>
            <div className='w-[40%] h-[80%] overflow-hidden pt-10'>
                <Image className='object-cover w-full h-full '
                    src='/img/head_picture.jpg'
                    alt="cover"
                    width={100}
                    height={100}
                    sizes="1000px"
                />
            </div>
            <div className='w-[50%] h-[80%] text-black pt-10'>
                <h1 className='text-3xl font-bold'>{eventName}</h1>
                <div className='mt-14'>
                    <LocationOnIcon  /> <p className='pl-6 inline text-xl font-normal'>Chiang Rai, Thailand</p>
                </div>
                <div className='mt-2'>
                    <CalendarMonthIcon /> <p className='pl-6 inline text-xl'>{date}</p>
                </div>
                <div className='w-full border-t-zinc-400 border-2 mt-10 mb-5 ' />
                <div className='flex flex-row w-full'>
                    <p className='font-bold mr-10'>Running :</p>
                    <p className='ml-10'>{allDistance}</p>
                </div>
                <div className='w-full border-t-zinc-400 border-2 mt-5' />

                
            </div>
            

        </div>
    );
}