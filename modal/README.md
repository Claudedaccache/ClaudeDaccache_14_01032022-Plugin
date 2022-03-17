# what is this?

Open and close a modal in ReactJs

# Installation

'npm i modal --save'

Then...


```
import ModalContainer from "Modal";

const [ModalStatus, setModalStatus] = useState(true);

    <ModalContainer
        ModalStatus={ModalStatus}
        setModalStatus={setModalStatus}
        ModalContainerClass="none"
        ModalBodyClass="none"
        ModalcloseIcon="none"
      >
        Modal Text / other childrens...
      </ModalContainer>
    </>
```

##Props

Modal supports several props:

* *ModalStatus* - _boolean_ (Default to true) --- Default value of the modal status 
* *setModalStatus* - _boolean_ ( true / false) --- Change the state of the Modal status
* *ModalContainerClass* - _object_ (default value "none") --- custom your own modalContainer style 
* *ModalBodyClass* - _object_ (default value "none") --- custom your own ModalBodyClass style 
* *ModalcloseIcon* - _object_ (default value "none") --- custom your own ModalcloseIcon style 




