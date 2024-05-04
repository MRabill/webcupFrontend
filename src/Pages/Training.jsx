import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "../styles/Training.css";
import AvatarsCanvas from "../Components/canvas/avatar";
import Avatars4Canvas from "../Components/canvas/avatar4";
import Avatars5Canvas from "../Components/canvas/avatar5";
import backgroundImage from "../Assets/background/backgroundImage.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import TrainingComponent from "../Components/TrainingComponent";

const Training = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("avatar5"); // Make sure it's correctly set to "avatar5"

  const handleAvatarClick = (avatarType) => {
    setSelectedAvatar(avatarType);
  };

  const changeAvatar = () => {
    setSelectedAvatar((prevAvatar) => {
      return prevAvatar === "avatar4" ? "avatar5" : "avatar4";
    });
  };

  return (
    <>
      {/* Background image */}
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          zIndex: "-1000",
        }}
        alt="background"
      />

      {/* Stars animation */}
      <div className=" relativve z-1000">
        <StarsCanvas />
      </div>

      {/* Main content */}
      <div className="training-container">
        <Col lg={8}>
          <div className="left-section">
            <div className="flex justify-between items-center h-screen">
              {/* Render the selected avatar */}
              {selectedAvatar === "avatar4" && <Avatars4Canvas />}
              {selectedAvatar === "avatar5" && <Avatars5Canvas />}
              {/* Add more conditions for other avatars if needed */}
            </div>
          </div>
        </Col>
        <Col lg={16}>
          <div className="right-section">
            <Row>
              {/* Render the TrainingComponent passing selectedAvatar */}
              <TrainingComponent
                onChangeAvatar={changeAvatar}
                selectedAvatar={selectedAvatar}
              />
            </Row>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Training;
