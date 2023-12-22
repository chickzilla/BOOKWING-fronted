import Image from "next/image";

export default function PictureSlogan() {
  return (
    <div className="w-[80%] h-[40vh] mt-24 mb-10 flex flex-row">
      <div className="w-[40%] h-[100%]">
        <Image
          src="/img/about_us_1.png"
          alt="benefit"
          width={30}
          height={50}
          sizes="500"
          priority
          className="object-scale-down w-full h-full layout-fill"
        />
      </div>
      <div className="w-[60%] h-[100%] flex flex-col justify-center items-center space-y-12">
        <div className="w-[100%] text-gray-500">
          "Bounding through the shadows with a melody in my heart and a guitar
          in hand, I am Harmony Hurdler. As the monstrous echoes behind me, I
          run to the rhythm of courage, strumming the strings of my own destiny.
          Join me in this crescendo of escape and self-discovery. Visit
          BookWing.com, where every chapter begins with a step, and every run is
          a verse in the epic song of life!"
        </div>
        <div className="w-[100%] text-black">- asdascadvcsvr </div>
      </div>
    </div>
  );
}
