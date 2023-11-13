import React, { useState, useEffect, memo} from "react";
import "../../Styles/CountDown1.css";
import sadMask from "../../assets/icons/mask-sad-fill.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useLocation } from "react-router-dom";
import QuestionScreen from "./QuestionBank/QuestionScreen";
import axios from "axios";
import Popups from "../Popups";

const CountDown1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [countdown, setCountdown] = useState(10);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [noOfCorrect, setNoOfCorrect] = useState(0);
  const [noOfWrong, setNoOfWrong] = useState(0);
  const [isAnswerDisabled, setIsAnswerDisabled] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [showInsufficientFundsPopup, setShowInsufficientFundsPopup] =
    useState(false);
  const [insufficientFundsMessage, setInsufficientFundsMessage] = useState("");

  const navigate = useNavigate();
  // const category = location?.state?.category;

  const location = useLocation();
  const { state } = location;
  const { correctAnswers, wrongAnswers, gemsEarned, category } = state || {};
  

  const token = sessionStorage.getItem("token");
// console.log("token", token)
  console.log("gameInfo", category);

  // console.log(category);

  const startCountdown = React.useCallback(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  },[countdown]);

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setIsAnswerDisabled(false);

    const currentQuestion = questions[currentQuestionIndex];
    const isCurrentQuestionUnanswered =
      !isQuestionAttempted(currentQuestionIndex);

    if (isCurrentQuestionUnanswered) {
      setSelectedAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          questionIndex: currentQuestionIndex,
          answerText: "Unanswered",
          isAnswerCorrect: false,
        },
      ]);

      setNoOfWrong((prevWrong) => prevWrong + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCountdown(10);
    } else {
      submitAnswersToApi(selectedAnswers);
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      handleNextQuestion();
    }
  }, []);

  useEffect(() => {
    if (countdown === 0 && !isAnswerDisabled) {
      handleNextQuestion();
    }
  }, [countdown, isAnswerDisabled]);

  useEffect(() => {
    if (countdown > 0 && !isAnswerDisabled) {
      const countdownTimer = setInterval(startCountdown, 1000);

      return () => {
        clearInterval(countdownTimer);
      };
    }
  }, [countdown, currentQuestionIndex, isAnswerDisabled]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const categoryId = 1;
        const response = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?categoryID=1&gameID=1&language=english`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const allQuestions = response.data.data;

        setQuestions(allQuestions);
        setCountdown(allQuestions.length);
        setLoadingQuestions(false);
      } catch (error) {
        console.error("API Error:", error);
        setQuestions([]);
        setLoadingQuestions(false);
      }
    };

    fetchQuestions();
  }, [token]);

  const handleAnswerSelect = (answerText, isAnswerCorrect) => {
    if (isAnswerDisabled) return;
    setIsAnswerDisabled(true);

    setSelectedAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionIndex: currentQuestionIndex, answerText, isAnswerCorrect },
    ]);

    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setNoOfCorrect((prevCorrect) => prevCorrect + 1);
    } else {
      setNoOfWrong((prevWrong) => prevWrong + 1);
    }
    const countdownDelay = countdown * 1000;
    setTimeout(() => {
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        handleNextQuestion();
      }, 800);
    }, countdownDelay);
  };

  const isQuestionAttempted = (questionIndex) => {
    return selectedAnswers.some(
      (answer) => answer.questionIndex === questionIndex
    );
  };

  const submitAnswersToApi = async (answers) => {
    try {
      const answersToSend = answers
        .filter((answer) => answer.answerText !== "Unanswered")
        .map((selectedAnswer) => ({
          questionID: questions[selectedAnswer.questionIndex].id,
          selectedAnswerID: 0,
        }));

      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/SubmitAnswer",
        {
          gameID: 1,
          answers: answersToSend,
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/gamecomplete", {
        state: {
          correctAnswers: noOfCorrect,
          wrongAnswers: noOfWrong + (questions.length - selectedAnswers.length),
          gemsEarned: 0,
          category,
        },
      });
    } catch (error) {
      console.error("Error submitting answers:", error);
      if (error.response.status === 400) {
        setInsufficientFundsMessage(
          error.response.data.message ||
            "Insufficient Wallet Balance. Please top up your wallet to continue."
        );
        setShowInsufficientFundsPopup(true);
      } else if (error.response.status === 400) {
        setInsufficientFundsMessage("Bad request. Please check your input.");
        setShowInsufficientFundsPopup(true);
      }
    }
  };

  const closeInsufficientFundsPopup = () => {
    setShowInsufficientFundsPopup(false);
  };

  return (
    <div className="container" data-aos="zoom-in">
      <div className="">
        <div className="countdown-container" id="countdown-nine">
          <div className="countdown-nine">
            {showFeedback ? (
              isCorrect ? (
                <img src={sadMask} alt="Correct" />
              ) : (
                <img src={sadMask} alt="Wrong" />
              )
            ) : loadingQuestions ? null : (
              <p>{countdown}</p>
            )}
          </div>
        </div>
        <div className="text-contn">
          {questions.length > 0 ? (
            currentQuestionIndex < questions.length ? (
              <QuestionScreen
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
                isCorrect={isCorrect}
                showFeedback={showFeedback}
                isAnswerDisabled={isAnswerDisabled}
                selectedAnswer={selectedAnswers}
              />
            ) : (
              <p>No questions available.</p>
            )
          ) : loadingQuestions ? (
            <p>Loading questions...</p>
          ) : null}
        </div>
      </div>
      {showInsufficientFundsPopup && (
        <Popups
          message={insufficientFundsMessage}
          onClose={closeInsufficientFundsPopup}
        />
      )}
    </div>
  );
};

export default CountDown1;
