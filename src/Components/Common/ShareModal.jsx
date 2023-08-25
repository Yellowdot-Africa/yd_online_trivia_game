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

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ShareIcon from "../../assets/icons/material-symbols_share.svg";
import copy from "../../assets/icons/material-symbols_link.svg";
import CustomButton from "./CustomButton";

const ShareModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonText = "Social media";

  const buttonStyle = {
    borderRadius: "23px",
    border: "3px solid #7373D6",
    background: "#FAFAFA",
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <CustomButton
            buttonText={buttonText}
            style={buttonStyle}
            ImageSrc={ShareIcon}
          />
          <p>
            Copy link <img src={copy} alt="copy" />
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
