import React from "react";

const Modal = ({
  ModalStatus,
  setModalStatus,
  ModalContainerClass,
  ModalBodyClass,
  ModalcloseIcon,
  ModalChildren,
}) => {
  const modalContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 100000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const ModalBody = {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "40%",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "5rem",
    position: "relative",
  };

  const closeIcon = {
    position: "absolute",
    top: "-0.5rem",
    right: "-0.5rem",
    backgroundColor: "black",
    borderRadius: "50%",
    color: "white",
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
  };

  if (ModalStatus === true) {
    return (
      <div
        style={
          ModalContainerClass !== "none" ? ModalContainerClass : modalContainer
        }
      >
        <div style={ModalBodyClass !== "none" ? ModalBodyClass : ModalBody}>
          {ModalChildren}
          <button
            style={ModalcloseIcon !== "none" ? ModalcloseIcon : closeIcon}
            onClick={() => setModalStatus(false)}
          >
            X
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
