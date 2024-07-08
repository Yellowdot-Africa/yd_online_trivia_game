import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, setCurrentQuestionIndex } from '../../features/questions/questionSlice';
import Pagination from "../../Components/Pagination";
import Timer from "../../assets/Icons/timer.svg";
import { useNavigate } from 'react-router-dom';
import EndGameModal from '../../Components/EndGameModal';
import "../../Pages/Questions/QuestionsScreen.css";
import { Circles } from 'react-loader-spinner'; 


const QuestionScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    questions,
    answers,
    currentQuestionIndex,
    loading,
  } = useSelector((state) => state.questions);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(10);
  const [screenBgColor, setScreenBgColor] = useState("#580DA4");
  const [answerBgColors, setAnswerBgColors] = useState([]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          handleAnswerSubmission();
          return 10;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  const handlePageChange = (index) => {
    setActiveIndex(index);
    setSelectedAnswerIndex(null);
    dispatch(setCurrentQuestionIndex(index));
    setFeedbackText("");
    setTimer(10);
    setScreenBgColor("#580DA4");
    setAnswerBgColors([]);
  };

  const handleAnswerSubmission = () => {
    if (selectedAnswerIndex !== null) {
      const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

      const newAnswerBgColors = answers.map((answer, index) => {
        if (index === selectedAnswerIndex) {
          return isCorrect ? "#5CBE5A" : "#E37F80";
        }
        return answer.isCorrectAnswer ? "#5CBE5A" : "";
      });

      setAnswerBgColors(newAnswerBgColors);
      setScreenBgColor("#0D89A4");
      setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

      setTimeout(() => {
        if (currentQuestionIndex === questions.length - 1) {
          setShowModal(true);
        } else {
          dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
          setActiveIndex((prevIndex) => prevIndex + 1);
          setSelectedAnswerIndex(null);
          setTimer(10);
          setScreenBgColor("#580DA4");
          setAnswerBgColors([]);
          setFeedbackText("");
        }
      }, 2000); 

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }
    }
  };

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    setScreenBgColor("#0D37A4");
    const newAnswerBgColors = answers.map((_, i) => (i === index ? "#973CF2" : ""));
    setAnswerBgColors(newAnswerBgColors);
  };

  const handleEndGame = () => {
    navigate("/result-page", {
      state: {
        correctAnswers,
        wrongAnswers,
      },
    });
  };

  const currentQuestion =
    questions.length > 0
      ? questions[currentQuestionIndex]?.question
      : "Loading...";

  return (

    <div className={`question-screen ${showModal ? 'modal-active' : ''}`} style={{ backgroundColor: screenBgColor }}>

      <div className="timer-container">
        <div className="timer">
          <img src={Timer} alt="timer" />
          <p>{timer}</p>
        </div>
        <p className="quit">Quit</p>
      </div>
      <main className="main-container">
        {loading ? (
          <Circles color="#D9D9D9" height={20} width={20} />

        ) : (
          <>
            <div className="quest-main-container">
              {currentQuestion && answers.length > 0 && (
                <p className="question-txt">{currentQuestion}</p>
              )}

              <Pagination
                totalItems={questions.length}
                activeIndex={activeIndex}
                onChange={handlePageChange}
              />
              <div className="answer-container">
                <div className="answer-card">
                  {answers &&
                    answers.map((answer, index) => (
                      <div
                        key={index}
                        className={`answer-option ${
                          selectedAnswerIndex === index ? "selected-answer" : ""
                        }`}
                        onClick={() => handleAnswerClick(index)}
                        style={{ backgroundColor: answerBgColors[index] || '' }}
                      >
                        {answer.answerText}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <EndGameModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onEnd={handleEndGame} 
      />
    </div>
  );
};

export default QuestionScreen;



