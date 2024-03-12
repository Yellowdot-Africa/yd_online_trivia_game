import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../Questions/QuestionsScreen.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Icons/logoicon.svg";

const QuestionPack = () => {
  const [selectedPack, setSelectedPack] = useState(null);

  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="loading-container">
        <div className="question-details-cont">
          <img src={Logo} alt="logo" />
          <p className="question-text">
            Select your <span className="span"> Football </span> Trivia question pack
          </p>
        </div>
        <div className="question-pack">
          <div
            className={`ten-que ${selectedPack === "ten" ? "selected" : ""}`}
            onClick={() => handlePackSelect("ten")}
          >
            <p className="qque">10 Questions</p>
            <p className="naira">NGN50 </p>
          </div>
          <div
            className={`fifteen-que ${
              selectedPack === "fifteen" ? "selected" : ""
            }`}
            onClick={() => handlePackSelect("fifteen")}
          >
            <p className="qque">15 Questions</p>
            <p className="naira">NGN100 </p>
          </div>
          <div
            className={`twenty-que ${
              selectedPack === "twenty" ? "selected" : ""
            }`}
            onClick={() => handlePackSelect("twenty")}
          >
            <p className="qque">20 Questions</p>
            <p className="naira">NGN150 </p>
          </div>
          <div
            className={`twenty-five-que ${
              selectedPack === "twenty-five" ? "selected" : ""
            }`}
            onClick={() => handlePackSelect("twenty-five")}
          >
            <p className="qque">25 Questions</p>
            <p className="naira">NGN200 </p>
          </div>
        </div>
      </div>
      <Link to="/free-play" className="free-play-link">
       Free Play
       </Link>
      {/* {selectedPack && ( */}
                <button
                  onClick={() => navigate("/question-loading")}
                  className="go-button"
                >
                  Begin
                </button>
              {/* // )}  */}
     
    </>
  );
};

export default QuestionPack;
