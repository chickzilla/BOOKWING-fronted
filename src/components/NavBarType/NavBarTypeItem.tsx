import Link from "next/link";

export default function NavBarTypeItem({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <Link
      className="w-[10%] h-[100%] text-black text-center flex items-center justify-center font-medium text-gray-500 text-xs hover:scale-105 hover:cursor-pointer duration-300 hover:shadow-lg"
      href={`/running_type/${link}`}
    >
      {title}
    </Link>
  );
}
