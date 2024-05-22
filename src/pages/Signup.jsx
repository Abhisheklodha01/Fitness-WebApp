import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../utils/constants.js";
import toast from "react-hot-toast";
import { Context } from "../index.js";
import LoaderImage from '../assets/icons/loader.svg'

const Signup = () => {
  const { setIsAuthenticated, setUser, isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${server}/users/register`,
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message, {
        position: "top-center",
      });
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setLoading(false);
      setUser(data.user);
      navigate("/fitnessdetails");
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setEmail("");
      setUsername("");
      setPassword("");
      setLoading(false);
    }
  };

  if (
    isAuthenticated === true &&
    window.location.pathname.startsWith("/signup")
  ) {
    navigate("/home");
  }
  return (
    <section className="bg-gray-600 mt-2 min-h-screen">
      <div
        className="flex flex-col items-center
                    justify-center px-6 py-8
                    mx-auto md:h-screen lg:py-0"
      >
        <div
          className="w-full rounded-xl
                    shadow border md:mt-0 sm:max-w-md xl:p-0 
                  bg-gray-800 border-gray-700 mt-32"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1
              className="text-xl text-center font-semibold
                       md:text-2xl text-white"
            >
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandeler}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-white font-serif"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border  rounded-lg
                            focus:ring-primary-600 focus:border-primary-600
                            block w-full p-2.5 bg-gray-700
                         border-gray-600 placeholder-gray-400
                         text-white focus:ring-blue-500
                          focus:border-blue-500"
                  placeholder="enter your username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-white font-serif"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border  rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block w-full p-2.5 bg-gray-700
               border-gray-600 placeholder-gray-400
               text-white focus:ring-blue-500
                focus:border-blue-500"
                  placeholder="enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2  font-medium text-white font-serif"
                >
                  Password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  placeholder="enter your password"
                  className=" border  rounded-lg
                            focus:ring-primary-600 focus:border-primary-600
                            block w-full p-2.5 bg-gray-700
                         border-gray-600 placeholder-gray-400
                         text-white focus:ring-blue-500
                          focus:border-blue-500"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className=" font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <span style={{ color: "blue" }}>Login here</span>
                  </Link>
                </p>
                <div>
                  {loading ? (
                   <img src={LoaderImage} alt="loader..."
                   className="h-8 w-44 mt-5 ml-14 md:ml-24 rounded-lg"
                   />
                  ) : (
                    <button
                      type="submit"
                      className="mt-5 py-2 px-8 bg-gradient-to-r from-cyan-600
                   to-blue-600 rounded-lg text-white ml-28 md:ml-32 "
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
