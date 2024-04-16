import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="h-20 py-6 px-3 flex justify-between font-medium text-xl
      text-gray-300">
      <div className="">
        <Link to="/home" className="font-bold text-2xl items-center mb-4">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "48px",
              height: "48px",
              margin: "0 20px",
            }}
          />
        </Link>
      </div>
      <div className="flex gap-10 mt-4 text-2xl font-medium mr-4 md:mr-[25rem]">
        <Link
          to="/"
          className="underline underline-offset-4 text-[#3A1212]
           decoration-[5px] decoration-amber-700"
        >
          Home
        </Link>
        <a
          to="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </div>
      <div className="hidden sm:inline">
        <ul className="flex space-x-5 text-white mt-4">
          <li>
            <Link
              className="py-3 px-4 border-1  rounded-lg
                  bg-gradient-to-r from-cyan-600 to-blue-600 text-lg"
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              className="py-3 px-6 border-1  rounded-lg mr-5
                  bg-gradient-to-r from-sky-600 to-violet-700 text-lg"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;



// <Link to="/">
//         <img
//           src={Logo}
//           alt="logo"
//           style={{
//             width: "48px",
//             height: "48px",
//             margin: "0 20px",
//           }}
//         />
//       </Link>