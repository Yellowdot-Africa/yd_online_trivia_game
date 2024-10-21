import React, { useState, useEffect } from "react";
import "../Questions/QuestionsScreen.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Icons/logoicon.svg";
import CustomButton from "../../Components/CustomButton";
import Prev from "../../assets/Icons/chevron-left.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserQuestions } from "../../features/questions/questionSlice";
import { fetchQuestionPacksByCategory } from "../../API/questionPackApi";
import { updateBalance } from "../../features/wallet/walletSlice";
import { Circles } from "react-loader-spinner";
import PopUpModal from "../../Components/PopUpModal";


const QuestionPack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [questionPacks, setQuestionPacks] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [debited, setDebited] = useState(false);

  const token = useSelector((state) => state.auth.jwt);


  const [walletError, setWalletError] = useState(null);
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  console.log("Wallet Balance:", walletBalance);

  const { categories, selectedCategory, selectedGame, selectedLanguage } = useSelector(
    (state) => state.categories
  );
  // const { questions } = useSelector((state) => state.questions);
  // const [inputValue, setInputValue] = useState("");
  const category = categories.find((cat) => cat.id === selectedCategory);

  useEffect(() => {
    const loadQuestionPacks = async () => {
      setLoading(true);
      try {
        const packs = await fetchQuestionPacksByCategory(
          selectedCategory,
          token
        );
        setQuestionPacks(packs.data);
      } catch (error) {
        setError("No Questions Available.");
      } finally {
        setLoading(false);
      }
    };
    if (selectedCategory && token) {
      loadQuestionPacks();
    }
  }, [selectedCategory, token]);

  useEffect(() => {
    const savedPack = localStorage.getItem("selectedPack");
    if (savedPack) {
      setSelectedPack(JSON.parse(savedPack));
    }
  }, []);

  // useEffect(() => {
  //   if (selectedCategory && selectedPack && selectedGame) {
  //     setLoading(true);
  //     const packId = parseInt(selectedPack.questionPackId, 10);

  //     dispatch(
  //       fetchUserQuestions({
  //         userQuestionsRequest: {
  //           categoryID: selectedCategory,
  //           packId,
  //           gameId: selectedGame,
  //           language: selectedLanguage,
  //           token,
  //         },
  //       })
  //     ).finally(() => setLoading(false));

  //   }
  // }, [dispatch, selectedCategory, selectedPack, selectedGame, selectedLanguage, token]);

  const handlePackSelect = (pack) => {
    if (walletBalance < pack.amount) {
      setSelectedPack(pack);
      setShowModal(true);
      return;
    }

    localStorage.setItem("selectedPack", JSON.stringify(pack));
    setSelectedPack(pack);
    console.log("Selected Pack:", pack);
  };

  const handleGoBack = () => {
    navigate(-1);
  };



  const handleBegin = async () => {
    if (selectedPack) {
     
      navigate("/question-loading", {
        state: {
          selectedPack,
          selectedCategory,
         
        },
      });
    }
  };
  const isBalanceSufficient = (amount) => {
    return walletBalance >= amount;
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
    marginTop: "130px",
    // backgroundColor: inputValue ? "#cac9cc" : "#973CF2",
    backgroundColor: selectedPack ? "#973CF2" : "#cac9cc",
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const goToAccount = () => {
    navigate("/account");
  };

  return (
    <>
      <div className="loading-pack-container">
        <div className="question-details-cont">
          <div className="back-logo-cont">
            <img
              className="back"
              src={Prev}
              alt="prev"
              onClick={handleGoBack}
            />
            <img className="pack-logo" src={Logo} alt="logo" />
          </div>

          <p className="question-text">
            Select your <span className="span"> {category?.name} </span> Trivia question
            pack
          </p>
        </div>
        <div className="question-pack">
          {loading && <Circles color="#D9D9D9" height={30} width={30} />}
          {error && <p>{error}</p>}
          {walletError && <p className="error-message">{walletError}</p>}

          {!loading &&
            !error &&
            questionPacks.map((pack) => (
              <div
                key={pack.questionPackId}
                className={`ten-que ${
                  selectedPack?.questionPackId === pack.questionPackId
                    ? "selected"
                    : !isBalanceSufficient(pack.amount)
                    ? "insufficient-balance"
                    : ""
                }`}
                onClick={() => handlePackSelect(pack)}
              >
                <p className="qque">{pack.questionsCount} Questions</p>
                <p className="naira">N{pack.amount}</p>
              </div>
            ))}
        </div>
      </div>
      <CustomButton
        buttonText={btnText}
        style={buttonStyle}
        onClick={handleBegin}
        disabled={loading || !selectedPack}
      />

      {showModal && (
        <PopUpModal
          message={`You need N${selectedPack?.amount} to access this question pack. Please fund your wallet.`}
          onClose={closeModal}
          onConfirm={goToAccount}
        />
      )}
    </>
  );
};

export default QuestionPack;




