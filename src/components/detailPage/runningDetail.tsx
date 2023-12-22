import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';
export default function RunningDetail({eventName ,date} : {eventName :string,date:string}) {
    return (
        <div className='flex flex-row w-[80vw] h-[60vh] p-30 overflow-hidden rounded-lg'>
            <div className='w-[40%] h-[100%] overflow-hidden'>
                <Image 
                    src='/img/head_picture.jpg'
                    alt="cover"
                    width={0}
                    height={0}
                    style ={{
                        width :1000,
                        height :1000
                    }}
                    sizes="500px"
                   

                />  
            </div>
            <div className='w-[60%] h-[100%]' >
                <h1 className='text-5xl pt-10 pb-3 px-8 font-bold text-black'>
                    Event Name
                </h1>
                <p className='text-2xl pt-5 pb-2 px-8 font-normal text-gray-900'>
                    <LocationOnIcon sx={{display : 'inline'}}/> <p className='pl-6 inline'>rayong ranong yara</p>
                </p>
                <p className='text-2xl pt-1 pb-2 px-8 font-normal text-gray-900'>
                    <CalendarMonthIcon sx={{display : 'inline'}}/> <p className='pl-6 inline'>20/20/20</p>
                </p>
                <p className=' text-2xl pt-1 pb-3 px-8 font-normal text-gray-900'>
                    <AccessTimeIcon sx={{display : 'inline'}}/> <p className='pl-6 inline'>18 :00</p>
                </p>
                <p className='text-xl pt-1 pb-3 px-8 font-normal text-gray-900'>
                    ----------------------------------------------------------------------------
                </p>
                <p className='text-2xl pt-1 pb-3 px-8 font-normal text-gray-900'>Distance : 3km 5km 10km</p>
                <p className='text-xl pt-1 pb-3 px-8 font-normal text-gray-900'>
                    ----------------------------------------------------------------------------
                </p>

                
            </div>

        </div>
    );
}