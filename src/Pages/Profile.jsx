import React from "react";
import AvatarsCanvas from "../Components/canvas/avatar";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import lobby from "../Assets/lobby.jpg";
import StarsCanvas from "../Components/canvas/Stars";

const Profile = () => {
  return (
    
    <div className="bg-primary h-screen flex justify-between items-center ">
      
      
      {/* Left card */}
      <motion.div className="bg-151031 p-5 rounded-2xl sm:w-[360px] w-full mr-4">
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div className="Tilt-inner bg-gray-800 shadow-md p-4 rounded-2xl">
            {/* Content for left card */}
            <h2 className="text-lg font-semibold mb-2">Left Card</h2>
            <p className="text-sm">Content goes here...</p>
          </div>
        </Tilt>
      </motion.div>

      {/* Avatar */}
      <div className="flex justify-center items-center h-screen relativve z-0">
        <AvatarsCanvas />
        <StarsCanvas/>
      </div>

      {/* Right card */}
      <motion.div className="bg-151031 p-5 rounded-2xl sm:w-[360px] w-full ml-4">
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl">
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-2">Right Card</h2>
            <p className="text-sm">Content goes here...</p>
          </div>
        </Tilt>
      </motion.div>
      
    </div>
    
  );
};

export default Profile;
