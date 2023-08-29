import { React, useState } from "react";
import Gem from "../../assets/icons/gem.svg";
import "../../Styles/TopHeader.css";
import ShareModal from "../Common/ShareModal";
import HistoryModal from "../../Components/Common/HistoryModal";

const TopHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className=" container-head">
          <div className="top-header">
            <div className="">
              <p className="amount" onClick={openModal}>
                N1000.00
              </p>
              {isModalOpen && <HistoryModal closeModal={closeModal} />}
            </div>
            <span className="d-flex justify-content-center align-items-center">
              <img className="imgs p-2" src={Gem} alt="gem-img" />0
            </span>
            <div className="share-cont p-2">
              <p className="share" onClick={handleShowModal}>
                Share
              </p>
              {showModal && <ShareModal handleCloseModal={handleCloseModal} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
