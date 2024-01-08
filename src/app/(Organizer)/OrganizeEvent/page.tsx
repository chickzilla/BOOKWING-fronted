"use client";

import MainButton from "@/components/Organizer/MainButton";
import ShowOrganizerEvent from "@/components/Organizer/ShowOrganizerEvent";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "typescript-cookie";

export default function OrganizePage() {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const [isToken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    const CheckToken = () => {
      const getToken = getCookie("jwt");
      if (!getToken) {
        window.location.href = "/login";
      } else {
        setIsToken(true);
      }
    };
    CheckToken();
  }, []);

  return !isToken ? (
    <main></main>
  ) : (
    <main className="bg-neutral-100 w-full min-h-screen h-[auto] flex flex-col items-center mt-[70px] py-16">
      <div className="w-[100%] h-[100%] flex flex-col items-center text-center space-y-8">
        <div className="w-[80%] h-[20vh] flex flex-col items-center">
          <div className="text-4xl text-black font-semibold w-[100%] h-[60%] flex items-center ">
            Organizer Zone
          </div>
          <div className="text-gray-500 text-sm font-semibold w-[100%] h-[40%] flex items-start justify-start text-start">
            Craft Your Own Running Adventure 🏁🎉 - Your Journey, Your Rules!
            Plan, Execute, and Celebrate Your Unique Running Event with Us. Lace
            up and Let's Create Memories, One Stride at a Time!
          </div>
        </div>
        <MainButton
          isDeletingFunc={(value: boolean) => {
            setIsDeleting(value);
            console.log(value);
          }}
        />
        <ShowOrganizerEvent isDeleting={isDeleting} />
      </div>
    </main>
  );
}
