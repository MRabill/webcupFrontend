import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Layout,
  Typography,
  Col,
  Row,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import { useOverlay } from "../Context/OverlayContext";
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

const LandingPage = () => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  console.log(screenWidth);

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
     
     <img
        src={background}
        style={{
          position: "absolute",
          // objectFit: "cover",
          height: "100vh",
          width: "100%",
          zIndex: "-1000"
        }}
      />
     
      <div className=" relativve z-1000">
        {/* <AvatarsCanvas /> */}
        <StarsCanvas/>
      </div>

      <Row style={{ width: "100%", height: "100vh" }}  >
       
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
                initial={{ y: "100%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
                initial={{ y: "100%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
            <Col
              sm={24}
              lg={24}
              style={{
                marginTop: "50px",
              }}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{
                  y: 0,
                }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <button
                  className="kave-btn"
                  onClick={() =>
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
      </Row>
    </>
  );
};

export default LandingPage;

const NewForm = () => {
  const [form] = Form.useForm();
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
        url: url?.POST_USER,
        body: {
          ...values,
        },
      }),
    {
      onSuccess: (data) => {
        overlay({
          type: "success",
          title: "Success",
          content: "Login Successful. Welcome to the League of Heroes!",
          okText: "Continue",
          onOk: () => {
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
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2> */}
        </div>

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
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
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
              <button
                // type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

{
  /* <Form
        name="normal_login"
        classNameName="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined classNameName="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined classNameName="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a classNameName="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <button className="kave-btn" onClick={() => form.submit()}>
            <span className="kave-line"></span>
            Login
          </button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form> */
}
