"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import HomeCardItem from "./HomeCardItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import EventType_Data from "@/data/eventType";

export default function HomeCard() {
  return (
    <div className="px-2 mx-auto mt-10 bg-white rounded-xl shadow-md space-x-4 w-[100%] h-[70%] flex items-center justify-center text-center border-2 border-black ">
      <div className="custom-prev" style={{ color: "black" }}>
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
        slidesPerView={5}
        loop={true}
        className="m-auto w-full h-full overflow-visible"
      >
        {EventType_Data.map((slide, index) => (
          <SwiperSlide key={index}>
            <HomeCardItem
              title={slide.title}
              description={slide.description}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-next" style={{ color: "black" }}>
        <NavigateNextIcon />
      </div>
    </div>
  );
}
