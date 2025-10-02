import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const UpdateTask = () => {
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

  const { logedInuser } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const {
    _id,
    title,
    description,
    company,
    companyLogo,
    location,
    category,
    salary,
    jobType,
    visibility,
    urgency,
  } = useLoaderData();

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    const updateJob = {
      ...newTask,
      category: selectedCategory,
    };
    // console.log(formattedDeadline);

    fetch(`http://localhost:5000/job/${_id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Tasks Updated Successfully");
        }
      });
    // console.log(taskInfo);
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold py-3">
          Update Your Job and Get It Done Fast
        </h2>
        <p className="text-xl font-thin text-base-200 text-center">
          Add a concise title and detailed Job description including
          requirements, <br /> technologies, and deadlines
        </p>
        <form
          onSubmit={handleUpdateJob}
          className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div>
            <label className="label font-semibold mt-4">Job Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="e.g. Software Engineer (Android)"
              required
              defaultValue={title}
            />

            <label className="label font-semibold mt-4">Company</label>
            <input
              type="text"
              name="company"
              className="input input-bordered w-full"
              placeholder="e.g. Segment"
              required
              defaultValue={company}
            />

            <label className="label font-semibold mt-4">Company Logo URL</label>
            <input
              type="url"
              name="companyLogo"
              className="input input-bordered w-full"
              placeholder="Paste company logo URL"
              required
              defaultValue={companyLogo}
            />

            <label className="label font-semibold mt-4">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              placeholder="e.g. Dhaka, BD"
              required
              defaultValue={location}
            />

            <label className="label font-semibold mt-4">Category</label>
            <select
              name="category"
              onChange={(e) =>
                setSelectedCategory(
                  categories.find((c) => c.name === e.target.value)
                )
              }
              className="select select-bordered w-full"
              required
              defaultValue={category.name}
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
              defaultValue={salary}
            />

            <label className="label font-semibold mt-4">Job Type</label>
            <select
              name="jobType"
              className="select select-bordered w-full"
              required
              defaultValue={jobType}
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
              defaultValue={visibility}
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
              defaultValue={urgency}
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
              defaultValue={description}
            />
          </div>

          {/* Submit Button - Full Width */}
          <div className="col-span-1 md:col-span-2">
            <button className="btn bg-primary hover:bg-primary/90 text-white w-full mt-6">
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
