import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 rounded-2xl">
      <div className="footer  my-4 grid-cols-4  py-4 px-2">
        <aside>
          <a className=" text-3xl font-bold">
            Task <span className="text-base-200"> Nex</span>
          </a>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about_us" className="link link-hover">
            About us
          </Link>
          <Link to="/contact_us" className="link link-hover">
            Contact
          </Link>
          <Link to="/browse_tasks" className="link link-hover">
            Jobs
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/mdjosimuddin198/"
            className="link link-hover"
          >
            Linkedin
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/mdjosimuddin198/"
            className="link link-hover"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            to="https://www.facebook.com/mdjosimuddin198/"
            className="link link-hover"
          >
            Facebook
          </Link>
          <Link
            target="_blank"
            to="https://www.github.com/mdjosimuddin198/"
            className="link link-hover"
          >
            GitHub
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </div>
      <p className="text-center mb-4">
        Copyright © {new Date().getFullYear()} - All right reserved by TaskNex -
        Freelance Bidding Platform
      </p>
    </footer>
  );
};

export default Footer;
