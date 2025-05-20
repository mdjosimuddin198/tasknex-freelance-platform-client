import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";

const titles = [
  { id: 1, image: "https://i.ibb.co/pjYZhspH/image.png" },
  { id: 2, image: "https://i.ibb.co/chpmL5Q0/image.png" },
  { id: 3, image: "https://i.ibb.co/5W8TKcXt/image.png" },
  { id: 4, image: "https://i.ibb.co/FjwdWXS/image.png" },
];

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {titles.map((title) => (
          <SwiperSlide key={title.id}>
            <Slider title={title}></Slider>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
