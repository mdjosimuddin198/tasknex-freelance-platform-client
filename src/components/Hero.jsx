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
  console.log("filter task is", tasks);
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
      <div className="m-4">
        <h3 className="text-3xl font-bold">Our Lates Jobs</h3>
        <p className="text-xl text-base-200">
          Explore the most viewd jobs for today
        </p>
      </div>
      <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tasks.map((job) => (
          <TaskCard key={job._id} job={job}></TaskCard>
        ))}
      </div>
    </>
  );
};

export default Hero;
