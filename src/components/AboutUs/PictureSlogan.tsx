import Image from "next/image";

export default function PictureSlogan() {
  return (
    <div className="w-[80%] h-[40vh] mt-28 mb-10 flex flex-row justify-center">
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
      <div className="w-[40%] h-[100%] flex flex-col justify-center items-center text-center space-y-12">
        <div className="w-[100%] text-gray-700 dark:text-gray-400">
          "Bounding through the shadows with a melody in my heart and a guitar
          in hand, I am Harmony Hurdler. 🎸🎶 I am a musician, a runner, yoyo
        </div>
        <div className="w-[100%] text-black dark:text-gray-200">
          - Harmony Hurdler
        </div>
      </div>
    </div>
  );
}
