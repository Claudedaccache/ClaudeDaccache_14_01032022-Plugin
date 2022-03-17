# what is this?

Open and close a modal in ReactJs

# Installation

'npm i @claudedacc/modalcontainer'

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

Modal supports several props that are required:

- _ModalStatus_ - _boolean_ (Default to true) --- Default value of the modal status
- _setModalStatus_ - _boolean_ ( true / false) --- Change the state of the Modal status
- _ModalContainerClass_ - _object_ (default value "none" / {{custom style}}) --- custom your own modalContainer style
- _ModalBodyClass_ - _object_ (default value "none"/ {{custom style}}) --- custom your own ModalBodyClass style
- _ModalcloseIcon_ - _object_ (default value "none" / {{custom style}}) --- custom your own ModalcloseIcon style
