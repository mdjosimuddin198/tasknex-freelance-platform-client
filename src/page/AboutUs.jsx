import React from "react";
import AboutUsFile from "../lottie-react-file/Animation - 1750915450613.json";
import Lottie from "lottie-react";
import { easeInOut, motion } from "motion/react";

const AboutUs = () => {
  const images = [
    {
      url: "https://i.pinimg.com/1200x/d1/fc/e2/d1fce2271c5168cd752054b72611a752.jpg",
      span: "md:row-span-2",
    }, // landscape
    {
      url: "https://i.pinimg.com/1200x/b5/1e/b6/b51eb6b5a9585857de235d613485e191.jpg",
      span: "md:row-span-1",
    }, // portrait
    {
      url: "https://i.pinimg.com/736x/49/b6/db/49b6db3fe739356401aefd04079aa47d.jpg",
      span: "md:col-span-2",
    }, // landscape
    {
      url: "https://i.pinimg.com/736x/d7/ea/bd/d7eabdc15583039622ac7c6b3b26fbdb.jpg",
      span: "md:col-span-1",
    }, // portrait
    {
      url: "https://i.pinimg.com/1200x/fd/17/10/fd17103d6909d18579c2cb1e20d188df.jpg",
      span: "md:col-span-1",
    }, // portrait
    {
      url: "https://i.pinimg.com/736x/23/7c/16/237c163a6168e52651f00b54a00d68c3.jpg",
      span: "md:col-span-1",
    }, // portrait
  ];

  return (
    <>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ x: 70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: easeInOut, delay: 0.03 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl py-3 font-bold text-center">About Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Welcome to{" "}
              <span className="text-xl font-bold">
                Task <span className="text-primary">Nex</span>
              </span>
              - A modern freelance bidding platform designed to connect clients
              and freelancers in real time. TaskNex makes collaboration simple,
              transparent, and efficient — empowering you to get work done
              faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <div
                key={i}
                className={`${img.span} overflow-hidden rounded-xl shadow-sm relative group`}
              >
                <img
                  src={img.url}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="flex justify-between flex-col md:flex-row-reverse   gap-10 items-center ">
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5, margin: "-30px" }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            className="flex justify-center"
          >
            <Lottie animationData={AboutUsFile} loop={true}></Lottie>
          </motion.div>

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5, margin: "-30px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-primary">Our Mission</h3>
            <p className="text-gray-700 text-base">
              At TaskNex, our mission is to bridge the gap between talent and
              opportunity. We aim to create a trusted space where clients can
              effortlessly post tasks and freelancers can instantly connect,
              bid, and deliver high-quality work.
            </p>
            <p className="text-gray-700 text-base">
              We believe in building a future where freelance work is
              accessible, efficient, and reliable for everyone — from small
              businesses to global teams.
            </p>
            <p className="font-medium text-secondary">
              Let’s grow together, one task at a time with TaskNex.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
