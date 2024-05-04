import React, { useState } from "react";

import { useOverlay } from "../Context/OverlayContext";
import { url, useMutation, postData } from "../../utils";
import "../Styles/landingPage.css";
import background from "../Assets/landingPage.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import backgroundSound from "../Assets/hawken.mp3";
import sword from "../Assets/sword.mp3";
import teleport from "../Assets/teleport.mp3";
const audio = new Audio(backgroundSound);
const swordSound = new Audio(sword);
const teleportSound = new Audio(teleport);

swordSound.loop = false;
teleportSound.loop = false;

audio.loop = true;
audio.play();

const RegisterPage = () => {
  const { overlay, setIsOpen } = useOverlay();
  const [opt, setOtp] = useState("");
  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    registerUser.mutate(data);
  };

  const registerUser = useMutation(
    async (values) =>
      await postData({
        url: url?.REGISTER_USER,
        body: {
          ...values,
        },
      }),
    {
      onSuccess: (data) => {
        swordSound.play() &&
          overlay({
            type: "success",
            title: "Success",
            content:
              "Registration Successful. Welcome to the League of Heroes!",
            okText: "Continue",
            onOk: () => {
              swordSound.play();
              localStorage.setItem("username", data?.data?.user?.username);
              localStorage.setItem("signing", true);
              window.location.href = "/";
              setOtp(data?.data?.payload?.otp);
            },
            onCancel: () => {
              localStorage.setItem("signing", false);
            },
          });
      },
      onError: (data) => {
        console.log("sfgsdnfisbfiusdf");
        overlay({
          type: "warning",
          title: "Failed",
          content: "Login Attempt Failed. Please try again.",

          onOk: () => {
            localStorage.setItem("signing", false);
          },
          onCancel: () => {
            localStorage.setItem("signing", false);
          },
        });
      },
    }
  );

  return (
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

      <div className=" relativve z-1000">
        <StarsCanvas />
      </div>

      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div class="container mx-auto py-8">
            <h1
              class="text-2xl font-bold mb-6 text-center"
              style={{
                color: "white",
              }}
            >
              Registration Form
            </h1>
            <form
              style={{ background: "transparent" }}
              class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
              onSubmit={onFinish}
            >
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                  style={{
                    color: "white",
                  }}
                >
                  Hero Name
                </label>
                <input
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                  style={{
                    color: "white",
                  }}
                >
                  HeroicIdentity-mail
                </label>
                <input
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                  style={{
                    color: "white",
                  }}
                >
                  Secret Code
                </label>
                <input
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="superpower"
                  style={{
                    color: "white",
                  }}
                >
                  Superpower
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  id="superpower"
                  name="superpower"
                >
                  <option value="">Select Superpower</option>
                  <option value="Invisibility">Invisibility</option>
                  <option value="Super Speed">Super Speed</option>
                  <option value="Energy Projection">Energy Projection</option>
                  <option value="Teleportation">Teleportation</option>
                  <option value="Shapeshifting">Shapeshifting</option>
                  <option value="Healing Factor">Healing Factor</option>
                  <option value="Weather Control">Weather Control</option>
                  <option value="Mind Control">Mind Control</option>
                  <option value="Time Manipulation">Time Manipulation</option>
                  <option value="Elemental Manipulation">
                    Elemental Manipulation
                  </option>
                </select>
              </div>

              <button
                style={{
                  color: "white",
                }}
                class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit"
              >
                Join the League
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
