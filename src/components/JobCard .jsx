import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6 w-full mx-auto  max-w-3xl">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-gray-400 text-sm font-semibold">
            ✔ {job.name}
          </div>
          <h2 className="text-xl font-semibold mt-1">{job.taskTitle}</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-yellow-100 text-gray-700 px-3 py-1 rounded-md text-sm">
              {job.selsct}
            </span>
            <span className="bg-yellow-100 text-gray-700 px-3 py-1 rounded-md text-sm">
              ...
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
        <p>
          <span className="font-semibold">Expiry:</span>{" "}
          {new Date(job.deadline).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Proposals</span> 1 Received
        </p>
        <p>
          <span className="font-semibold">Location</span> Remote
        </p>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 text-xl hover:text-gray-600">
            ♡
          </button>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
