"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import HomeCardItem from "./HomeCardItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function HomeCard() {
  return (
    <div className="px-2 py-2 mx-auto mt-10 bg-white rounded-xl shadow-md space-x-4 w-[80%] h-[12%] flex items-center justify-center text-center border-2 border-black">
      <div className="custom-prev" style={{ color: "black" }}>
        <NavigateBeforeIcon />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // custom navigation buttons using icons
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        className="m-auto w-full h-full"
      >
        <SwiperSlide className="">
          {" "}
          <HomeCardItem title="Fun Run" description="<= 5 km" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title=" Mini Marathon" description="10.5 km" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Half Marathon" description="21 km" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Full Marathon" description="42 km" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Ultra Marathon" description="> 42 km" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Trail Running" description="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="City Run" description="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Cross Country" description="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Spartan" description="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HomeCardItem title="Triathlon" description="" />{" "}
        </SwiperSlide>
      </Swiper>

      <div className="custom-next" style={{ color: "black" }}>
        <NavigateNextIcon />
      </div>
    </div>
  );
}
