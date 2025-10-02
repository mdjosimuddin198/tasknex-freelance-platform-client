import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const CatagorySection = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/job")
      .then((res) => {
        setJobData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const categoryCount = jobData.reduce((acc, job) => {
    const cat = job.category.name;

    if (!acc[cat]) {
      acc[cat] = { ...job.category, count: 0 };
    }
    acc[cat].count += 1;

    return acc;
  }, {});

  // Object → Array
  const uniqueCategories = Object.values(categoryCount);

  return (
    <div className="py-6">
      <h3 className="  text-5xl py-3 font-bold text-center">
        Featured Categories
      </h3>
      <p className="text-xl font-thin text-base-200 text-center">
        Explore the most viewed jobs for today
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {uniqueCategories.map((job, i) => (
          <Link
            to={`/category/${job.name}`}
            key={i}
            className="p-6 border flex items-center  gap-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-3xl flex items-center justify-center w-20 h-20 rounded-lg bg-primary/20 object-cover">
              {job.icon}
            </div>
            <div>
              <h3 className="font-semibold mt-2">{job.name}</h3>
              <p>({job.count} open positions)</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatagorySection;
