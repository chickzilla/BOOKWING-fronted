import Link from "next/link";

export default function NavbarText({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div className="text-white">
      <Link href={link}> {title} </Link>
    </div>
  );
}
