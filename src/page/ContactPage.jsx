import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for contacting us!");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-5xl py-3 font-bold text-center">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 border p-6 rounded-2xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="name">
            Subject
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered w-full"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="textarea textarea-bordered w-full"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn  bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_10px_#22d3ee] transition w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
