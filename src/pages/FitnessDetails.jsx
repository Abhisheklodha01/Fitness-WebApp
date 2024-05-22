import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../utils/constants.js";
import toast from "react-hot-toast";
import { Context } from "../index.js";
import { FaLaptopHouse } from "react-icons/fa";

const FitnessDetails = () => {
  const {setFitness} = useContext(Context)
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem("token");
  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${server}/users/fitnessdetails`,
        {
          gender,
          age,
          height,
          weight,
          goal,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      toast.success(
        "Fitness details capture successfully see your details in my profile page",
        {
          position: "top-center",
        }
      );
      setFitness(true)
      setLoading(false)
      navigate("/home");
    } catch (error) {
      toast.error("Error while capturing fitness details");
      setFitness(false)
      setLoading(false)
      console.log(error);
    }
  };
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
              Enter your fitness details
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandeler}>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-white font-serif"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  className=" border  rounded-lg
                            focus:ring-primary-600 focus:border-primary-600
                            block w-full p-2.5 bg-gray-700
                         border-gray-600 placeholder-gray-400
                         text-white focus:ring-blue-500
                          focus:border-blue-500"
                  required
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 font-medium text-white font-serif"
                >
                  Your Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className=" border  rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block w-full p-2.5 bg-gray-700
               border-gray-600 placeholder-gray-400
               text-white focus:ring-blue-500
                focus:border-blue-500"
                  placeholder="enter your age"
                  required
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block mb-2  font-medium text-white font-serif"
                >
                  Height (in cm)
                </label>
                <input
                  type="number"
                  name="height"
                  placeholder="enter your height in cm"
                  className=" border  rounded-lg
                            focus:ring-primary-600 focus:border-primary-600
                            block w-full p-2.5 bg-gray-700
                         border-gray-600 placeholder-gray-400
                         text-white focus:ring-blue-500
                          focus:border-blue-500"
                  required
                  onChange={(e) => setHeight(e.target.value)}
                  value={height}
                />
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block mb-2  font-medium text-white font-serif"
                >
                  Weight (in kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  placeholder="enter your weight in kg"
                  className=" border  rounded-lg
                            focus:ring-primary-600 focus:border-primary-600
                            block w-full p-2.5 bg-gray-700
                         border-gray-600 placeholder-gray-400
                         text-white focus:ring-blue-500
                          focus:border-blue-500"
                  required
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                />
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block mb-2  font-medium text-white font-serif"
                >
                  Your Goal
                </label>
                <input
                  type="text"
                  name="goal"
                  placeholder="enter your goal"
                  className=" border  rounded-lg
                            focus:ring-primary-600 focus:border-primary-600
                            block w-full p-2.5 bg-gray-700
                         border-gray-600 placeholder-gray-400
                         text-white focus:ring-blue-500
                          focus:border-blue-500"
                  required
                  onChange={(e) => setGoal(e.target.value)}
                  value={goal}
                />
                <div>
                  {loading ? (
                    <Loader className="h-2" />
                  ) : (
                    <button
                      type="submit"
                      className="mt-5 py-2 px-8 bg-gradient-to-r from-cyan-600
                   to-blue-600 rounded-lg text-white ml-28 md:ml-32 "
                    >
                      Submit Details
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

export default FitnessDetails;
