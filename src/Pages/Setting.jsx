import React, { useState } from "react";
import { useOverlay } from "../Context/OverlayContext";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../Components/CustomButton";

const Setting = () => {
  const { overlay, setIsOpen } = useOverlay();
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(0.5);

  const rotateBy = () => {
    setRotate(rotate + 90);
    setScale(scale + 0.1);
  };

  return (
    <div>
      Frentend page 2 setting
      <motion.div
        // animate={{
        //   x: 0,
        //   y: 0,
        //   scale: scale,
        //   rotate: rotate,
        // }}
        // transition={{ ease: "easeOut", duration: 0.5 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: "100px",
          height: "100px",
          background: "red",
        }}
      >
        <div></div>
      </motion.div>
      <CustomButton
        onClick={() => rotateBy()}
        text={"Rotate"}
        isIcon={true}
        iconType={"INFO"}
        style={{ width: "170px" }}
      />
      <CustomButton
        onClick={() =>
          overlay({
            type: "success",
            title: "Success",
            content: "New Action made Successfully",

            onOk: () => {
              console.log("Okay");
            },
            onCancel: () => {
              console.log("Cancel");
            },
          })
        }
        text={"Success"}
        isIcon={true}
        iconType={"INFO"}
        style={{ width: "170px" }}
      />
      <CustomButton
        onClick={() =>
          overlay({
            type: "warning",
            title: "Warning",
            content: "Are you sure you want to delete this item",

            onOk: () => {
              console.log("Okay");
            },
            onCancel: () => {
              console.log("Cancel");
            },
          })
        }
        text={"Confirm"}
        isIcon={true}
        iconType={"INFO"}
        style={{ width: "170px" }}
      />
      <CustomButton
        onClick={() =>
          overlay({
            type: "form",
            title: "Register",
            content: "Please fill in the form below",
            form: NewForm,
            onOk: () => {
              console.log("Okay");
            },
            onCancel: () => {
              console.log("Cancel");
            },
          })
        }
        text={"Form"}
        isIcon={true}
        iconType={"INFO"}
        style={{ width: "170px" }}
      />
    </div>
  );
};

export default Setting;

const NewForm = () => {
  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
    </div>
  );
};
