import { useState, useEffect } from "react";
import FootballIcon from "../../assets/Icons/football-fill.png";
import LogoIcon from "../../assets/Icons/Frame-cup.png";
import { useNavigate , useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../Pages/Questions/QuestionsScreen.css";
import CustomButton from "../../Components/CustomButton";



const QuestionInfo = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { selectedPack } = location.state || {}; 
  const navigate = useNavigate();

  const { categories, selectedCategory } = useSelector((state) => state.categories);

  const category = categories.find((cat) => cat.id === selectedCategory);


  useEffect(() => {
    // console.log(selectedPack); 
  }, [selectedPack]);


  const handleCategorySelect = (id) => {
    setCategoryID(id);
  };



const handleLetGoBtn = () => {
      navigate("/question-screen", {
      state: {
        selectedPack: selectedPack,  
      
      },
    });
    
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
    if (pack?.questionsCount) {
      return `You have ${pack.questionsCount} questions. Are you ready?`;
    }
    return "You have X questions. Are you ready?";
  };

  return (
    <>
      <div className="loading-pack-container">
        <div className="logo-icon-contt">
          <img src={LogoIcon} alt="logo" />
        </div>
        <div className="football-trivia-info">
          {category ? (
            <>
          <p>{category.name}</p>
          <img src={`data:image/png;base64,${category.logo}`} alt={category.name} />
          </>
           ) : (
            <p>No category selected</p>
          )}
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












