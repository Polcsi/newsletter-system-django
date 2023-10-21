import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BasicButton from "../components/buttons/BasicButton";

const Navbar = () => {
  return (
    <nav className="w-screen h-[65px] flex justify-center shadow-lg">
      <div className="w-[95%] max-w-[1200px] flex flex-row items-center justify-between">
        <div className="flex gap-5 items-center">
          <div className="">
            <Link to="/">
              <motion.img
                animate={{ rotate: 180 }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 2,
                  repeatType: "loop",
                }}
                src={"./react.svg"}
                className="w-10 h-10"
                alt=""
              />
            </Link>
          </div>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#articles">Articles</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-row gap-3">
          <li>
            <Link to="login">
              <BasicButton className="ring-0">Login</BasicButton>
            </Link>
          </li>
          <li>
            <Link to="register">
              <BasicButton>Sign Up</BasicButton>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
