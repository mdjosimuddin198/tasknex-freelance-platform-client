import { motion } from "motion/react";
import React from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubscriber = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();

    toast.warn("Stay connected. Exciting features are on the way!");
  };
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.6, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="py-6 px-8   rounded-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 ">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with the latest freelance projects, platform updates, and
          exclusive offers. Join our community now!
        </p>
      </div>

      <form
        onSubmit={handleSubscriber}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered rounded-full w-full max-w-md"
          required
        />
        <button
          type="submit"
          className="btn inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_10px_#22d3ee] transition w-full md:w-auto"
        >
          Subscribe
        </button>
      </form>
    </motion.section>
  );
};

export default Newsletter;
