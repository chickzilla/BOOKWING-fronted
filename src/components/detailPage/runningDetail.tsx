import BasicSelect from '@/components/detailPage/dropBox';

export default function RunningDetail({eventName ,date} : {eventName :string,date:string}) {
    return (
        <div className='flex flex-row w-[80%] h-[60%] shadow-md shadow-gray-500 mt-20'>
            <div className='w-[45%] h-[100%]'>
                {/* <Image className='relative top-[20%] left-[18%] img-fluid '
                alt="Picture of runningEvent"
                src='/img/banner_example.jpg'
                sizes="100vw"
                width={100}
                height={100}
                style={{
                width: '20vw',
                height: 'auto',
                }}
                /> */}
            </div>
            <div className='w-[55%] h-[100%]'>
                <div className='w-[50%] h-[40%] relative top-[20%] '>
                    <h1 className='font-bold text-3xl text-black '>eventName</h1>
                    <p className=' text-xl text-black '>Date : 20/20/20 </p>
                    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga provident ex alias rerum deleniti dolore. Cum voluptas quidem accusantium molestias, suscipit cumque culpa quis quo, est, alias facilis corrupti.</p>
                </div>
                <div className='w-[25%] h-[20%]  relative top-[15%]'>
                    <p className=' text-2xl text-black '>Select Package</p>
                    <BasicSelect />
                </div>
            </div>

        </div>
    );
}