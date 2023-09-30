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

  const [countdown, setCountdown] = useState(9);
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
    } else {
      setShowFeedback(false);
      setIsAnswerDisabled(false);

      if (currentQuestionIndex < questions.length - 1) {
        console.log("Incrementing currentQuestionIndex");

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCountdown(10); 
      } else {
        submitAnswersToApi(selectedAnswers);
      }
    }
  };

 

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
        console.log("Received questions:", allQuestions);

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
    console.log("isAnswerCorrect", isAnswerCorrect);
    // if (isAnswerCorrect) {
    //   setNoOfCorrect((e) => e + 1);
    // } else {
    //   setNoOfWrong((e) => e + 1);
    // }

    if (isAnswerCorrect) {
      setNoOfCorrect((prevCorrect) => prevCorrect + 1);
    } else {
      setNoOfWrong((prevWrong) => prevWrong + 1);
    }
    
    setShowFeedback(true);
    setCountdown(0);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        console.log("Current Question Index:", currentQuestionIndex);
        console.log("Rendering Question ID:", questions[currentQuestionIndex]?.id);

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCountdown(9);
      } else {
        submitAnswersToApi(selectedAnswers);

      }

      setShowFeedback(false);
      setIsAnswerDisabled(false);
    }, 800);

    // if (isAnswerCorrect) {
    //   setNoOfCorrect(noOfCorrect + 1);
    // } else {
    //   setNoOfWrong(noOfWrong + 1);
    // }
  };
  // console.log("NoOfCorr", noOfCorrect, "NoOfWro", noOfWrong);

  const submitAnswersToApi = async (answers) => {
    try {
      const answersToSend = answers.map((selectedAnswer) => ({
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

      console.log("API response:", response.data);
      console.log("API Response for Questions:", response.data);

      navigate("/gamecomplete", {
        state: {
          correctAnswers: noOfCorrect,
          wrongAnswers: noOfWrong,
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
        <div className="countdown-container">
          <div className="countdown-nine">
            {showFeedback ? (
              isCorrect ? (
                <img src={sadMask} alt="Correct" />
              ) : (
                <img src={sadMask} alt="Wrong" />
              )
            ) : (
              <p style={{ borderColor: "purple" }}>{countdown}</p>
            )}
          </div>
        </div>
        <div className="text-contn">
          {questions.length > 0 ? (currentQuestionIndex < questions.length ? (
            <QuestionScreen
              question={questions[currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
              isCorrect={isCorrect}
              showFeedback={showFeedback}
              isAnswerDisabled={isAnswerDisabled}
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

