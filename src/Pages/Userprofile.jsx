import React from "react";
import AvatarsCanvas from "../Components/canvas/avatar";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import lobby from "../Assets/lobby.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import book from "../assets/book.png";
import file from "../assets/file.png";
import bookStat from "../assets/BookStat.png";
import stat from "../assets/stats.png";

const UserProfile = () => {
  return (
    
    <div className=" flex justify-between items-center ">
      
      
      {/* Left card */}
      <motion.div className="bg-151031 p-5 rounded-2xl sm:w-[480px] w-full mr-4 ">
    <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
        
    <div style ={{background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)" , opacity:"0.5"}} className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl">
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-4 text-white">Power Profile</h2>
            <p className="text-sm text-white">
            <strong>Name:</strong> Doctor Mind<br />
        <strong className="inline-block mt-2">Power:</strong> Telekinesis<br />
        <strong className="inline-block mt-2">Completion:</strong> 75%<br />
            </p>
            <Tilt className="Tilt"   options={{ max: 25, scale: 1.1 } }>
            <img
              src={bookStat}
              alt="book"
              className="w-full h-full object-cover rounded-2xl'"
            />
            </Tilt>
          </div>
          
    </Tilt>
   
</motion.div>




      {/* Avatar */}

      
      <div className="flex justify-center items-center h-screen ">
        <AvatarsCanvas />
      </div>

      {/* Right card */}
      <motion.div className="bg-151031 p-5 rounded-2xl sm:w-[480px] w-full mr-4 ">
        <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
          <div style ={{background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)", opacity:"0.5"  }} className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl">
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-2 text-white">Hero Profile</h2>
            <p  className="text-sm text-white">
            <strong>Weaknesses:</strong> Vulnerable to physical attacks<br />
        <strong className="inline-block mt-2">Goals/Aspirations:</strong> Preserving the balance of mystical forces<br />
        <strong className="inline-block mt-2">Equipment/Tools:</strong> Eye of Agamotto, various mystical artifacts<br />
            </p>
            <Tilt className="Tilt"   options={{ max: 25, scale: 1.1 } }>
            <img
              src={stat}
              alt="stat"
              className="w-full h-full object-cover rounded-2xl'"
            />
            </Tilt>
          </div>
        </Tilt>
      </motion.div>
      
    </div>
    
  );
};

export default UserProfile;
