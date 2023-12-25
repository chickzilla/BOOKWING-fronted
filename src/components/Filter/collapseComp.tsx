

export default function CollapseComp() {
    return (
        <div className="w-full h-12 relative my-10 ">
            {/* <div className="bg-white w-full h-12 flex flex-row justify-between items-center">
                <h1>province</h1>
                <div className="relative w-12 h-12 cursor-pointer">
                    <input type="checkbox" className="peer w-12 h-12 absolute opacity-0 z-10 cursor-pointer">
                    </input>
                    <div className="absolute top-3 right-3 rotate-0 peer-checked:rotate-180 transition-tranform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full h-40">
                

            </div> */}
            
            <input type="checkbox" className="peer w-12 h-12 absolute opacity-1 z-10 cursor-pointer"></input>
            <div className="w-full max-h-0 peer-checked:max-h-40 bg-black overflow-hidden">
                <div className="w-full h-40 text-white">
                    gfdsg
                </div>
            </div>
            
        </div>
    );
}