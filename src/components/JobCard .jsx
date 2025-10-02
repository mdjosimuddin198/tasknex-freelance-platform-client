import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";

const JobCard = ({ job }) => {
  return (
    <div className="border rounded-xl shadow-sm p-5 flex flex-col gap-4 bg-gradient-to-r from-[#2563eb30] to-[#2563eb40]">
      {/* Company Info */}
      <div className="flex items-center gap-3">
        <img
          src={job.companyLogo}
          alt={job.company}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <Link
            to={`/job-details/${job._id}`}
            className="text-lg hover:text-primary font-semibold"
          >
            {job.title}
          </Link>

          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          <span>
            <CiLocationOn size={22} />
          </span>{" "}
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <span>
            <CiStopwatch size={22} />
          </span>{" "}
          Posted {formatDistanceToNow(new Date(job.createdAt))} ago
        </div>
        <div className="flex items-center gap-1">
          <span>
            <GiMoneyStack size={22} />
          </span>{" "}
          ${job.salary}k
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
          {job.jobType}
        </span>
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600 font-medium">
          {job.visibility}
        </span>
        <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600 font-medium">
          {job.urgency}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
