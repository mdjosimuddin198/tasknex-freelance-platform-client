import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: false, margin: "-30px" }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      className="bg-secondary rounded-xl my-2 w-full text-white "
    >
      <div className="footer  my-4  grid-cols-1 md:grid-cols-4  py-4 px-2">
        <aside>
          {/* Logo */}
          <a className="text-3xl text-black font-bold">
            Task <span className="text-primary">Nex</span>
          </a>
          <div className="flex space-x-4 text-gray-600 text-2xl">
            <a href="#" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary">
              <FaLinkedinIn />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about_us" className="link link-hover">
            About us
          </Link>
          <Link to="/contact_us" className="link link-hover">
            Contact
          </Link>
          <Link to="/find-job" className="link link-hover">
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
      <p className="text-center pb-4">
        Copyright © {new Date().getFullYear()} - All right reserved by TaskNex
      </p>
    </motion.footer>
  );
};

export default Footer;
