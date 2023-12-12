"use client";

import SimpleSlider from "./BannerSlide";

export default function Banner() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <div className="w-full h-50vh items-center text-center">
        <SimpleSlider />
      </div>
    </>
  );
}
