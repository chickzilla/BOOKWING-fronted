import Image from "next/image";

export default function PictureSlogan() {
  return (
    <div className="w-[80%] h-[40%] mt-24 mb-10">
      <div className="w-[40%] h-[100%]">
        <Image
          src="/img/about_us_1.png"
          alt="benefit"
          width={100}
          height={80}
          sizes="20"
          priority
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
