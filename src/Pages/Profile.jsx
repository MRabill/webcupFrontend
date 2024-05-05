import React from "react";
import AvatarsCanvas from "../Components/canvas/avatar";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import lobby from "../Assets/lobby.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import UserProfile from "./userprofile";
import { useUser } from "../Context/UserContext";
import background from "../Assets/landingPage.jpg";
import { useNavigate } from "../../utils";

const Profile = () => {
  const { user, signing, logout } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      {user?.username !== "" && user?.username ? (
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
          <div></div>
          <div className="relativve z-0">
            <UserProfile />
            <StarsCanvas />
          </div>
        </>
      ) : (
        <>
          <img
            src={background}
            style={{
              position: "absolute",
              height: "100vh",
              width: "100%",
              zIndex: "-1000",
            }}
          />
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="kave-btn" onClick={() => navigate("/")}>
              <span className="kave-line"></span>
              "Sign in to continue"
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
