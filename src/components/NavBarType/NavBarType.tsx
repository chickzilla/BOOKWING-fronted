import NavBarTypeItem from "./NavBarTypeItem";

export default function NavBarType() {
  return (
    <div className="bg-white fixed w-full h-[50px] z-20 top-0 start-0 flex flex-row items-center mt-[70px] py-2 px-24">
      <NavBarTypeItem title="Fun Run" />
      <NavBarTypeItem title="Mini Marathon" />
      <NavBarTypeItem title="Half Marathon" />
      <NavBarTypeItem title="Full Marathon" />
      <NavBarTypeItem title="Ultra Marathon" />
      <NavBarTypeItem title="Trail Running" />
      <NavBarTypeItem title="City Run" />
      <NavBarTypeItem title="Cross Country" />
      <NavBarTypeItem title="Spartan" />
      <NavBarTypeItem title="Triathlon" />
    </div>
  );
}
