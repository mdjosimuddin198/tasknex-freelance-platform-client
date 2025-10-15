import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { easeInOut, motion } from "motion/react";

const Slider = ({ slide }) => {
  const { logedInuser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[400px] md:h-[450px] bg-cover bg-center bg-no-repeat rounded-2xl text-center text-white px-4"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

      {/* Text Content */}
      <div className="relative space-y-4 max-w-2xl">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="text-3xl md:text-5xl  font-semibold"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut, delay: 0.03 }}
          className="text-lg md:text-2xl font-light"
        >
          {slide.description}
        </motion.p>
        <div className="space-x-4 mt-4">
          <button
            onClick={() => {
              navigate("dashboard/add_job");
            }}
            className="btn inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_10px_#22d3ee] transition btn-sm md:btn-md lg:btn-lg"
          >
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
