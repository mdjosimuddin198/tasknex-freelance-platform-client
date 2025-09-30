import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Slider = ({ slide }) => {
  const { logedInuser } = useContext(AuthContext);
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[400px] md:h-[450px] bg-cover bg-center bg-no-repeat rounded-2xl text-center text-white px-4"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

      {/* Text Content */}
      <div className="relative space-y-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl  font-semibold">{slide.title}</h2>
        <p className="text-lg md:text-2xl font-light">{slide.description}</p>
        <div className="space-x-4 mt-4">
          <button className="btn bg-primary text-white btn-sm md:btn-md lg:btn-lg">
            Post New Job
          </button>
          <Link
            to="/find-job"
            className="btn bg-secondary text-white btn-sm md:btn-md lg:btn-lg"
          >
            Find Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
