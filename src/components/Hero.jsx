import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";
import { useLoaderData } from "react-router";
import TaskCard from "./TaskCard";
import { AuthContext } from "../context/AuthProvider";

const titles = [
  { id: 1, image: "https://i.ibb.co/pjYZhspH/image.png" },
  { id: 2, image: "https://i.ibb.co/chpmL5Q0/image.png" },
  { id: 3, image: "https://i.ibb.co/5W8TKcXt/image.png" },
  { id: 4, image: "https://i.ibb.co/FjwdWXS/image.png" },
];

const Hero = () => {
  const { logedInuser } = useContext(AuthContext);
  const allTasks = useLoaderData();
  const tasks = allTasks.filter((task) => task.email !== logedInuser?.email);
  console.log(allTasks);
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
      <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tasks.map((job) => (
          <TaskCard key={job._id} job={job}></TaskCard>
        ))}
      </div>
    </>
  );
};

export default Hero;
