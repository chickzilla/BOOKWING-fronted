import BasicSelect from '@/components/detailPage/dropBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';
export default function RunningDetail({eventName ,date} : {eventName :string,date:string}) {
    return (
        <div className='flex flex-row w-[80%] h-[60%] shadow-md shadow-gray-200 mt-20 overflow-hidden rounded-lg'>
            <div className='w-[40%] h-[100%] overflow-hidden'>
                <Image 
                    src='/img/head_picture.jpg'
                    alt="cover"
                    width={1000}
                    height={1000}
                    style ={{
                        width :1000,
                        height :1000
                    }}
                    sizes="500px"
                   

                />

                
            </div>
            <div className='w-[60%] h-[100%]' >
                <h1 className='text-4xl pt-10 pb-3 px-5 font-bold text-black'>
                    Event Name
                </h1>
                <p className='text-2xl pt-5 pb-2 px-5 font-normal text-gray-900'>
                    <LocationOnIcon /> rayong ranong yara
                </p>
                <p className='text-2xl pt-1 pb-2 px-5 font-normal text-gray-900'>
                    <CalendarMonthIcon /> 20/20/20
                </p>
                <p className='text-2xl pt-1 pb-3 px-5 font-normal text-gray-900'>
                    <AccessTimeIcon /> 18 :00
                </p>
                <p className='text-2xl pt-1 pb-3 px-5 font-normal text-gray-900'>
                    ---------------------------------------------
                </p>
                <p className='text-2xl pt-1 pb-3 px-5 font-normal text-gray-900'>Distance : 3km 5km 10km</p>
                <p className='text-2xl pt-1 pb-3 px-5 font-normal text-gray-900'>
                    ---------------------------------------------
                </p>

                
            </div>

        </div>
    );
}