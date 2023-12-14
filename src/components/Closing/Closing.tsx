import ClosingItem from "./ClosingItem";

export default function Closing() {
  return (
    <div className="flex flex-row w-[100%] h-[80vh] items-end pt-5 space-x-24">
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <ClosingItem eventid="Rayong1" />
        <ClosingItem eventid="Rayong2" />
        <ClosingItem eventid="Rayong3" />
      </div>
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <ClosingItem eventid="Rayong4" />
        <ClosingItem eventid="Rayong5" />
        <ClosingItem eventid="Rayong6" />
      </div>
    </div>
  );
}
