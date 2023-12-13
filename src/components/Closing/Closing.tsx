import ClosingItem from "./ClosingItem";

export default function Closing() {
  return (
    <div className="flex flex-row w-[80%] h-[38%] items-end pt-5 space-x-24">
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <ClosingItem />
        <ClosingItem />
        <ClosingItem />
      </div>
      <div className="flex flex-col space-y-5 w-[50%] h-[100%]">
        <ClosingItem />
        <ClosingItem />
        <ClosingItem />
      </div>
    </div>
  );
}
