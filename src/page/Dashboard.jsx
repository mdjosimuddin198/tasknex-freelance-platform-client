import React, { useContext, useState } from "react";
import { CiHome } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { MdAssignment, MdGavel, MdSettings, MdLogout } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { setLogedInUser, logOutUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // navlink
  const navItems = [
    { name: "Home", path: "/", icon: <CiHome /> },
    {
      name: "My Posted Job",
      path: "/dashboard/my_posted_tasks",
      icon: <MdAssignment />,
    },
    { name: "Add New Job", path: "/dashboard/add_job", icon: <MdGavel /> },
    { name: "Settings", path: "/dashboard/setting", icon: <MdSettings /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
  ];

  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include",
      });

      setLogedInUser(null);
      toast.success("👋 You’ve logged out. See you again soon!");
    } catch (error) {
      console.error(error);
      toast.error("error found.");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-full md:h-screen md: w-64 bg-secondary text-white  p-6 space-y-4 z-50 transform transition-transform duration-300 
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <Link to="/" className="text-2xl font-bold mb-8">
          TaskNex{" "}
        </Link>

        <ul className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `hover:bg-gray-100 hover:text-primary  p-2 rounded cursor-pointer flex items-center gap-2 transition ${
                  isActive ? "bg-gray-100 text-primary font-medium" : ""
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

          <button
            onClick={handleLogOutUser}
            className="hover:bg-gray-100 hover:text-primary p-2 rounded cursor-pointer flex items-center gap-2"
          >
            <MdLogout /> Logout
          </button>
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Top Navbar */}
        <div className="flex sticky z-20 top-0 left-0  items-center justify-between p-4 bg-white shadow-md">
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

        <div className="overflow-x-auto p-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
