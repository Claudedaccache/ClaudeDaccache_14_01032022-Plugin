import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalContainer from "../src/Lib/Container/ModalContainer";



function App() {
  const [ModalStatus, setModalStatus] = useState(true);

  return (
    <>
      <ModalContainer
        ModalStatus={ModalStatus}
        setModalStatus={setModalStatus}
        ModalContainerClass="none"
        ModalBodyClass="none"
        ModalcloseIcon="none"
      >
        Modal Text
      </ModalContainer>
    </>
  );
}


ReactDOM.render(

<div><App /> </div>, document.getElementById("root"));