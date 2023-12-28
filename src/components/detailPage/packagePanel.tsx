
import PackageCard from "./packageCard";
export default function PackagePanel({
    allDistance,date,time,province
}: {
    allDistance: string[],
    date : string,time: string,province: string
}){
    return(
        <div className="w-[50vw] h-auto flex flex-row flex-wrap space-y-8">
            {
                allDistance.map((d) =>(
                    <PackageCard distance={d} location={province} date={date} time={time}/>
                ))
            }
        </div>
    );

}