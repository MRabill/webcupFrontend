import React from "react";
import AvatarsCanvas from "../Components/canvas/avatar";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import lobby from "../Assets/lobby.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import UserProfile from "./userprofile";

const Profile = () => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#131225",
          position: "absolute",
          zIndex: "-1000",
        }}
      ></div>
      <div></div>
      <div className="relativve z-0">
        <UserProfile />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Profile;
