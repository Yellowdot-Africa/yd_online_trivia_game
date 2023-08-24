import React from "react";
import Gem from "../../assets/icons/gem.svg";
import "../../Styles/TopHeader.css";
import ShareModal from "./ShareModal";


const TopHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <a className="share" href="#" onClick={handleShareClick}>Share</a>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
    {isModalOpen && <ShareModal onClose={handleCloseModal} />}

    </>
  );
};

export default TopHeader;
