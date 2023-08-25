import { React, useState } from "react";
import Gem from "../../assets/icons/gem.svg";
import "../../Styles/TopHeader.css";
import ShareModal from "./ShareModal";
// import { Link } from "react-router-dom";

const TopHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        <div className=" container-head">
          {/* <div className="top-header-container "> */}
          <div className="top-header">
            <div className="">
              <p className="amount">N1000.00</p>
            </div>
            <span className="d-flex justify-content-center align-items-center">
              <img className="imgs p-2" src={Gem} alt="gem-img" />0
            </span>
            <div className="share-cont p-2">
              {/* <Link to="/ShareModal" className="share" href="#" >Share</Link> */}
              <p className="share" onClick={handleShowModal}>
                Share
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
      {showModal && <ShareModal onClose={handleCloseModal} />}
    </>
  );
};

export default TopHeader;
