import React, { Component } from "react";
import Slider from "react-slick";
import BannerCardSlider from "./BannerCardSlider";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 500,
      cssEase: "linear",
    };
    return (
      <div className="mx-auto p-10 w-80 text-gray-800 w-[80%] space-x-10">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <BannerCardSlider />
          <BannerCardSlider />
          <BannerCardSlider />
          <BannerCardSlider />
        </Slider>
      </div>
    );
  }
}
