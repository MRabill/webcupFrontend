import React from "react";
import { Color } from "../assets/Color";
// import { IoMdAdd } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
import { TbInfoCircle, TbBox, TbFile3D } from "react-icons/tb";
import { Button, Spin } from "antd";

const CustomButton = ({
  text = "No text",
  onClick = () => {
    console.log("No Function passed");
  },
  htmlType = "button",
  type = "primary", //default for outline
  style = {},
  isIcon = false,
  isIconOnly = false,
  iconType = "ADD",
  isGradient = false,
  textColor = Color.BLUE03,
  iconColor = Color.BLUE03,
  borderColor = Color.BLUE03,
  loading = false,
}) => {
  const Icon = () => {
    if (isIcon) {
      switch (iconType) {
        // case "ADD":
        //   return <IoMdAdd size={20} color={iconColor} />;
        // case "REMOVE":
        //   return <RxCross2 size={20} color={iconColor} />;
        case "INFO":
          return <TbInfoCircle size={20} color={iconColor} />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <Button
      type={type}
      htmlType={htmlType}
      onClick={onClick}
      style={{
        background: type == "default" ? Color.WHITE : Color.BLUE03,
        borderRadius: "4px",
        border: `1px solid ${borderColor}`,
        boxShadow:
          type == "primary" && isGradient
            ? "0px 8px 25px rgba(2, 33, 169, 0.3)"
            : "none",
        ...style,
      }}
      disabled={loading}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: isIconOnly ? "0px" : "8px",
        }}
      >
        {loading ? <Spin /> : null}
        <Icon />
        {/* {!isIconOnly && // If isIconOnly is false, render the text */}
        {text}
      </div>
    </Button>
  );
};

export default CustomButton;
