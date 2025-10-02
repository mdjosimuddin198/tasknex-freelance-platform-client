import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { CiBookmark, CiLocationOn, CiStopwatch } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { formatDistanceToNow } from "date-fns";
import JobDescriptionLeft from "./jobDescription/JobDescriptionLeft";
import JobDescriptionRight from "./jobDescription/JobDescriptionRight";

const JobDetails = () => {
  const { logedInuser } = useContext(AuthContext);
  const job = useLoaderData();
  const [bidsCount, setBidsCount] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/bids/${job._id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBidsCount(data.count));
  }, [job._id]);

  const handleBidClick = () => {
    fetch(`http://localhost:5000/bids/${job._id}/${logedInuser.uid}`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 400) {
          toast.error("You have already join  on this event.");
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBidsCount((prev) => prev + 1);
          toast.success("join successful this event");
        }
      });
  };

  const companyEmail = job.email; // কোম্পানির ইমেইল
  const subject = `Application for ${job.title} Position at ${job.company}`;

  const body = `
Dear Hiring Manager,

I am writing to apply for the ${job.title} Position at  ${job.company} . I am excited about the opportunity to join your team and contribute to building impactful web applications using modern technologies.

I have hands-on experience with JavaScript, React.js, and Next.js. I am also familiar with backend technologies like Node.js, Express.js, and MongoDB. I have built multiple projects using these technologies, which helped me gain valuable experience working with React.js, RESTful APIs, Express.js, and MongoDB integration.

I want to work with your company because it has a strong reputation in the industry, and my skills align well with your requirements. I am confident that I can contribute to your team while continuing to grow as a developer.

I would welcome the opportunity to discuss how my skills and experiences align with your team's needs. Please find my resume attached for your consideration.

Thank you for your time and consideration. I look forward to hearing from you.

Sincerely,
[your name]
[your number]
[Your Portfolio Link]
[Your GitHub Link]
  `;

  return (
    <>
      <div className="grid md:flex gap-2 sticky bg-secondary top-20 z-10 items-center justify-between p-6 rounded-xl shadow-sm bg-gradient-to-r from-[#2563eb30] to-[#2563eb40]">
        {/* Left Side */}
        <div className="flex  items-center gap-4">
          {/* Logo */}
          <img
            src={job.companyLogo}
            alt={job.company}
            className="w-16 h-16 rounded-lg object-cover"
          />

          {/* Text Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600">
              <span className="flex items-center gap-1">{job.company}</span>
              <span className="flex items-center gap-1">
                <CiLocationOn /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <CiStopwatch /> {formatDistanceToNow(new Date(job.createdAt))}
                ago
              </span>
              <span className="flex items-center gap-1">
                <GiMoneyStack /> ${job.salary}k
              </span>
            </div>

            {/* Tags */}
            <div className="flex  gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                {job.jobType}
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                {job.visibility}
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs font-medium">
                {job.urgency}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="flex items-center 
         gap-4"
        >
          <a
            href={`mailto:${companyEmail}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Apply via Email
          </a>
          <button className="p-2 border rounded-lg hover:bg-primary text-white transition">
            <CiBookmark />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobDescriptionLeft job={job} />
        {/* Right Side - Dynamic */}
        <JobDescriptionRight job={job} />
      </div>
    </>
  );
};

export default JobDetails;
