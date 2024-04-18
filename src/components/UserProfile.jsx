import React, { useContext } from "react";
import { Context } from "../index";
import {  useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate()
  const { user, isAuthenticated } = useContext(Context);
  if (isAuthenticated === false) {
      navigate("/")
  }
  return (
    <div className="text-center mt-5 min-h-screen bg-gray-700">
      <div className="flex flex-col items-center">
        <div className="text-xl text-gray-200  mt-28 ">
        <p className="">Email: <span>{user?.email}</span></p>
        <p className="mt-5 mb-5">Username: <span>{user?.username}</span></p>
        <p>UserId: <span>{user?._id}</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
