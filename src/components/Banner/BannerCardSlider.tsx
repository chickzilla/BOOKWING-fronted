import Image from "next/image";

export default function BannerCardSlider() {
  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center ">
      <div className="p-2 m-auto border-[red] rounded-lg justify-center items-center h-[90%] w-[80%] bg-black text-center font-semibold hover:cursor-pointer hover:scale-105 transition-all duration-300">
        NONG NHU RUN
        <div className="relative w-[100%] h-[85%] overflow-hidden">
          <Image
            className="rounded-lg" // Set width and height to 50%
            src="/img/head_picture.jpg"
            alt="Picture of the closing event"
            priority
            sizes="100vw"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
