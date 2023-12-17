import PackageCard from "./packageCard";
export default function PackagePanel(){
    return(
        <div className="w-[60vw] h-[70vh] flex flex-row flex-wrap">
            <PackageCard distance="3" location="Tderm" date="22/22/22" time="18:00"/>
            <PackageCard distance="5" location="Tderm" date="22/22/22" time="18:00"/>
            <PackageCard distance="10" location="Tderm" date="22/22/22" time="18:00"/>
            <PackageCard distance="12" location="Tderm" date="22/22/22" time="18:00"/>
        </div>
    );

}