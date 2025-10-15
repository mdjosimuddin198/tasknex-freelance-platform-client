import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import dayjs from "dayjs";
import JobCard from "../components/JobCard ";

const BrowseTasks = () => {
  const data = useLoaderData();
  const path = useLocation();
  const [searchText, setSearchText] = useState("");
  console.log(data);
  const findJobs = data.filter((job) =>
    job?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="py-6">
      <h3 className="text-5xl py-3 font-bold text-center">Our Latest Jobs</h3>
      <p className="text-xl font-thin text-base-200 text-center">
        Explore the most viewed jobs for today
      </p>

      {location.pathname === "/" ? (
        ""
      ) : (
        <>
          <h3 className="text-xl text-center font-bold py-3">
            Total Jobs Find: {findJobs.length}
          </h3>
          <input
            type="text"
            placeholder="senior web developer"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered m-4 w-full max-w-xs mb-4"
          />
        </>
      )}

      <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mx-2">
        {findJobs?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
