import React, { useState } from "react";
import CustomButton from "./CustomButton";
import "../../Styles/Share.css";
import ShareSocialButtons from "./ShareSocialButtons";
import ShareIcon from "../../assets/icons/material-symbols_share.svg";
import copy from "../../assets/icons/material-symbols_link.svg";

const ShareModal = ({ handleCloseModal }) => {
  const [copied, setCopied] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);

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

  const copyLinkToClipboard = () => {
    const linkToCopy = "http//www.ydot-trivia.com";
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard: ", error);
      });
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
            buttonText={"Social media"}
            style={buttonStyle}
            ImageSrc={ImageSrc}
            onClick={() => setShowShareButtons(!showShareButtons)}

          />

          {showShareButtons && (
            <div>
              <ShareSocialButtons />
            </div>
          )}

          <div className="copy">
            {copied ? (
              <p className="copy">Link Copied!</p>
            ) : (
              <p className="copy" onClick={copyLinkToClipboard}>
                Copy Link <img src={copy} alt="copy" />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
