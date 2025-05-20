import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const AddTasks = () => {
  const { logedInuser } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(null);

  const handleAddTasks = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    const formattedDeadline = deadline.toISOString();
    // console.log(formattedDeadline);
    const taskInfo = {
      ...newTask,
      deadline: formattedDeadline,
    };

    fetch("http://localhost:5000/tasks", {
      method: "POSt",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Tasks Added Successfully");
        }
      });
    // console.log(taskInfo);
  };
  return (
    <div>
      <h2 className="text-3xl text-center font-bold py-3">
        Post a Task and Get It Done Fast
      </h2>
      <p className="text-xl font-thin text-base-200 text-center">
        Add a concise title and detailed task description including
        requirements, <br /> technologies, and deadlines
      </p>
      <form
        onSubmit={handleAddTasks}
        className="fieldset bg-base-100 border-base-300 rounded-box w-full md:w-xl lg:w-2xl border mx-auto my-4 p-4"
      >
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={logedInuser.displayName}
          className="input w-full"
          placeholder="Name"
        />
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={logedInuser.email}
          className="input w-full"
          placeholder="Email"
        />
        <label className="label">Task Title</label>
        <input
          type="text"
          name="taskTitle"
          className="input w-full"
          placeholder="Task Title"
        />

        <select
          name="selsct"
          className="dropdown-content menu bg-base-100 rounded z-1 w-full mt-2 p-2 shadow-sm"
        >
          <option value="Developer">Select One</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Support Agent">Support Agent</option>
          <option value="Writter">Writter</option>
          <option value="Video Editor">Video Editor</option>
          <option value="Content writter">Content writter</option>
        </select>
        <label className="label">Description </label>
        <textarea
          type="text"
          name="description"
          className="input w-full"
          placeholder="Description "
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="deadline" className="font-medium text-gray-700">
            Deadline
          </label>
          <DatePicker
            id="deadline"
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            minDate={new Date()}
            placeholderText="Select a deadline"
            dateFormat="MMMM d, yyyy"
            className="border p-2 rounded-md w-full"
          />
          {deadline && (
            <p className="text-sm text-green-600 mt-1">
              Selected: {deadline.toDateString()}
            </p>
          )}
        </div>
        <label className="label">Budget</label>
        <input
          type="number"
          name="budget"
          className="input w-full"
          placeholder="Budget"
        />

        <button className="btn btn-neutral mt-4">Add Tasks</button>
      </form>
    </div>
  );
};

export default AddTasks;
