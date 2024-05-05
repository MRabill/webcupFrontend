

import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import InfiniteStones from "../Components/canvas/infinitestones";
import StarsCanvas from "../Components/canvas/Stars";



const Library = () => {

    return (
        <>
              <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#131225",
          position: "absolute",
          zIndex: "-1000",
        }}
      ></div>
            <div className=" relativve z-1000">
                <StarsCanvas />
            </div>
            <div className="flex justify-between items-center h-screen">
                <InfiniteStones />
            </div>
        </>

    );
};

export default Library;




