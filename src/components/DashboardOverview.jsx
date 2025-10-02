import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const DashboardOverview = () => {
  const { logedInuser } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const myPost = data?.filter((task) => task.email === logedInuser?.email);
  const dashboardCards = [
    {
      id: 1,
      title: "Total Job Found",
      value: data?.length || 0,
      color: "text-primary",
    },
    {
      id: 2,
      title: "My Posted Job ",
      value: myPost?.length || 0,
      color: "text-secondary",
    },
    {
      id: 3,
      title: "Completed",
      value: "Coming Soon",
      color: "text-accent",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {dashboardCards.map((card) => (
        <div
          key={card.id}
          className="card bg-base-100 shadow hover:scale-105 transition-transform p-6 rounded-xl"
        >
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          <p className={`text-4xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
