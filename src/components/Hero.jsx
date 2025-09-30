import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";
import WhyChooseUs from "./WhyChooseUs";
import ReviewSection from "./ReviewSection";
import Newsletter from "./Newsletter";
import BlogSection from "./BlogSection";
import BrowseTasks from "../page/BrowseTasks";

const slides = [
  {
    id: 1,
    title:
      "Empowering the Next Generation of Freelancers and Clients to Achieve More",
    description:
      "TaskNex connects talented freelancers with real clients, enabling smarter, faster, and reliable project completion across the globe.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Transforming the Way Businesses Hire Freelance Talent Worldwide",
    description:
      "Discover top professionals, streamline your workflow, and grow your business efficiently with TaskNex’s trusted platform.",
    image:
      "https://i.pinimg.com/736x/a9/0c/95/a90c959d81b6def4b1571bf775a1d199.jpg",
  },
  {
    id: 3,
    title:
      "Unlocking Opportunities for Skilled Freelancers to Showcase Their Expertise",
    description:
      "TaskNex empowers freelancers to sell their skills online and connect with clients who value quality work and innovation.",
    image:
      "https://i.pinimg.com/736x/b3/a6/89/b3a6898b5efacf63d28e6235372970af.jpg",
  },
  {
    id: 4,
    title:
      "Connecting Clients and Freelancers with Fast, Secure, and Smart Solutions",
    description:
      "Find the right talent near you or anywhere in the world, manage projects seamlessly, and achieve your goals with TaskNex.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
  },
];

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slider slide={slide}></Slider>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* lanading page  */}
      <BrowseTasks />
      <WhyChooseUs />
      <ReviewSection />
      <BlogSection />
      <Newsletter />
    </>
  );
};

export default Hero;
