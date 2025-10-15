import React, { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router";
import "../index.css";
import { AuthContext } from "../context/AuthProvider";
import { MdSpaceDashboard } from "react-icons/md";

const NavBar = () => {
  const { logedInuser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Job", path: "/find-job" },
    { name: "About Us", path: "/about_us" },
    { name: "Contact Us", path: "/contact_us" },
  ];

  const links = (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => setOpen((prev) => !prev)}
          className={({ isActive }) =>
            ` hover:bg-gray-100 hover:text-primary text-xl p-2 rounded cursor-pointer flex items-center gap-2 transition${
              isActive ? "bg-gray-100 text-primary font-medium" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
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
                    onClick={() => {
                      navigate("/dashboard/profile");
                    }}
                  />
                </div>
              </div>
              <Link to="/dashboard">
                <MdSpaceDashboard size={34} />
              </Link>
            </>
          ) : (
            <>
              <Link
                className={`btn bg-primary/20 text-primary  ${
                  logedInuser ? "hidden" : ""
                }`}
                to="/auth/sign_up"
              >
                Sign Up
              </Link>
              <Link
                className={`btn btn-outline bg-primary  ${
                  logedInuser ? "hidden" : ""
                }`}
                to="/auth/login"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
