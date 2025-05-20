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
      <div className="navbar rounded-2xl bg-base-100 shadow-sm">
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
          <div
            className="tooltip"
            // data-tip={logedInuser && logedInuser.displayName}
          >
            <img
              className="w-12 rounded-full"
              src={logedInuser ? logedInuser.photoURL : userIcon}
            />
          </div>
          {/* {logedInuser ? (
            <Link
              onClick={handleLogOutUser}
              className="btn bg-accent text-white "
            >
              Log out
            </Link>
          ) : (
            <Link to="/auth/login" className="btn bg-accent text-white ">
              Log In
            </Link>
          )} */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
