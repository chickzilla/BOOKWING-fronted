"use client";

import MedalBar from "@/components/Profile/MedalBar";
import PackageBuy from "@/components/Profile/PackageBuy";
import { useState } from "react";

export default function ProfilePage() {
  const [distance, setDistance] = useState<number>(100);
  const [point, setPoint] = useState<number>(80);
  return (
    <main className="bg-neutral-100 dark:bg-gray-900 w-[100vw] h-[100vh] flex pt-[70px] flex flex-col justify-between">
      <MedalBar Userdistance={distance} Userpoint={point} />
      <PackageBuy />
    </main>
  );
}
