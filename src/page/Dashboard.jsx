import React, { useContext, useState } from "react";
import { CiHome } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import {
  MdDashboard,
  MdAssignment,
  MdGavel,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { NavLink, Outlet, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Dashboard = () => {
  const data = useLoaderData();
  const { logedInuser, setLogedInUser, logOutUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        // console.log("user log out successfully");
        setLogedInUser(null);
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const myPost = data?.filter((task) => task.email === logedInuser?.email);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`sticky top-0 h-screen md:w-64 w-full bg-accent text-black p-6 space-y-4 md:block ${
          sidebarOpen ? "block" : "hidden"
        } transition-transform duration-300 z-50`}
      >
        <h2 className="text-2xl font-bold mb-8">TaskNex</h2>
        <ul className="space-y-4">
          <NavLink
            to="/"
            className="hover:bg-white hover:text-primary p-2 rounded cursor-pointer flex items-center gap-2"
          >
            <CiHome /> Home
          </NavLink>
          <NavLink
            onClick={toggleSidebar}
            to="/dashboard/my_posted_tasks"
            className="hover:bg-white hover:text-primary p-2 rounded cursor-pointer flex items-center gap-2"
          >
            <MdAssignment /> My Tasks
          </NavLink>
          <NavLink
            onClick={toggleSidebar}
            to="/dashboard/add_task"
            className="hover:bg-white hover:text-primary p-2 rounded cursor-pointer flex items-center gap-2"
          >
            <MdGavel /> Add Task
          </NavLink>
          <NavLink
            to="/dashboard/setting"
            className="hover:bg-white hover:text-primary p-2 rounded cursor-pointer flex items-center gap-2"
          >
            <MdSettings /> Settings
          </NavLink>
          <button
            onClick={handleLogOutUser}
            className="hover:bg-white hover:text-primary p-2 rounded cursor-pointer flex items-center gap-2"
          >
            <MdLogout /> Logout
          </button>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          <button className="md:hidden" onClick={toggleSidebar}>
            <FiMenu className="text-2xl" />
          </button>
          <h2 className="text-xl font-semibold text-primary">
            Dashboard Overview
          </h2>
          <button
            onClick={handleLogOutUser}
            className="btn bg-accent text-white btn-md"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow hover:scale-105 transition-transform p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Total Tasks</h2>
            <p className="text-4xl font-bold text-primary">{data.length}</p>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow hover:scale-105 transition-transform p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">My Posted Task</h2>
            <p className="text-4xl font-bold text-secondary">{myPost.length}</p>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow hover:scale-105 transition-transform p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Completed</h2>
            <p className="text-4xl font-bold text-accent">Coming Soon</p>
          </div>
        </div>
        <div className="flex-1 overflow-x-auto p-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
