import React from "react";
import { Divider } from "antd";

const Card = ({
  children,
  title,
  divider = false,
  cardStyle = {},
  onClick = () => {},
}) => {
  const defaultCardStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.5)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  return (
    <div
      style={{
        ...defaultCardStyle,
        ...cardStyle,
      }}
      onClick={onClick}
    >
      {title}
      {divider && (
        <Divider
          style={{ margin: 0, marginTop: "-10px", background: "#DDE1FF" }}
        />
      )}

      {children}
    </div>
  );
};

export default Card;
