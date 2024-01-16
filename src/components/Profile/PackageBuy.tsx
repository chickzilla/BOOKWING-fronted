"use client";

import { ItemDetail } from "@/interface";
import ItemDetailData from "@/data/ItemPoint";
import { useState } from "react";

import ItemCard from "./ItemCard";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import EventType_Data from "@/data/eventType";

export default function PackageBuy() {
  const [item, setItem] = useState<ItemDetail[]>(ItemDetailData);
  return (
    <div className="px-2 mx-auto mt-10 dark:bg-gray-800 rounded-xl space-x-4 w-[100%] h-[70%] flex items-center justify-center text-center text-black">
      <div className="custom-prev text-black dark:text-gray-200">
        <NavigateBeforeIcon />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // custom navigation buttons using icons
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        className="m-auto w-full h-full overflow-visible"
      >
        {item.map((item, index) => (
          <SwiperSlide key={index}>
            <ItemCard
              title={item.name}
              price={item.points}
              img={item.picture}
              desc={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-next text-black dark:text-gray-200">
        <NavigateNextIcon />
      </div>
    </div>
  );
}
