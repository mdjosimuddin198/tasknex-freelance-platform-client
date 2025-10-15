// TestimonialSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Frontend Developer",
    image: "https://i.pravatar.cc/60?img=1",
    quote:
      "Finding my dream job on this platform completely changed my career journey.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Backend Developer",
    image: "https://i.pravatar.cc/60?img=2",
    quote:
      "The job recommendations are super accurate and saved me a lot of time!",
  },
  {
    id: 3,
    name: "Michael Lee",
    position: "UI/UX Designer",
    image: "https://i.pravatar.cc/60?img=3",
    quote: "Great support and guidance throughout the interview process.",
  },
  {
    id: 4,
    name: "Sara Khan",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/60?img=4",
    quote: "I got multiple interview calls within a week. Highly recommend!",
  },
  {
    id: 5,
    name: "David Park",
    position: "Mobile Developer",
    image: "https://i.pravatar.cc/60?img=5",
    quote: "Transparent process and verified companies. Very trustworthy.",
  },
  {
    id: 6,
    name: "Emily Davis",
    position: "Data Analyst",
    image: "https://i.pravatar.cc/60?img=6",
    quote:
      "The personalized job alerts really helped me focus on the right opportunities.",
  },
  {
    id: 7,
    name: "Chris Wilson",
    position: "DevOps Engineer",
    image: "https://i.pravatar.cc/60?img=7",
    quote: "Excellent platform with career support. I landed my dream job!",
  },
  {
    id: 8,
    name: "Laura Brown",
    position: "Product Manager",
    image: "https://i.pravatar.cc/60?img=8",
    quote:
      "Highly recommend for anyone looking to grow their career efficiently.",
  },
  {
    id: 9,
    name: "Robert Johnson",
    position: "QA Engineer",
    image: "https://i.pravatar.cc/60?img=9",
    quote: "The platform is very user-friendly and intuitive.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What Our Users Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Real testimonials from our users who found success through our
          platform.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
                <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
