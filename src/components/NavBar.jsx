import React, { useContext } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import "../index.css";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
// import { Helmet } from "react-helmet";

const NavBar = () => {
  const { logedInuser, setLogedInUser, logOutUser } = useContext(AuthContext);
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

  const links = (
    <>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/">
        Home
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/add_task">
        Add Task
      </NavLink>

      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/browse_tasks">
        Browse Tasks
      </NavLink>

      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/about_us">
        About US
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/contact_us">
        Contact Us
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/my_posted_tasks">
        My Posted Tasks
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/auth/sign_up">
        {logedInuser ? "" : "Sign Up"}
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/auth/login">
        {logedInuser ? "" : "LogIn"}
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
          {/* {logedInuser && (
            <p className="text-red-400 text-2xl">{logedInuser.email}</p>
          )}
          {logedInuser && (
            <p className="text-red-400 text-2xl">{logedInuser.displayName}</p>
          )} */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="navbar-end gap-4">
            {logedInuser ? (
              <div className="relative w-10 h-10">
                <div className="group relative">
                  <img
                    src={logedInuser.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border cursor-pointer z-10"
                  />

                  {/* Display Name Tooltip */}
                  <div
                    className="absolute right-0 top-12 bg-black text-white text-xs px-3 py-1 rounded 
            opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 whitespace-nowrap shadow"
                  >
                    {logedInuser.displayName}
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogOutUser}
                    className="absolute right-0 top-20 w-[120px] bg-red-500 text-white text-sm  
            rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow"
                  >
                    Log out
                  </button>
                </div>
              </div>
            ) : (
              // যদি ইউজার না থাকে, তাহলে userIcon দেখাও
              <div className="w-10 h-10 flex items-center  justify-center text-2xl ">
                <img className="rounded-full" src={userIcon} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
