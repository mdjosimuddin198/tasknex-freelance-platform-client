import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const categories = [
  { name: "Development", icon: "💻" },
  { name: "Design", icon: "🎨" },
  { name: "Marketing", icon: "📈" },
  { name: "Accounting / Finance", icon: "💰" },
  { name: "Human Resource", icon: "🧑‍💼" },
  { name: "Automotive Jobs", icon: "🚀" },
  { name: "Customer Service ", icon: "📞" },
  { name: "Project Management ", icon: " 🚗" },
];

const AddJob = () => {
  const { logedInuser } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const job = Object.fromEntries(formData.entries());

    const newJob = {
      ...job,
      category: selectedCategory,
      createdAt: new Date().toISOString(),
    };
    console.log(newJob);
    axios
      .post("http://localhost:5000/job", newJob, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Job Posted Successfully");
          form.reset();
          setSelectedCategory(categories[0]);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl text-center font-bold py-3">
        🚀 Post a Job and Find Talent Fast
      </h2>
      <p className="text-lg text-gray-500 text-center mb-8">
        Fill in the details below to post your job and reach top candidates
      </p>

      <form
        onSubmit={handleAddJob}
        className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div>
          <label className="label font-semibold">Posted By (Name)</label>
          <input
            type="text"
            name="postedBy"
            value={logedInuser.displayName}
            className="input cursor-not-allowed input-bordered w-full"
            readOnly
          />

          <label className="label font-semibold mt-4">Email</label>
          <input
            type="email"
            name="email"
            value={logedInuser.email}
            className="input cursor-not-allowed input-bordered w-full"
            readOnly
          />

          <label className="label font-semibold mt-4">Job Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="e.g. Software Engineer (Android)"
            required
          />

          <label className="label font-semibold mt-4">Company</label>
          <input
            type="text"
            name="company"
            className="input input-bordered w-full"
            placeholder="e.g. Segment"
            required
          />

          <label className="label font-semibold mt-4">Company Logo URL</label>
          <input
            type="url"
            name="companyLogo"
            className="input input-bordered w-full"
            placeholder="Paste company logo URL"
            required
          />

          <label className="label font-semibold mt-4">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            placeholder="e.g. Dhaka, BD"
            required
          />

          <label className="label font-semibold mt-4">Category</label>
          <select
            name="category"
            value={selectedCategory.name}
            onChange={(e) =>
              setSelectedCategory(
                categories.find((c) => c.name === e.target.value)
              )
            }
            className="select select-bordered w-full"
            required
          >
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Right Column */}
        <div>
          <label className="label font-semibold">Salary Range</label>
          <input
            type="text"
            name="salary"
            className="input input-bordered w-full"
            placeholder="e.g. 35-45"
            required
          />

          <label className="label font-semibold mt-4">Job Type</label>
          <select
            name="jobType"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Internship">Internship</option>
          </select>

          <label className="label font-semibold mt-4">Visibility</label>
          <select
            name="visibility"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Visibility</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>

          <label className="label font-semibold mt-4">Urgency</label>
          <select
            name="urgency"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Urgency</option>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
          </select>

          <label className="label font-semibold mt-4">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full min-h-[120px]"
            placeholder="Add job description, responsibilities, requirements..."
            required
          />
        </div>

        {/* Submit Button - Full Width */}
        <div className="col-span-1 md:col-span-2">
          <button className="btn inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_10px_#22d3ee] transition w-full mt-6">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
