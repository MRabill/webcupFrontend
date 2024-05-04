import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { GiSuperMushroom } from "react-icons/gi";
import { RiQrCodeFill } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  Layout,
  Typography,
  Col,
  Row,
  Form,
  Input,
  Button,
  Checkbox,
  notification,
  FloatButton,
} from "antd";
import { useOverlay } from "../Context/OverlayContext";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import {
  Navigate,
  useNavigate,
  useQuery,
  fetchData,
  url,
  Lottie,
  useMutation,
  postData,
} from "../../utils";
// import { AnimatePresence, motion } from "framer-motion";
import AnimationEmptyPage from "../Assets/lotties/404.json";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../Components/CustomButton";
import "../Styles/landingPage.css";
import background from "../Assets/landingPage.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import LogosCanvas from "../Components/canvas/logo";
//import notificationSound from "../../assets/notificationSound.mp3";
import backgroundSound from "../Assets/hawken.mp3";
import sword from "../Assets/sword.mp3";
import teleport from "../Assets/teleport.mp3";
import QRCODE from "../Assets/QRCODE.jpg";
const audio = new Audio(backgroundSound);
const swordSound = new Audio(sword);
const teleportSound = new Audio(teleport);

swordSound.loop = false;
teleportSound.loop = false;

audio.loop = true;
audio.play();

