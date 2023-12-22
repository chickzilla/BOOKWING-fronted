
import Image from "next/image";
export default function RouteMap( {imgSrc} : {imgSrc : string} ){
    return (
        <main>
            <div className="w-[50vw] h-[100vh] flex flex-col">
                <div className="text-5xl text-black font-bold pt-5 pb-10">
                    <h1>
                        Map 🗺️
                    </h1>
                </div>
                <div className="w-[100%] h-[80vh] overflow-hidden rounded-md">
                    <Image 
                        src = {imgSrc}
                        alt = "cover"
                        width={0}
                        height={0}
                        style={{
                            width: 1000,
                            height : 1000
                        }}
                    />

                </div>

            </div>
        </main>
    );

}