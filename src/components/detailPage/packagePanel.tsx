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
    <div className="w-[70%] h-auto flex flex-row flex-wrap space-y-5">
      <div className="w-full h-[10%] flex flex-row justify-between text-2xl font-bold text-black">
        Join Running
      </div>
      {allDistance.map((d) => (
        <div className="w-1/2 h-[50vh]" key={d}>
          <PackageCard
            distance={d}
            location={province}
            date={date}
            time={time}
          />
        </div>
      ))}
    </div>
  );
}
