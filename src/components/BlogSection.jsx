import React from "react";
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
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Latest Blog Posts
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Stay updated with the latest freelancing tips, platform news, and
          productivity hacks.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 shadow-xl">
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
                <button onClick={handleRead} className="btn btn-primary btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
