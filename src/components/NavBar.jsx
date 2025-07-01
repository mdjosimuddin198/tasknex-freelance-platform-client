import React, { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import "../index.css";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
// import { Helmet } from "react-helmet";

const NavBar = () => {
  const { logedInuser, setLogedInUser, logOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleLogOutUser = async () => {
    try {
      // 1️⃣ Firebase থেকে লগআউট
      await logOutUser();

      // 2️⃣ Express এ কল দিয়ে কুকিতে থাকা টোকেনও clear করো
      await fetch("https://task-nex-server.vercel.app/api/logout", {
        method: "POST",
        credentials: "include",
      });

      setLogedInUser(null);
      toast.success("Log Out Successfully");
    } catch (error) {
      console.error(error);
      toast.error("error found.");
    }
  };

  const links = (
    <>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/">
        Home
      </NavLink>

      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/browse_tasks">
        Events
      </NavLink>

      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/about_us">
        About US
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/contact_us">
        Contact Us
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar my-4 rounded-2xl w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" mx-2 lg:hidden">
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content  bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl font-bold">
            Task <span className="text-base-200"> Nex</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        {/* Navbar End  */}
        <div className="navbar-end gap-4">
          <div className="navbar-end gap-4">
            {logedInuser ? (
              <div className="relative w-10 h-10">
                <div className="group relative">
                  <img
                    src={logedInuser.photoURL}
                    alt={logedInuser.displayName}
                    className="w-10 h-10 rounded-full border cursor-pointer z-10"
                    onClick={() => setOpen((prev) => !prev)} // টগল
                  />
                </div>
                {/* Dropdown Menu */}
                <div
                  className={`absolute right-0 top-12 bg-white text-black text-sm px-6 py-3 rounded-xl shadow-xl space-y-2 w-48 transition-all  duration-300 z-50 ${
                    open
                      ? "opacity-100 visible pointer-events-auto"
                      : "opacity-0 invisible pointer-events-none"
                  }`}
                >
                  <h2 className="text-lg font-semibold">
                    {logedInuser?.displayName}
                  </h2>
                  <ul className="space-y-1">
                    {/* <li>
                      <NavLink
                        onClick={() => setOpen(false)}
                        to="/my_posted_tasks"
                        className="hover:underline block"
                      >
                        My Posted Task
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => setOpen(false)}
                        to="/add_task"
                        className="hover:underline block"
                      >
                        Add Task
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink
                        onClick={() => setOpen(false)}
                        to="/profile"
                        className="hover:underline text-xl block"
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => setOpen(false)}
                        to="/dashboard"
                        className="hover:underline text-xl block"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  </ul>
                  <button
                    onClick={handleLogOutUser}
                    className="text-red-600 font-semibold text-xl hover:underline"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <NavLink
                  className={`ml-5 p-2 rounded-xl text-xl ${
                    logedInuser ? "hidden" : "block"
                  }`}
                  to="/auth/sign_up"
                >
                  {logedInuser ? "" : "SignUp"}
                </NavLink>
                <NavLink
                  className={`ml-5 p-2 rounded-xl text-xl ${
                    logedInuser ? "hidden" : "block"
                  }`}
                  to="/auth/login"
                >
                  {logedInuser ? "" : "LogIn"}
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
