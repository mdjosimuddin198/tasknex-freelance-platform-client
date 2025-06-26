import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosSend, IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const [bidsCount, setBidsCount] = useState(0);

  console.log(job._id);
  useEffect(() => {
    fetch(`https://task-nex-server.vercel.app/bids/${job._id}`)
      .then((res) => res.json())
      .then((data) => setBidsCount(data.count));
  }, [job._id]);

  const handleBidClick = () => {
    fetch(`https://task-nex-server.vercel.app/bids/${job._id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setBidsCount((prev) => prev + 1));
  };

  return (
    <div className="bg-white shadow rounded-xl my-4  w-full mx-auto py-4  px-6">
      <h2 className="text-xl mb-2 text-center">
        You bid for{" "}
        <span className="text-accent font-semibold">{bidsCount}</span>{" "}
        opportunities.
      </h2>
      <div className="">
        <img
          className=" w-full h-[350px] object-cover rounded-lg  "
          src={job.image}
          alt=""
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-gray-400 text-sm flex items-center gap-3 font-semibold">
            <FaCheckCircle className="mt-1" />{" "}
            <p className="text-xl">{job.name}</p>
            <h3 className="ml-8 text-center">
              Send Proposeal to :-
              <span className=" text-accent"> {job.email}</span>
            </h3>
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
        {/* <p>Project Id : {job._id}</p> */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <button
            onClick={handleBidClick}
            className="text-gray-400 text-xl hover:text-gray-600"
          >
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
