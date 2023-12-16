import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function PackageCard(){
    return (
        <div className="w-[35vw] h-[35vh] bg-white rounded-lg border-black border-solid border-2 text-black basis-1/2">
            <h1 className="text-2xl p-2 font-bold">3KM</h1>
            <p className="text-xl p-2 font-normal"><LocationOnIcon/>------</p>
            <p className="text-xl p-2 font-normal"><CalendarMonthIcon/> ------</p>
            <p className="text-xl p-2 font-normal"><AccessTimeIcon/>------</p>
        </div>
    );
}