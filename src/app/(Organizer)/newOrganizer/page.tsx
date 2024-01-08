"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function newOrganizer() {
  const router = useRouter();
  const hadlerChangeRole = async () => {
    try {
      router.push("/Organizer/organizer");
    } catch (error) {
      alert("Error please try again later");
    }
  };
  return (
    <main className="bg-neutral-100 w-full h-screen flex flex-col items-center text-black">
      <div className="items-center flex flex-row text-center w-full h-full">
        <div className="w-[40%] h-full">
          <Image
            src="/img/Organizer_Banner.jpg"
            width={100}
            height={100}
            alt="Organizer Banner"
            sizes="100"
            className="w-full h-full object-fill object-center"
          />
        </div>
        <div className="w-[60%] h-full flex flex-col items-center justify-center space-y-5">
          <div className="w-[80%] h-[20%] text-4xl font-bold text-center flex items-center justify-center">
            Hi organizer, welcome to BookWing
          </div>
          <div className="w-[80%] h-[20%] flex flex-row text-gray-500">
            Embark on a Journey of Effortless Event Excellence! 🌟 Welcome to
            BookWing, Where the Art of Organizing Meets the Elegance of Every
            Detail Taking Flight. 🚀 Elevate Your Events with Us and Make Every
            Occasion a Remarkable Experience Worth Celebrating! 🎉
            #EventPerfection #BookWingMagic
          </div>
          <div className="w-[80%] h-[20%] flex justify-center">
            <button className="border-2 border-black text-white py-2 px-3 rounded-xl w-[100%] font-semibold  hover:text-blue-950 transition-colors hover:bg-white bg-blue-950 text-2xl uration-300">
              Change role to organizer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
