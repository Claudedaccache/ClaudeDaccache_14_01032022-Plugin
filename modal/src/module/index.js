import React, { useState } from "react";
import ModalContainer from "../Lib/Container/ModalContainer";

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
export default App;
