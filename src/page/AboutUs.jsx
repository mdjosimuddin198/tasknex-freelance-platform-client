import React from "react";
import AboutUsFile from "../lottie-react-file/Animation - 1750915450613.json";
import Lottie from "lottie-react";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">About Us</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-secondary">TaskNex</span> — a
          modern freelance bidding platform built to empower seamless
          collaboration between clients and freelancers in real-time. Our
          platform is fast, user-friendly, and designed to make task management
          easy and transparent.
        </p>
      </div>

      <div className="flex justify-between flex-col md:flex-row-reverse   gap-10 items-center ">
        <div className="flex justify-center">
          {/* <img
            src="https://cdn.dribbble.com/users/1129236/screenshots/15331398/media/3fca07c8618e116843a5fa3f51786094.png"
            alt="About TaskNex"
            className="w-full max-w-md rounded-xl shadow-lg"
            
          /> */}
          <Lottie animationData={AboutUsFile} loop={true}></Lottie>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-primary">Our Mission</h3>
          <p className="text-gray-700 text-base">
            At TaskNex, our mission is to bridge the gap between talent and
            opportunity. We aim to create a trusted space where clients can
            effortlessly post tasks and freelancers can instantly connect, bid,
            and deliver high-quality work.
          </p>
          <p className="text-gray-700 text-base">
            We believe in building a future where freelance work is accessible,
            efficient, and reliable for everyone — from small businesses to
            global teams.
          </p>
          <p className="font-medium text-secondary">
            Let’s grow together, one task at a time with TaskNex.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
