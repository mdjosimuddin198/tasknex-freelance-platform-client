import React, { useState } from "react";
import { useLoaderData } from "react-router";

import dayjs from "dayjs";
import JobCard from "../components/JobCard ";

const BrowseTasks = () => {
  const data = useLoaderData();
  console.log(data);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // ** একবার filter করো, nested filter হবেনা **
  const filteredEvents = data.filter((event) => {
    const matchesSearch = searchText
      ? event?.taskTitle?.toLowerCase().includes(searchText.toLowerCase())
      : true;

    // const matchesCategory = selectedCategory
    //   ? event?.selsct?.toLowerCase() === selectedCategory.toLowerCase()
    //   : true;

    const eventDate = dayjs(event.deadline);
    const now = dayjs();

    let matchesTime = true;

    if (selectedTime === "currentWeek") {
      matchesTime =
        eventDate.isAfter(now.startOf("week")) &&
        eventDate.isBefore(now.endOf("week"));
    } else if (selectedTime === "lastWeek") {
      const lastWeekStart = now.subtract(1, "week").startOf("week");
      const lastWeekEnd = now.subtract(1, "week").endOf("week");
      matchesTime =
        eventDate.isAfter(lastWeekStart) && eventDate.isBefore(lastWeekEnd);
    } else if (selectedTime === "currentMonth") {
      matchesTime =
        eventDate.isAfter(now.startOf("month")) &&
        eventDate.isBefore(now.endOf("month"));
    } else if (selectedTime === "lastMonth") {
      const lastMonthStart = now.subtract(1, "month").startOf("month");
      const lastMonthEnd = now.subtract(1, "month").endOf("month");
      matchesTime =
        eventDate.isAfter(lastMonthStart) && eventDate.isBefore(lastMonthEnd);
    }

    return matchesSearch && matchesTime;
  });

  return (
    <div>
      <h3 className="text-3xl text-center font-bold py-3">Our Latest Jobs</h3>
      <p className="text-xl font-thin text-base-200 text-center">
        Explore the most viewed jobs for today
      </p>
      <h3 className="text-xl text-center font-bold py-3">
        Total Task Find: {filteredEvents.length}
      </h3>

      <input
        type="text"
        placeholder="Search Events"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="input input-bordered m-4 w-full max-w-xs mb-4"
      />

      {/* <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="select select-bordered w-full max-w-xs mb-4"
      >
        <option value="">All Categories</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Support Agent">Support Agent</option>
        <option value="Writer">Writer</option>
        <option value="Video Editor">Video Editor</option>
        <option value="Content Writer">Content Writer</option>
      </select> */}

      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="select select-bordered w-full max-w-xs m-4 mb-4"
      >
        <option value="">All Time</option>
        <option value="currentWeek">Current Week</option>
        <option value="lastWeek">Last Week</option>
        <option value="currentMonth">Current Month</option>
        <option value="lastMonth">Last Month</option>
      </select>

      <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-2">
        {filteredEvents?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
