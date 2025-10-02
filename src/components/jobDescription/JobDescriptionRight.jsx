import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
const JobDescriptionRight = ({ job }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-medium">Job Overview</h2>
      <div className="space-y-3 text-base-300">
        <p>
          <span className="font-medium">Posted By:</span> {job.postedBy}
        </p>
        {/* <p>
              <span className="font-medium">Expiration date:</span>{" "}
              {job.createdAt}
            </p> */}
        <p>
          <span className="font-medium">Location:</span> {job.location}
        </p>
        <p>
          <span className="font-medium">Job Title:</span> {job.title}
        </p>
        <p>
          <span className="font-medium">Hours:</span> 44H/Week
        </p>
        <p>
          <span className="font-medium">Rate:</span> 250$/d
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12  rounded-full flex items-center justify-center">
          <img
            src={job.companyLogo}
            alt="Segment Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-medium text-base-300">{job.company}</h2>
          <a className="text-primary text-sm hover:underline font-medium">
            View company profile
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div className="text-base-300 space-y-2 ">
        <p>
          <span className="font-medium">Primary industry:</span> Software
        </p>
        <p>
          <span className="font-medium">Company size:</span> 501–1,000
        </p>
        <p>
          <span className="font-medium">Founded in:</span> 2011
        </p>
        <p>
          <span className="font-medium">Phone:</span> 123 456 7890
        </p>
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a className="text-primary hover:underline lowercase">
            {job.company}@info.com
          </a>
        </p>
        <p>
          <span className="font-medium">Location:</span> {job.location}
        </p>
      </div>

      {/* Social Media */}
      <div className="flex space-x-4 text-gray-600 text-lg">
        <a href="#" className="hover:text-primary">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-primary">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-primary">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-primary">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Website Link */}
      <div className=" p-2 flex items-center gap-3 rounded-md lowercase  text-center">
        <FaGlobe />{" "}
        <p className="hover:text-primary">https://{job.company}.com</p>
      </div>
      <div></div>
    </div>
  );
};

export default JobDescriptionRight;
