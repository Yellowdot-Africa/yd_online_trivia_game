


import React, { useState } from "react";
import "../Questions/QuestionsScreen.css";
import { useNavigate } from "react-router-dom";

const QuestionPack = () => {
  const [selectedPack, setSelectedPack] = useState(null);

  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
  };

  const navigate = useNavigate();
  return (
    <>
    <div className="que-pack-cont">
      <div className="question-container">
        <div className="question-card">
          <p className="question-text">
            Select your <span className="spann"> Football</span> Trivia question pack
          </p>
          <div className="question-pack">
            <div
              className={`ten-que ${selectedPack === "ten" ? "selected" : ""}`}
              onClick={() => handlePackSelect("ten")}
            >
              <p className="qque">10 Questions</p>
              <p className="naira">50 Naira</p>
            </div>
            <div
              className={`fifteen-que ${selectedPack === "fifteen" ? "selected" : ""}`}
              onClick={() => handlePackSelect("fifteen")}
            >
              <p className="qque">15 Questions</p>
              <p className="naira">100 Naira</p>
            </div>
            <div
              className={`twenty-que ${selectedPack === "twenty" ? "selected" : ""}`}
              onClick={() => handlePackSelect("twenty")}
            >
              <p className="qque">20 Questions</p>
              <p className="naira">150 Naira</p>
            </div>
            <div
              className={`twenty-five-que ${selectedPack === "twenty-five" ? "selected" : ""}`}
              onClick={() => handlePackSelect("twenty-five")}
            >
              <p className="qque">25 Questions</p>
              <p className="naira">200 Naira</p>
            </div>
          </div>
          {selectedPack && (
            <button onClick={() => navigate("/question-loading")} className="go-button">
              Go!
            </button>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default QuestionPack;


