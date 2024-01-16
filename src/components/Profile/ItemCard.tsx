import { Button } from "@mui/material";
import Image from "next/image";

export default function ItemCard({
  title,
  price,
  img,
  desc,
}: {
  title: string;
  price: number;
  img: string;
  desc: string;
}) {
  return (
    <div className="w-[20vw] h-[40vh] flex items-center text-xs">
      <div className="w-[100%] h-[90%] bg-white shadow-xl border-2 rounded-xl text-center flex flex-col items-center pt-5 space-y-5 duration-300 hover:shadow-2xl">
        <div className="w-[40%] h-[40%] item-center bg-black">
          <Image
            src={img}
            width={100}
            height={100}
            priority
            sizes="100"
            alt="ItemsCard"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[100%] h-[35%] flex flex-col items-center justify-center px-5">
          <div className="w-[100%] h-[40%] font-bold">{title}</div>
          <div className="w-[100%] h-[40%]">{desc}</div>
        </div>
        <div className="w-[80%] h-[20%] flex flex-row items-center justify-end">
          <div className="w-[70%] h-[80%] rounded-full bg-[#DEDDAC] flex items-center justify-between">
            <button className="w-[60%] h-[100%] bg-green-500 rounded-full text-white hover:bg-[#036412] ">
              Use Point
            </button>
            <div className="w-[40%] h-[100%] items-center flex justify-center font-bold">
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
