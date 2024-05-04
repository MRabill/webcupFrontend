import React, { useState, useEffect } from "react";
import { Layout, Typography } from "antd";
import { Navigate, useNavigate, useQuery, fetchData, url } from "../../utils";

import Card from "../Components/Card";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const [emogiAnimateText, setEmogiAnimateText] = useState("🔥");
  let myEmogies = ["🤩", "😊", "😲", "😍", "😄", "🔥", "💯", "😃", "👏", "😁"];

  useEffect(() => {
    const urlAnimate = () => {
      setEmogiAnimateText(
        myEmogies[Math.floor(Math.random() * myEmogies.length)]
      );
    };

    const intervalId = setInterval(urlAnimate, 1000); // Run urlAnimate every second

    return () => clearInterval(intervalId); // Cleanup function to stop the interval when component unmounts
  }, []);

  const { isLoading: developersLoading, data: developers = [] } = useQuery(
    ["developers"],
    () => fetchData({ url: url?.GET_DEVELOPERS }),

    { refetchOnWindowFocus: false },
    {
      onError: (e) => {
        console.log("Error fetching developers: ", e);
      },
    }
  );

  return (
    <Layout>
      <Header
        style={{ background: "white", color: "#fff", textAlign: "center" }}
      >
        <Title level={2}>{`Team Codewars ${emogiAnimateText}`}</Title>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Title level={3}>Meet the Developers</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {developers?.payload?.map((developer) => (
            <Card
              cardStyle={{
                width: 250,
                margin: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={developer?.id}
            >
              <img
                // src={developer?.image}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQSepx4dvLNTaLPOv7Mi8p1jzux3d57fMaZXOHdrAhg&s"
                alt={developer?.username}
                style={{ width: 150, borderRadius: "50%", marginBottom: 10 }}
              />
              <Title level={4} style={{ color: "#333" }}>
                {developer?.username}
              </Title>
              <Text type="secondary">{developer?.role}</Text>
            </Card>
          ))}
        </div>
      </Content>

      <button onClick={() => navigate("/setting")}>Setting</button>
      <button onClick={() => navigate("/training")}>Training</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <Footer
        style={{
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Text>&copy; 2024 Team Codewars Webcup. All rights reserved.</Text>
      </Footer>
    </Layout>
  );
};

export default Dashboard;
