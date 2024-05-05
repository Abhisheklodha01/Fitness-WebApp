import React, { useContext } from "react";
import HomeImage from "../assets/images/HomeImgage.svg";
import { Link } from "react-router-dom";
import { Context } from '../index.js'

const HomePage = () => {

  const {isAuthenticated} = useContext(Context)

  return (
    <main
      className="flex h-[80vh] flex-col
   items-center justify-between bg-gray-700 mt-5"
    >
      <div className="flex items-center flex-col sm:flex-row">
        <img className="mt-5 h-[60%] w-[90%]" src={HomeImage} alt="homeImage" />
        <h1 className="text-3xl font-bold text-center text-gray-300 m-16">
          Welcome to our Fitness website
        </h1>
        <Link
          to={
            isAuthenticated ? '/home' : "/signup"
          }
          className="py-1 px-6 bg-gradient-to-r from-cyan-600
         to-blue-600 text-white rounded-lg text-center"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
