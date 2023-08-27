// import React from "react";
// import ShareIcon from "../../assets/icons/material-symbols_share.svg";
// import "../../Styles/Share.css";
// import Copy from "../../assets/icons/material-symbols_link.svg";

// const ShareModal =({onClose})=> {

//   const buttonText = "Social media";
//   const buttonStyle = {
//     borderRadius: "23px",
//     border: "3px solid #7373D6",
//     background: "#FAFAFA",
//   };

//   return (
//     <>
//       <div className="share-modal">
//         <div>
//           <p>Share options</p> <hr />
//         </div>

//         <div className="button-cont">
//           <CustomButton buttonText={buttonText} style={buttonStyle} ImageSrc={ShareIcon} />
//         </div>
//         <p>Copy <img src={Copy} alt="copy" /></p>
//         <button onClick={onClose}>Close</button>

//       </div>
//     </>
//   );
// }

// export default ShareModal;

// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import ShareIcon from "../../assets/icons/material-symbols_share.svg";
// import copy from "../../assets/icons/material-symbols_link.svg";
// import CustomButton from "./CustomButton";

// const ShareModal = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const buttonText = "Social media";

//   const buttonStyle = {
//     borderRadius: "23px",
//     border: "3px solid #7373D6",
//     background: "#FAFAFA",
//   };
//   return (
//     <>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Share options</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {" "}
//           <CustomButton
//             buttonText={buttonText}
//             style={buttonStyle}
//             ImageSrc={ShareIcon}
//           />
//           <p>
//             Copy link <img src={copy} alt="copy" />
//           </p>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default ShareModal;

import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import CustomButton from "./CustomButton";
import "../../Styles/Share.css";
import ShareIcon from "../../assets/icons/material-symbols_share.svg";
import copy from "../../assets/icons/material-symbols_link.svg";

function Example() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const buttonText = "Social media";

  const buttonStyle = {
    borderRadius: "23px",
    border: "3px solid #7373D6",
    background: "#FAFAFA",
    color: "#303064",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    padding:"0",
  };

  const ImageSrc =
    "<img src={ShareIcon}  />"
  

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>s</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">
            Share options <hr />
          </Popover.Header>
          <Popover.Body>
            <CustomButton
              buttonText={buttonText}
              style={buttonStyle}
              ImageSrc={ShareIcon}
             
            />
            <p className="copy">
              Copy link <img src={copy} alt="copy" />
            </p>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default Example;
