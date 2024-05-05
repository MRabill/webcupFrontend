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
import squad from "../assets/Squad.png";
import squadGroup from "../assets/squadGroup.png"
import squadBook from "../assets/squadBook.png"
import backgroundSound from "../Assets/hawken.mp3";
import { useUser } from "../Context/UserContext";

const UserProfile = () => {

    const audio = new Audio(backgroundSound);
    audio.loop = true;
    audio.play();
    

    const {user,signing, logout}= useUser() 
  return (
    
    <div className=" flex justify-between items-center ">
      <div className="absolute top-13 sm:top-13 md:top-16 lg:top-22 xl:top-26 right-1 sm:right-3 md:right-5 lg:right-9 xl:right-13 z-50">
  <button style={{height:"50px", marginTop:"20px"}} className="kave-btn"  onClick={()=>{logout()}}>Log-out</button>
</div>



      
      
      {/* Left card */}
<motion.div 
    initial={{ x: "-100%" }} 
    animate={{ x: 0 }} 
    exit={{ x: "-100%" }}
    transition={{ type: "spring", stiffness: 260, damping: 20,  delay:0.5 }}
    className="relative bg-151031 p-5 rounded-2xl sm:w-[480px] w-full mr-4 ">
    <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
        <div style ={{background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)" , opacity:"0.5"}} className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl">
            {/* Content for right card */}
            <h2 className="text-lg font-semibold mb-4 text-white">Power Profile</h2>
            <p className="text-sm text-white">
                <strong>Name:</strong> Doctor Mind<br />
                <span className="inline-block mt-2"><strong>Power:</strong> Telekinesis</span><br />
                <span className="inline-block mt-2"><strong>Completion:</strong> 75%</span><br />
            </p>
            <Tilt className="Tilt"   options={{ max: 25, scale: 1.1 } }>
                <img
                    src={squadBook}
                    alt="squad"
                    className="w-62 h-auto object-cover rounded-2xl'"
                />
            </Tilt>
            {/* Button */}
            <button className="absolute top-0 right-0 mt-4 mr-4 px-4 py-2 bg-white text-black rounded-lg shadow" onClick={()=>{console.log("Print")}}>Edit</button>
        </div>
    </Tilt>
</motion.div>





      {/* Avatar */}

      <motion.div initial={{ y: "100%" }}
      animate={{
        y: 0,
      }}
      exit={{ y: "-100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay:0.6 }}>
        <div className="flex justify-center items-center h-screen ">
        <AvatarsCanvas />
      </div>
      </motion.div>
      

      {/* Right card */}
      <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20,  delay:0.5 }}
      className="bg-151031 p-5 rounded-2xl sm:w-[480px] w-full mr-4 ">
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
