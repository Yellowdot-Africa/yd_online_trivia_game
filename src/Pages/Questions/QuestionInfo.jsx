import { useState, useEffect } from "react";
import FootballIcon from "../../assets/Icons/football-fill.png";
import LogoIcon from "../../assets/Icons/Frame-cup.png";
import { useNavigate , useLocation } from "react-router-dom";
import "../../Pages/Questions/QuestionsScreen.css";
import CustomButton from "../../Components/CustomButton";



const QuestionInfo = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { selectedPack, selectedCategoryName } = location.state || {}; 
  const navigate = useNavigate();

  const handleCategorySelect = (id) => {
    setCategoryID(id);
  };



const handleLetGoBtn = () => {
    // if (categoryID) {
      navigate("/question-screen");
    // } else {
    //   console.error('Category ID is not provided');
    // }
  };

  const btnText = "Let's go";
  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "AlpinoBlack",
    fontSize: "14px",
    fontWeight: "900",
    padding: "0",
    backgroundColor: inputValue ? "#cac9cc" : "#973CF2",
  };

  const getQuestionCountText = (pack) => {
    switch (pack) {
      case "ten":
        return "You have 5 questions. Are you ready?";
      case "fifteen":
        return "You have 10 questions. Are you ready?";
      case "twenty":
        return "You have 15 questions. Are you ready?";
      case "twenty-five":
        return "You have 20 questions. Are you ready?";
      default:
        return "You have X questions. Are you ready?";
    }
  };

  return (
    <>
      <div className="loading-pack-container">
        <div className="logo-icon-contt">
          <img src={LogoIcon} alt="logo" />
        </div>
        <div className="football-trivia-info">
          {/* <p>Football Trivia</p> */}
          <p>{selectedCategoryName || "Football Trivia"}</p>

          <img src={FootballIcon} alt="" />
        </div>
        <div className="question_count-container">
          <div className="count-question-cont">
          <p>{getQuestionCountText(selectedPack)}</p>

          </div>
        </div>

        <CustomButton
          buttonText={btnText}
          style={buttonStyle}
          onClick={handleLetGoBtn}
          disabled={loading || !inputValue}
        />
      </div>
    </>
  );
};

export default QuestionInfo;