const LandingPage = () => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [api, contextHolder] = notification.useNotification();

  const missions = [
    {
      title: "Rescue Operation",
      details: "A building is on fire! Rescue civilians trapped inside.",
    },
    {
      title: "Villain Takedown",
      details: "Stop a notorious villain from robbing a bank.",
    },
    {
      title: "Hostage Extraction",
      details:
        "A group of hostages needs to be rescued from a terrorist hideout.",
    },
    {
      title: "Disaster Relief",
      details:
        "Assist in providing aid and support to areas affected by natural disasters.",
    },
    {
      title: "Artifact Recovery",
      details:
        "Retrieve a powerful artifact before it falls into the wrong hands.",
    },
    {
      title: "Undercover Operation",
      details:
        "Infiltrate a criminal organization to gather valuable intelligence.",
    },
    {
      title: "Cybersecurity Defense",
      details:
        "Prevent a cyberattack on critical infrastructure or sensitive data.",
    },
    {
      title: "Alien Invasion Defense",
      details: "Protect Earth from an imminent alien invasion.",
    },
    {
      title: "Peacekeeping Mission",
      details: "Maintain peace and order in a region plagued by civil unrest.",
    },
    {
      title: "Scientific Research Expedition",
      details:
        "Explore uncharted territories or investigate mysterious phenomena.",
    },
    // Add more mission objects as needed
  ];

  // const openNotificationWithIcon = (type) => {
  //   api[type]({
  //     message: "Rescue Operation",
  //     description: "A building is on fire! Rescue civilians trapped inside.",
  //   });
  // };
  // const [isLoginForm, setIsLoginForm] = useState(true);
  //useffect to trigger notification after a random interval
  useEffect(() => {
    const randomInterval = Math.floor(Math.random() * (10000 - 30000)) + 30000;
    const timer = setTimeout(() => {
      const randomMission =
        missions[Math.floor(Math.random() * missions.length)];
      openNotificationWithIcon(
        "info",
        randomMission.title,
        randomMission.details
      );
    }, randomInterval);
    return () => clearTimeout(timer);
  });

  const openNotificationWithIcon = (type, title, details) => {
    // Your notification logic here
    api[type]({
      message: title,
      description: details,
    });
  };

  useEffect(() => {
    const randomInterval = Math.floor(Math.random() * (4000 - 3000)) + 3000;
    const timer = setTimeout(() => {
      const randomMission =
        missions[Math.floor(Math.random() * missions.length)];
      openNotificationWithIcon(
        "info",
        randomMission.title,
        randomMission.details
      );
    }, randomInterval);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = screenWidth < 768;
  const { overlay, setIsOpen } = useOverlay();
  const [modalDetail, setDetails] = useState({
    type: "LOGIN",
    title: "Login",
    content: "Please fill in the form below",
  });

  const setToLogin = () => {
    if (modalDetail.type === "LOGIN") {
      setDetails({
        type: "REGISTER",
        title: "Register",
        content: "Please fill in the form below",
      });
    } else {
      setDetails({
        title: "Login",
        content: "Please fill in the form below",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <img
        src={background}
        // className="blur-sm"
        style={{
          position: "absolute",
          // objectFit: "cover",
          height: "100vh",
          width: "100%",
          zIndex: "-1000",
        }}
      />

      <div className=" relativve z-1000">
        {/* <AvatarsCanvas /> */}
        <StarsCanvas />
      </div>
      <FloatButton.Group
        trigger="click"
        // type="primary"
        style={{
          right: 24,
          // color: "red",
        }}
        icon={<GiSuperMushroom />}
      >
        {/* <FloatButton /> */}
        {/* <FloatButton icon={<IoIosInformationCircleOutline />} /> */}
        <FloatButton
          icon={
            <RiQrCodeFill
              onClick={() => {
                overlay({
                  type: "form",
                  title: "QR Code",
                  content: "Scan the QR Code to access the League of Heroes",
                  form: QRCode,
                  onOk: () => {
                    console.log("Okay");
                  },
                  onCancel: () => {
                    console.log("Cancel");
                  },
                });
              }}
            />
          }
        />
      </FloatButton.Group>
      {/* <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{
          right: 94,
        }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group> */}
      <Row style={{ width: "100%", height: "100vh" }}>
        <Col
          sm={24}
          lg={12}
          style={{
            background: "transparent",
            display: "flex",
            alignItems: isMobile ? "" : "center",
            justifyContent: "center",
          }}
        >
          <Row
            style={{
              padding: "20px",
            }}
          >
            <Col sm={24} lg={24}>
              <motion.div
                initial={{ y: "300%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontFamily: "Orbitron",
                    fontWeight: "bold",
                    color: "white",
                    marginTop: "50px",
                  }}
                >
                  Unleash Your Inner Hero
                </p>
              </motion.div>
            </Col>
            <Col sm={24} lg={24}>
              <motion.div
                initial={{ y: "300%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Orbitron",
                    fontWeight: "bold",
                    color: "white",
                    marginTop: "50px",
                  }}
                >
                  Discover Your Superpowers and Join the League of Heroes
                </p>
              </motion.div>
            </Col>
            <Col sm={24} lg={24}>
              <motion.div
                initial={{ y: "300%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "Orbitron",
                    // fontWeight: "bold",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  "You have a gift. You have power. And with great power comes
                  great responsibility."
                </p>
              </motion.div>
            </Col>
            <Col
              sm={24}
              lg={24}
              style={{
                marginTop: "50px",
              }}
            >
              <motion.div
                initial={{ y: "200%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.7,
                }}
              >
                <button
                  className="kave-btn"
                  onClick={() =>
                    swordSound.play() &&
                    overlay({
                      type: "form",
                      title: modalDetail?.title,
                      content: modalDetail?.content,
                      form: NewForm,
                      onOk: () => {
                        console.log("Okay");
                      },
                      onCancel: () => {
                        console.log("Cancel");
                      },
                    })
                  }
                >
                  <span className="kave-line"></span>
                  Start Your Journey
                </button>
              </motion.div>
            </Col>
          </Row>
        </Col>
        <Col sm={24} lg={12}>
          <LogosCanvas />
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;

const QRCode = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <img
        src={QRCODE}
        style={{
          width: "50%",
          height: "auto",
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

const NewForm = () => {
  const { overlay, setIsOpen } = useOverlay();
  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    loginUser.mutate(data);
  };

  const loginUser = useMutation(
    async (values) =>
      await postData({
        url: url?.AUTHENTICATE_USER,
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
            content: "Login Successful. Welcome to the League of Heroes!",
            okText: "Continue",
            onOk: () => {
              swordSound.play();
              localStorage.setItem("username", data?.data?.user?.username);
              localStorage.setItem("signing", true);
              // navigate("/profile");
              window.location.href = "/profile";
              console.log({ DATE: data });
            },
            onCancel: () => {
              console.log("Cancel");
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
            console.log("Okay");
            localStorage.setItem("signing", false);
          },
          onCancel: () => {
            console.log("Cancel");
            localStorage.setItem("signing", false);
          },
        });
      },
    }
  );

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onFinish}>
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "white",
                }}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="username"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{
                    fontFamily: "Poppins",
                    paddingLeft: "10px",
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                  style={{
                    color: "white",
                  }}
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{
                    fontFamily: "Poppins",
                    paddingLeft: "10px",
                  }}
                />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {loginUser?.isLoading ? "Validating..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a Hero?
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              style={{
                paddingLeft: "5px",
              }}
              // onClick={() => {
              //   console.log("Register");
              //   window.location.href = "/register";
              // }}
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
