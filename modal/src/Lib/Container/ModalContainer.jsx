import React from "react";
import Modal from "../Components/Modal/Modal";


function ModalContainer(props) {
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
