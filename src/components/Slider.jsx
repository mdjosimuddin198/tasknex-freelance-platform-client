import React from "react";

const Slider = ({ title }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between border-3  items-center py-4 my-2">
        <div className="md:w-[45%] w-full   text-4xl ml-4 text-primary font-bold  space-y-3">
          <h3>Empowering the Next </h3>
          <h2> Generation of Freelancers</h2>
          <h2> and Clients</h2>
          <p className="text-xl font-thin text-base-200">
            TaskNex is the next-generation freelance marketplace designed to
            connect talented freelancers with real clients, faster and smarter
            than ever before.
          </p>
          <div className="space-x-3">
            <button className="btn bg-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              Join Now
            </button>
            <button className="btn bg-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              Find Talent
            </button>
          </div>
        </div>
        <div className="md:w-[45%] w-full">
          <img className="w-[450px] h-[350px]" src={title.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Slider;
