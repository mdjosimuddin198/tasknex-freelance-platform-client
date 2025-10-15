import React from "react";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Succeed as a Freelancer",
    description:
      "Discover essential strategies to grow your freelance career and attract high-paying clients.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    id: 2,
    title: "How to Write Winning Bids",
    description:
      "Learn how to write proposals that grab client attention and increase your chances of getting hired.",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
  {
    id: 3,
    title: "Best Tools for Remote Freelancers",
    description:
      "Explore the top tools every remote freelancer should use to stay productive and connected.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const BlogSection = () => {
  const handleRead = () => {
    toast.warn("Stay connected. Exciting blogs are on the way!");
  };
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 ">Latest Blog Posts</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Stay updated with the latest freelancing tips, platform news, and
          productivity hacks.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.0 }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4, margin: "-30px" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            key={blog.id}
            className="card text-left bg-base-100 "
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.description}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={handleRead}
                  className="btn inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_10px_#22d3ee] transition "
                >
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
