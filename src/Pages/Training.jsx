import React, { useState } from "react";
import { Row, Col } from "antd";
import "../styles/Training.css";
import AvatarsCanvas from "../Components/canvas/avatar";
import Avatars4Canvas from "../Components/canvas/avatar4";
import Avatars5Canvas from "../Components/canvas/avatar5";
import backgroundImage from "../Assets/background/backgroundImage.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import TrainingComponent from "../Components/TrainingComponent";

const AvatarCard = ({
  title,
  description,
  trainerName,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`avatar-selection-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{trainerName}</p>
    </div>
  );
};

const Training = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("avatar5");

  const handleAvatarClick = (avatarType) => {
    setSelectedAvatar(avatarType);
  };

  let avatarComponent;
  switch (selectedAvatar) {
    case "avatar4":
      avatarComponent = <Avatars4Canvas />;
      break;
    case "avatar5":
      avatarComponent = <Avatars5Canvas />;
      break;
    default:
      avatarComponent = <AvatarsCanvas />;
  }

  return (
    <>
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          // objectFit: "cover",
          height: "100vh",
          width: "100%",
          zIndex: "-1000",
        }}
        alt="background"
      />
      <div className=" relativve z-1000">
        {/* <AvatarsCanvas /> */}
        <StarsCanvas />
      </div>

      <div className="training-container">
        <Col lg={8}>
          <div className="left-section">
            <div className="flex justify-between items-center h-screen">
              {avatarComponent}
            </div>
          </div>
        </Col>
        <Col lg={16}>
          <div className="right-section">
            <Row>
              {/* <AvatarCard
                title="Avatar 1"
                description="Description 1"
                trainerName="Trainer 1"
                isSelected={selectedAvatar === "avatar"}
                onClick={() => handleAvatarClick("avatar")}
              />
              <AvatarCard
                title="Avatar 4"
                description="Description 4"
                trainerName="Trainer 4"
                isSelected={selectedAvatar === "avatar4"}
                onClick={() => handleAvatarClick("avatar4")}
              /> */}
            </Row>
            <Row>
              {/* <AvatarCard
                title="Avatar 5"
                description="Description 5"
                trainerName="Trainer 5"
                isSelected={selectedAvatar === "avatar5"}
                onClick={() => handleAvatarClick("avatar5")}
              /> */}
            </Row>
            <Row>
              <TrainingComponent />
            </Row>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Training;
