import NavBarTypeItem from "./NavBarTypeItem";
import EventType_Data from "@/data/eventType";

export default function NavBarType() {
  return (
    <div className="bg-white fixed w-full h-[50px] z-20 top-0 start-0 flex flex-row items-center mt-[70px] py-2 px-24">
      {EventType_Data.map((item, index) => (
        <NavBarTypeItem title={item.title} link={item.link} key={index} />
      ))}
    </div>
  );
}
