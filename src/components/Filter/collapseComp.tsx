

export default function CollapseComp({filterName} : {filterName:string}) {
    return (
        <div className="relative w-full overflow-hidden mt-1 rounded-md ">
            <input type="checkbox" className="opacity-0 peer z-10 absolute h-12 w-12 right-0" />
            <div className="bg-gray-100 h-12 w-full pl-5 flex items-center">
                <h1 className="text-gray-500">
                    {filterName}
                </h1>
            </div>
            <div className="text-gray-500 absolute top-3 right-3 rotate-0 peer-checked:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
            <div className="bg-black text-white overflow-hidden max-h-0 peer-checked:max-h-80 
            transition-tranfrom duration-500">
                <div className="p-4">
                    <p>hfd</p>
                    <p>hfd</p>
                </div>
            </div>

        </div>
    );
}