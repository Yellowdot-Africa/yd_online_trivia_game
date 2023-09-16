import React, { useState, useEffect } from "react";
import "../../Styles/CountDown1.css";
import sadMask from "../../assets/icons/mask-sad-fill.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QuestionScreen1 from "./QuestionBank/QuestionScreen1";
import QuestionScreen2 from "./QuestionBank/QuestionScreen2";
import QuestionScreen3 from "./QuestionBank/QuestionScreen3";
import QuestionScreen4 from "./QuestionBank/QuestionScreen4";
import QuestionScreen5 from "./QuestionBank/QuestionScreen5";
import QuestionScreen6 from "./QuestionBank/QuestionScreen6";
import QuestionScreen7 from "./QuestionBank/QuestionScreen7";
import QuestionScreen8 from "./QuestionBank/QuestionScreen8";
import QuestionScreen9 from "./QuestionBank/QuestionScreen9";
import QuestionScreen10 from "./QuestionBank/QuestionScreen10";

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
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  console.log("token", token);

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
        console.log("All Questions:", allQuestions);
      } catch (error) {
        console.error("API Error:", error);
        setQuestions([]);
      }
    };

    fetchQuestions();
  }, [token]);

  const handleAnswerSelect = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrectAnswer = answer === currentQuestion.correctAnswer;

    setIsCorrect(isCorrectAnswer);
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate("/gamecomplete");
      }

      setShowFeedback(false);
    }, 2000);
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
              <p>{countdown}</p>
            )}
          </div>
        </div>
        <div className="text-contn">
          {currentQuestionIndex < questions.length ? (
            currentQuestionIndex === 0 ? (
              <QuestionScreen1
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
                isCorrect={isCorrect}
                showFeedback={showFeedback}
              />
            ) : currentQuestionIndex === 1 ? (
              <QuestionScreen2
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
                isCorrect={isCorrect}
                showFeedback={showFeedback}
              />
            ) : currentQuestionIndex === 2 ? (
              <QuestionScreen3
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 3 ? (
              <QuestionScreen4
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 4 ? (
              <QuestionScreen5
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 5 ? (
              <QuestionScreen6
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 6 ? (
              <QuestionScreen7
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 7 ? (
              <QuestionScreen8
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 8 ? (
              <QuestionScreen9
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : currentQuestionIndex === 9 ? (
              <QuestionScreen10
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            ) : (
              <p>No questions available.</p>
            )
          ) : (
            <p>No questions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountDown1;
