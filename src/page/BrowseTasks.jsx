import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import dayjs from "dayjs";
import JobCard from "../components/JobCard ";

const BrowseTasks = () => {
  const data = useLoaderData();
  const path = useLocation();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // ** একবার filter করো, nested filter হবেনা **
  const filteredEvents = data.filter((event) => {
    const matchesSearch = searchText
      ? event?.title?.toLowerCase().includes(searchText.toLowerCase())
      : true;

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
            Total Task Find: {filteredEvents.length}
          </h3>
          <input
            type="text"
            placeholder="Search Events"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered m-4 w-full max-w-xs mb-4"
          />

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
        </>
      )}

      <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mx-2">
        {filteredEvents?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
