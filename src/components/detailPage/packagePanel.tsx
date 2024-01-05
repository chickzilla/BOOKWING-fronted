import PackageCard from "./packageCard";
export default function PackagePanel({
  allDistance,
  date,
  time,
  province,
}: {
  allDistance: string[];
  date: string;
  time: string;
  province: string;
}) {
  return (
    <div className="w-[50%] flex flex-row flex-wrap">
      {allDistance.map((d) => (
        <PackageCard distance={d} location={province} date={date} time={time} />
      ))}
    </div>
  );
}
