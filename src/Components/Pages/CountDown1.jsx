import React, { useState, useEffect } from "react";
import "../../Styles/CountDown1.css";
import sadMask from "../../assets/icons/mask-sad-fill.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import QuestionScreen from "./QuestionBank/QuestionScreen";
import axios from "axios";

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

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const startCountdown = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  };

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
        // console.log("Received questions:", allQuestions);

        setQuestions(allQuestions);
        setCountdown(allQuestions.length);
      } catch (error) {
        console.error("API Error:", error);
        setQuestions([]);
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

      // console.log("API response:", response.data);
      // console.log("API Response for Questions:", response.data);

      navigate("/gamecomplete", {
        state: {
          correctAnswers: noOfCorrect,
          wrongAnswers: noOfWrong + (questions.length - selectedAnswers.length),
          gemsEarned: 0,
        },
      });
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
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
            ) : (
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
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountDown1;
