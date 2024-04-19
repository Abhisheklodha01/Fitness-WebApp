import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../index.js'
import Logo from "../assets/images/Logo.png";
import axios from "axios";
import { server } from "../utils/constants.js";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { setIsAuthenticated, isAuthenticated, user } = useContext(Context)
  const [nav, setNav] = useState(false)
  const LogoutHandler = async () => {
    try {
      await axios.post(`${server}/users/logout`, {
        withCredentials: true,
      })
      toast.success("Logged out successfully", {
        position: "top-center"
      })
      setIsAuthenticated(false)
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false)
    }
  }

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
      {isAuthenticated === false ? "" : (
        <div className="flex gap-10 mt-4 text-2xl font-medium mr-4 md:mr-[25rem]">
          <Link
            to="/home"
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
      )}
      {
        isAuthenticated === true ? (
          <div className="hidden md:inline">
            <ul className="flex space-x-5 text-white mt-4">
              <li>
                <Link
                  className="py-3 px-4 border-1  rounded-lg
                bg-gradient-to-r from-cyan-600 to-blue-600 text-lg"
                  to="/user"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  className="py-3 px-6 border-1  rounded-lg mr-5
                bg-gradient-to-r from-sky-600 to-violet-700 text-lg mb-4"
                  onClick={LogoutHandler}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden md:inline">
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
        )
      }

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4  mt-4 text-gray-300 z-20 "
      >
        {nav ? <FaTimes size={30} className="mr-14" /> : <FaBars size={30} />}
      </div>

      {
        nav ? (
          <div className=" flex flex-col bg-gray-700 z-10">
            {
              isAuthenticated === false ? (
                <ul className="flex flex-col justify-center
                          items-center absolute top-0 left-0
                          w-full h-screen bg-gray-700 text-gray-200 ">
                  <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link
                      className="py-3 px-4 border-1  rounded-lg
                  bg-gradient-to-r from-cyan-600 to-blue-600 text-lg"
                      to="/signup"
                      onClick={()=> setNav(false)}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link
                      className="py-3 px-6 border-1  rounded-lg
                  bg-gradient-to-r from-sky-600 to-violet-700 text-lg"
                      to="/login"
                      onClick={()=> setNav(false)}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="flex flex-col justify-center
                items-center absolute top-0 left-0
                w-full h-screen bg-gray-700 text-gray-200 bg-cover ">
                  <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link
                      className="py-3 px-4 border-1  rounded-lg
                      bg-gradient-to-r from-cyan-600 to-blue-600 text-lg"
                      onClick={()=> setNav(false)}
                      to={"/user"}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="x-4 cursor-pointer capitalize py-6 text-4xl">
                    <button
                      className="py-2 px-8 border-1  rounded-lg
                      bg-gradient-to-r from-sky-600 to-violet-700 text-lg"
                      to=""
                      onClick={LogoutHandler}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )
            }

          </div>
        ) : ""
      }

    </nav>
  );
};

export default Navbar;
