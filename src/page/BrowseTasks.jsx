import React from "react";
import { useLoaderData } from "react-router";
import JobCard from "../components/JobCard ";

const BrowseTasks = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h3 className="text-3xl text-center font-bold py-3">Our Lates Jobs </h3>
      <p className="text-xl font-thin text-base-200 text-center">
        Explore the most viewd jobs for today
      </p>
      <h3 className="text-xl text-center font-bold py-3">
        Total Task Find : {data.length}
      </h3>
      <div className="space-y-3 my-4 mx-2">
        {data.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
