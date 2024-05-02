import React, { createContext, useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { SpringModal, FormModal } from "../Components/Overlay";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    type: "success",
    title: "No message",
    content: "No description",
    form: <div>No Form</div>,
    onOk: () => {},
    onCancel: () => {},
  });
  const [isOpen, setIsOpen] = useState(false);

  const overlay = ({
    type,
    title,
    content,
    form = <div>No Form</div>,
    actionButton = false,
    actionText = "Action",
    okText = " Understood!",
    onOk,
    onCancel,
    onAction,
  }) => {
    setDetail({
      ...detail,
      type: type,
      title: title,
      content: content,
      actionButton: actionButton,
      actionText: actionText,
      form: form,
      okText: okText,
      onOk: onOk,
      onCancel: onCancel,
      onAction: onAction,
    });
    setIsOpen(true);
  };

  return (
    <OverlayContext.Provider value={{ detail, setIsOpen, setDetail, overlay }}>
      {children}
      {detail.type == "form" ? (
        <FormModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          detail={detail}
          Form={detail.form}
        />
      ) : (
        ""
      )}
      {detail.type == "success" ||
      detail?.type == "error" ||
      detail?.type == "warning" ? (
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} detail={detail} />
      ) : (
        ""
      )}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};
