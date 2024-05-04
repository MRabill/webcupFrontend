import React from "react";
import AvatarsCanvas from "../Components/canvas/avatar";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import lobby from "../Assets/lobby.jpg";
import StarsCanvas from "../Components/canvas/Stars";

const UserProfile = () => {
  return (
    
    <div className=" flex justify-between items-center ">
      
      
      {/* Left card */}
      <motion.div className="bg-151031 p-5 rounded-2xl sm:w-[360px] w-full mr-4 ">
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div style ={{background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)" ,opacity:"0.8" }} className="Tilt-inner bg-gray-800 shadow-md p-4 rounded-2xl">
            {/* Content for left card */}
            <h2 className="text-lg font-semibold mb-2 text-white">Left Card</h2>
            <p className="text-sm text-white">
        {/* Additional information */}
        <strong>Name:</strong> Doctor Strange<br />
        <strong>Power:</strong> Mind Control<br />
        <strong>Age:</strong> 55 yrs old<br />
        <strong>Origin:</strong> Planet Karls III
      </p>
          </div>
          
        </Tilt>
      </motion.div>

      {/* Avatar */}

      
      <div className="flex justify-center items-center h-screen ">
        <AvatarsCanvas />
      </div>

      {/* Right card */}
      <motion.div className="bg-151031 p-5 rounded-2xl sm:w-[360px] w-full ml-4  ">
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div style ={{background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)" ,opacity:"0.8" }} className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl">
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-2 text-white">Right Card</h2>
            <p  className="text-sm text-white">Content goes here...</p>
          </div>
        </Tilt>
      </motion.div>
      
    </div>
    
  );
};

export default UserProfile;
