import React, { useState, useEffect } from "react";
import "../../Pages/GettingStarted/GettingStarted.css";
import TrophyCup from "../../assets/Icons/TrophyCup.png";
import CustomButton from "../../Components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../features/questions/questionSlice";

const GettingStarted = () => {

  const dispatch = useDispatch();
  const { categories, selectedCategory, selectedGames, games } = useSelector(
    (state) => state.categories
  );


  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const category = categories.find((cat) => cat.id === selectedCategory);

  const { gameID } = useSelector((state) => state.game);


  useEffect(() => {
    if (selectedCategory && selectedGames) {
      dispatch(fetchQuestions());
    }
  }, [selectedCategory, selectedGames, dispatch]);



  const btnText = "Begin";
  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "AlpinoMedium",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
    width: "222px",
    backgroundColor: inputValue ? "#973CF266" : "#973CF2",
  };

  const handleQuestionPack = () => {
    navigate("/question-pack");
  };


  return (
    <>
      <div className="getting-started-container">
        <div className="trophy-img">
          <img src={TrophyCup} alt="trophy" />
        </div>
        <h4 className="challenge">The Challenge!</h4>

        {category ? (
          <div key={category.id} className="category">
            <p className="game-inffo">{category.description}</p>
          </div>
        ) : (
          <p className="game-inffo">No category selected</p>
        )}
        <CustomButton
          buttonText={btnText}
          style={buttonStyle}
          onClick={handleQuestionPack}
          disabled={loading || !inputValue}
        />
      </div>
    </>
  );
};

export default GettingStarted;


