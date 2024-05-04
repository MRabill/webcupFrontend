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
} from "../../utils";
import AnimationEmptyPage from "../Assets/lotties/404.json";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../Components/CustomButton";
import "../Styles/landingPage.css";
import background from "../Assets/landingPage.jpg";

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
          objectFit: "cover",
          height: "100vh",
        }}
      />

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
            </Col>
            <Col sm={24} lg={24}>
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
            </Col>
            <Col
              sm={24}
              lg={24}
              style={{
                marginTop: "50px",
              }}
            >
              <button
                class="kave-btn"
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
                <span class="kave-line"></span>
                Start Your Journey
              </button>
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

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
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
            prefix={<UserOutlined className="site-form-item-icon" />}
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <button class="kave-btn" onClick={() => form.submit()}>
            <span class="kave-line"></span>
            Login
          </button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
