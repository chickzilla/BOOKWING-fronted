import PackageCard from "./packageCard";
export default function PackagePanel(){
    return(
        <div className="w-[80vw] h-[70vh] flex flex-row flex-wrap  justify-between">
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
        </div>
    );

}