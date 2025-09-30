import React, { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import "../index.css";
import { AuthContext } from "../context/AuthProvider";
import { MdSpaceDashboard } from "react-icons/md";

const NavBar = () => {
  const { logedInuser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <NavLink
        onClick={() => setOpen((prev) => !prev)}
        className="ml-5 p-2 rounded-xl  text-xl"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        onClick={() => setOpen((prev) => !prev)}
        className="ml-5 p-2 rounded-xl text-xl"
        to="/find-job"
      >
        Find Job
      </NavLink>

      <NavLink
        onClick={() => setOpen((prev) => !prev)}
        className="ml-5 p-2 rounded-xl text-xl"
        to="/about_us"
      >
        About US
      </NavLink>
      <NavLink
        onClick={() => setOpen((prev) => !prev)}
        className="ml-5 p-2 rounded-xl text-xl"
        to="/contact_us"
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar my-2 rounded-2xl w-11/12 mx-auto bg-gray-100 shadow-md relative">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-2xl mx-2"
            >
              <FaBarsStaggered />
            </button>
          </div>

          {/* Logo */}
          <a className="text-xl font-bold">
            Task <span className="text-primary">Nex</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Mobile Dropdown Menu (with animation) */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-200 shadow-lg rounded-b-2xl lg:hidden transform transition-all duration-500 ease-in-out ${
            open
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-10 opacity-0 invisible"
          }`}
        >
          <ul className="menu menu-vertical px-4 py-3 space-y-2">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-4">
          {logedInuser ? (
            <>
              <div className="relative w-10 h-10">
                <div className="group relative">
                  <img
                    src={logedInuser.photoURL}
                    alt={logedInuser.displayName}
                    className="w-10 h-10 rounded-full border cursor-pointer z-10"
                    onClick={() => setOpen((prev) => !prev)} // টগল
                  />
                </div>
              </div>
              <Link to="/dashboard">
                <MdSpaceDashboard size={34} />
              </Link>
            </>
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
    </>
  );
};

export default NavBar;
