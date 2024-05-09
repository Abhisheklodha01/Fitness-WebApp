import React, { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, userFitness, fitnessSuggetion } =
    useContext(Context);
  if (isAuthenticated === false) {
    navigate("/");
  }
  console.log(fitnessSuggetion);
  console.log(userFitness);
  return (
    <div className="text-center mt-5 min-h-screen bg-gray-700">
      <div className="flex flex-col items-center">
        <div className="text-xl text-gray-200  mt-28 ">
          <p className="">
            Email: <span>{user?.email}</span>
          </p>
          <p className="mt-5 mb-5">
            Username: <span>{user?.username}</span>
          </p>
          <p>
            UserId: <span>{user?._id}</span>
          </p>
          <p className="mt-5 mb-5">
            Gender: <span>{userFitness[0]?.gender}</span>
          </p>
          <p>
            Age: <span>{userFitness[0]?.age}</span>
          </p>
          <p className="mt-5 mb-5">
            Height: <span>{userFitness[0]?.height} cm</span>
          </p>
          <p>
            Weight: <span>{userFitness[0]?.weight} kg</span>
          </p>
          <p className="mt-5 mb-5">
            Goal: <span>{userFitness[0]?.goal}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center border-2 border-cyan-500 w-full mt-5 mb-2"></div>
      <div className="flex flex-col items-center">
        {fitnessSuggetion && (
          <div className="flex flex-col items-start">
            <h2 className="text-gray-200 font-bold text-2xl ml-5 md:ml-2 mt-2">
              Diet Plan
            </h2>
            <ul className=" flex-row justify-evenly text-gray-200 text-xl ">
              {Object.entries(fitnessSuggetion.dietPlan).map(
                ([meal, description]) => (
                  <li key={meal}>
                    <h3 className="mt-5 mb-5 font-semibold text-gray-100">
                      {meal.toUpperCase()}:
                    </h3>
                    <p className="text-lg">{description}</p>
                  </li>
                )
              )}
            </ul>
            <div className="flex justify-center border-2 border-cyan-500 w-full mt-5 mb-2"></div>
            <h2 className="text-gray-200 font-bold text-2xl ml-5 md:ml-2 mt-5">
              Exercise Routine
            </h2>
            <ul className=" flex-row justify-evenly text-gray-200 text-xl ">
              {Object.entries(fitnessSuggetion.exerciseRoutine).map(
                ([day, activity]) => (
                  <li key={day}>
                    <h3 className="mt-5 mb-5 font-semibold text-gray-100">
                      {day.toLocaleUpperCase()}:
                    </h3>
                    <p className="text-lg mb-5">{activity}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
