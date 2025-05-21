import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosSend, IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div className="bg-white shadow rounded-xl my-4 p-6 w-full mx-auto  max-w-3xl">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-gray-400 text-sm flex items-center gap-3 font-semibold">
            <FaCheckCircle className="mt-1" />{" "}
            <p className="text-xl">{job.name}</p>
          </div>
          <h2 className="text-xl font-semibold mt-1">{job.taskTitle}</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-yellow-100 text-gray-700 px-3 py-1 rounded-md text-sm">
              {job.selsct}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">${job.budget}</p>
          <p className="text-sm text-gray-600 mt-1">(Fixed)</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700">{job.description}</p>

      <div className="border-t mt-4 pt-4 flex justify-between items-center text-sm text-gray-600">
        <p className="text-xl space-x-3">
          <span className="font-semibold ">Expiry Date:</span>
          <span> {new Date(job.deadline).toLocaleDateString()}</span>
        </p>
        <p>Project Id : {job._id}</p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <button className="text-gray-400 text-xl hover:text-gray-600">
            <FaRegHeart />
          </button>

          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded">
            <IoIosSend />
          </button>
          <Link
            to={`/browse_tasks`}
            className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded"
          >
            <IoMdArrowRoundBack />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
