import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer bg-base-100 rounded-2xl my-4 grid-cols-3  py-4 px-2">
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
    </footer>
  );
};

export default Footer;
