import React, { useState, useEffect} from "react";
import "../Questions/QuestionsScreen.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Icons/logoicon.svg";
import CustomButton from "../../Components/CustomButton";
import Prev from '../../assets/Icons/chevron-left.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../features/questions/questionSlice';



const QuestionPack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);
  const [loading, setLoading] = useState(false);
  const { selectedCategory, selectedGame, selectedLanguage } = useSelector(
    (state) => state.categories
  );
  const { questions, error } = useSelector((state) => state.questions);
  const [inputValue, setInputValue] = useState("");
  // const [balance, setBalance] = useState(0);
  const balance = useSelector((state) => state.wallet.balance); 

 

  useEffect(() => {
    if (selectedCategory && selectedGame) {
      setLoading(true);

      dispatch(
        fetchQuestions({
          categoryID: selectedCategory,
          gameID: selectedGame,
          language: selectedLanguage,
        })
      ).finally(() => setLoading(false));
    }
  }, [dispatch, selectedCategory, selectedGame, selectedLanguage]);


  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
  };

  const handleGoBack = () => {
 navigate(-1);
  };

  const handleBegin = () => {
    if (selectedPack) {
      // navigate("/question-loading");
      navigate("/question-loading", { 
        state: {
          selectedPack: selectedPack,
          selectedCategory: selectedCategory, 
        },
        // state: 
        // { selectedPack } 
      });

    }
  };

  const btnText = "Begin";
  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "AlpinoMedium",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
    width: "100%",
    marginTop: "245px",
    // backgroundColor: inputValue ? "#cac9cc" : "#973CF2",
    backgroundColor: selectedPack ? "#973CF2" : "#cac9cc", 

  };

  // const isBalanceSufficient = (pack) => {
  //   if (pack === "ten") {
  //     return balance >= 1;
  //   } else if (pack === "fifteen") {
  //     return balance >= 2;
  //   } else if (pack === "twenty") {
  //     return balance >= 4;
  //   } else if (pack === "twenty-five") {
  //     return balance >= 10;
  //   }
  //   return false;
  // };

  const isBalanceSufficient = (pack) => {
    switch (pack) {
      case "ten": return balance >= 1;
      case "fifteen": return balance >= 2;
      case "twenty": return balance >= 4;
      case "twenty-five": return balance >= 10;
      default: return false;
    }
  };



  return (
    <>
      <div className="loading-pack-container">
     
        <div className="question-details-cont">
        <div className="back-logo-cont">
        <img className="back" src={Prev} alt="prev" onClick={handleGoBack} />
        <img className="pack-logo" src={Logo} alt="logo" />

          </div>

          <p className="question-text">
            Select your <span className="span"> Football </span> Trivia question
            pack
          </p>
        </div>
        <div className="question-pack">
          <div
            className={`ten-que ${
              selectedPack === "ten"
                ? "selected"
                : isBalanceSufficient("ten")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("ten")}
          >
            <p className="qque">2 Questions</p>
            <p className="naira">N50  </p>
          </div>
          <div
            className={`fifteen-que ${
              selectedPack === "fifteen"
                ? "selected"
                : isBalanceSufficient("fifteen")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("fifteen")}
          >
            <p className="qque">5 Questions</p>
            <p className="naira">N100 </p>
          </div>
          <div
            className={`twenty-que ${
              selectedPack === "twenty"
                ? "selected"
                : isBalanceSufficient("twenty")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("twenty")}
          >
            <p className="qque">10 Questions</p>
            <p className="naira">N200  </p>
          </div>
          <div
            className={`twenty-five-que ${
              selectedPack === "twenty-five"
                ? "selected"
                : isBalanceSufficient("twenty-five")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("twenty-five")}
          >
            <p className="qque">20 Questions</p>
            <p className="naira">N500  </p>
          </div>
        </div>
      </div>
      {/* {selectedPack && ( */}
      <CustomButton
        buttonText={btnText}
        style={buttonStyle}
        onClick={handleBegin}

        // onClick={() => navigate("/question-loading")}
        // disabled={loading || !inputValue}
        disabled={loading || !selectedPack}

      />
      {/* // )} */}
    </>
  );
};

export default QuestionPack;
