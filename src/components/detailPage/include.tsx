import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';

export default function IncludeInEntry() {
    return (

        <div className="w-[50vw] h-[30vh] flex flex-col text-black">
            <div>
                <h1 className="text-5xl font-bold">What’s included in entry</h1>
                <p className="text-3xl font-light">These are included in your entry</p>
            </div>
            {/* <div className="flex flex-row flex-wrap justify-center gap-10 pt-10"> */}
            <div className='grid gap-x-10 gap-y-6 grid-cols-3 pt-10'>
                <div >
                    <p><CheckIcon sx={{ color: green[300] }} /> Finisher medal</p>
                </div>
                <div>
                    <p><CheckIcon sx={{ color: green[300] }} /> Event T-shirts</p>
                </div>
                <div>
                    <p><CheckIcon sx={{ color: green[300] }} /> Drink Stations</p>
                </div>
                <div>
                    <p><CheckIcon sx={{ color: green[300] }} /> Timing chip (single use)</p>
                </div>
                <div>
                    <p><CheckIcon sx={{ color: green[300] }} />Toilets</p>
                </div>
                <div>
                    <p><CheckIcon sx={{ color: green[300] }} /> Goodie bag</p>
                </div>
                <div>
                    <p><CheckIcon sx={{ color: green[300] }} /> Medical Assistance</p>
                </div>

            </div>

        </div>


    );
}