import EventCard from "../EventCard";
export default function Closing() {
  return (
    <div className="flex flex-row w-[100%] h-[80vh] items-end pt-5 space-x-24">
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <EventCard eventid="Rayong1" />
        <EventCard eventid="Rayong2" />
        <EventCard eventid="Rayong3" />
      </div>
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <EventCard eventid="Rayong4" />
        <EventCard eventid="Rayong5" />
        <EventCard eventid="Rayong6" />
      </div>
    </div>
  );
}
