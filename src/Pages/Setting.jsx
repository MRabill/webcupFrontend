import React from "react";
import { useOverlay } from "../Context/OverlayContext";
import CustomButton from "../Components/CustomButton";

const Setting = () => {
  const { overlay, setIsOpen } = useOverlay();

  return (
    <div>
      Frentend page 2 setting
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
            title: "New Item",
            content: "Please enter your item details",
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
