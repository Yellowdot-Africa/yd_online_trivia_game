import React from "react";
import CustomButton from "./CustomButton";
import "../../Styles/Share.css";
import ShareIcon from "../../assets/icons/material-symbols_share.svg";
import copy from "../../assets/icons/material-symbols_link.svg";

const ShareModal = ({ handleCloseModal }) => {
  const buttonText = "Social media";
  const ImageSrc = <img src={ShareIcon} alt="share" />;
  const buttonStyle = {
    borderRadius: "23px",
    border: "3px solid #7373D6",
    background: "#FAFAFA",
    color: "#303064",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
  };

  return (
    <div className="modal-container">
      <div className="modal-content-container">
        <div className="modal-text-info">
          <p>Share options</p>
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
        </div>
        <hr />

        <div className="modal-details">
          <CustomButton
            buttonText={buttonText}
            style={buttonStyle}
            ImageSrc={ImageSrc}
          />
          <p className="copy">
            Copy <img src={copy} alt="copy" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
