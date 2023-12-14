import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export default function OrganizeDetail() {
    return (
        <div className='w-[80%] h-[40%] flex flex-row items-center'>
            <div className='bg-white w-[100%] h-[40%] shadow-md shadow-gray-500 flex flex-row justify-around items-center '>
                <div className=' w-[10%] h-[40%]'>
                    <Chip sx={{ width: 1, height: 1, fontSize: 20, fontWeight: '500', p: 1 }}
                        avatar={<Avatar alt="cover" src="/img/myImg.jpg" />}
                        label="My Name"
                        variant="outlined"
                    />
                </div>

            </div>
        </div>
    );
}