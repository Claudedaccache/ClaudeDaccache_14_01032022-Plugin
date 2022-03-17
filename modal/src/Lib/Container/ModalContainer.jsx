import React from "react";
import { useState } from "react";
import Modal from "../Components/Modal/Modal";


function ModalContainer(props) {
  // const [ModalStatus, setModalStatus] = useState(true);
 return (
    <>
      <Modal
            ModalStatus={props.ModalStatus}
            setModalStatus={props.setModalStatus}
            ModalContainerClass = {props.ModalContainerClass}
            ModalBodyClass ={props.ModalBodyClass}
            ModalcloseIcon ={props.ModalcloseIcon}
            ModalChildren = {props.children}>
      {props.children}
      </Modal>
    </>
  );
}


export default ModalContainer;
