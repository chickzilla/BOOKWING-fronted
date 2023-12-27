
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function OrganizeDetail({eventDetail} : {eventDetail:string}) {
    return (
        <div className='bg-white w-[80vw] h-[40vh]  text-black overflow-hidden rounded-lg mt-20 '>
            <h1 className='text-5xl px-10 pt-10 font-bold'>About the Event 🏃‍♂️🌟</h1>
            <p className='text-xl px-10 py-5 indent-16 text-justify'>{eventDetail}</p>
        </div>

    );
}