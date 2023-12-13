"use client";
"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import HomeCardItem from "../HomeCard/HomeCardItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BannerCardSlider from "./BannerCardSlider";

export default function Banner() {
  return (
    <>
      <div className="space-x-4 w-[90%] h-[100%] flex items-center justify-center text-center">
        <div className="banner-prev" style={{ color: "black" }}>
          <NavigateBeforeIcon sx={{ width: "40%", height: "40%" }} />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          // custom navigation buttons using icons
          navigation={{
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
          }}
          // Set the coverflow effect
          effect={"coverflow"}
          // Customize coverflow parameters
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          className="m-auto w-full h-full"
        >
          <SwiperSlide>
            <BannerCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <BannerCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <BannerCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <BannerCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <BannerCardSlider />
          </SwiperSlide>
        </Swiper>

        <div className="banner-next" style={{ color: "black" }}>
          <NavigateNextIcon sx={{ width: "40%", height: "40%" }} />
        </div>
      </div>
    </>
  );
}
