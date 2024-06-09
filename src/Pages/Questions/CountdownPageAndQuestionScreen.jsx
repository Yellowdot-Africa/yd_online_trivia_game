import { useState, useEffect } from "react";
import Timer from "../../assets/Icons/timer.svg";
import Pause from "../../assets/Icons/pause.svg";
import Logo from "../../assets/Icons/logoicon.svg";
import FootballIcon from "../../assets/Icons/football-fill.png";
import LogoIcon from "../../assets/Icons/Frame-cup.png";
import { useNavigate } from "react-router-dom";
import "../../Pages/Questions/QuestionsScreen.css";
import Pagination from "../../Components/Pagination";
import axios from "axios";
import CustomButton from "../../Components/CustomButton";
// import Popups from "../Popups";

const CountdownPage = () => {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(countdownInterval);
      navigate("/questions");
    }

    return () => clearInterval(countdownInterval);
  }, [countdown, navigate]);

  return (
    <>
      <div className="loading-pack-container">
        <div className="logo-contt">
          <img src={Logo} alt="logo" />
        </div>
        <div className="countdown-container">
          <h1 className="football-trivia">Your game is starting in</h1>
          <div className="football-countdown-wrapper">
            <p className="football-countdown"> {countdown}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Question = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLetGoBtn = () => {
    navigate("/question-screen");
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

  return (
    <>
      <div className="loading-pack-container">
        <div className="logo-icon-contt">
          <img src={LogoIcon} alt="logo" />
        </div>
        <div className="football-trivia-info">
          <p>Football Trivia</p>
          <img src={FootballIcon} alt="" />
        </div>
        <div className="question_count-container">
          <div className="count-question-cont">
            <p>You have 20 questions. Are you ready?</p>
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

const QuestionScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [balance, setBalance] = useState(0);

  const totalItems = 10;
  const [answersInfo, setAnswersInfo] = useState(Array(totalItems).fill(""));
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();

  const handlePageChange = (index) => {
    setActiveIndex(index);
    setSelectedAnswerIndex(null);
    setCurrentQuestionIndex(index);
    setFeedbackText("");
    setTimer(10);
  };

  const handleAnswerSubmission = async () => {
    if (selectedAnswerIndex !== null) {
      const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;
      const answerOptions = document.querySelectorAll(".answer-option");

      answerOptions.forEach((option, index) => {
        option.classList.remove("selected-answer", "correct", "wrong");

        if (index === selectedAnswerIndex) {
          option.classList.add("selected-answer");
        }

        if (isCorrect && answers[index]?.isCorrectAnswer) {
          option.classList.add("correct");
        }

        if (
          !isCorrect &&
          !answers[index]?.isCorrectAnswer &&
          index === selectedAnswerIndex
        ) {
          option.classList.add("wrong");
        }
      });

      setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

      setTimeout(() => {
        const answerOptions = document.querySelectorAll(".answer-option");

        answerOptions.forEach((option) => {
          option.classList.remove("selected-answer", "correct", "wrong");
        });

        setFeedbackText("");
      }, 1000);

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }
    }

    if (currentQuestionIndex === questions.length - 1) {
      // setTimeout(() => {
      navigate("/result-page", {
        state: {
          correctAnswers,
          wrongAnswers,
          balance,
        },
      });
      // },
      //  1000);
    } else {
      // setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setActiveIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswerIndex(null);
      setTimer(10);
      // },

      // 1000);
    }
  };

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
  };

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const questionsResponse = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?categoryID=1&gameID=1&language=english",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (questionsResponse.data && questionsResponse.data.data !== null) {
        const currentQuestionAnswers =
          questionsResponse.data.data[currentQuestionIndex]?.answers || [];
        setQuestions(questionsResponse.data.data);
        setAnswers(currentQuestionAnswers);
      } else {
        console.warn(
          "Received null data for questions. Setting questions to an empty array."
        );
        setQuestions([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentQuestionIndex]);

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
  }, [timer, handleAnswerSubmission]);

  const currentQuestion =
    questions.length > 0
      ? questions[currentQuestionIndex]?.question
      : "Loading...";

  return (
    <>
      <div className="question">
        <div className="question-screen">
          <div className="timer-container">
            <div className="timer">
              <img src={Timer} alt="timer" />
              <p>{timer}</p>
            </div>
            <p className="quit">Quit</p>
          </div>
          <div className="question-txt">
            <p>What is the name of the fastest footballer alive?</p>
            <Pagination
              totalItems={totalItems}
              activeIndex={activeIndex}
              onChange={handlePageChange}
            />
          </div>
          {/* <div className="answer-container">
            <div className="answer-card">
              <input className="answer-option" type="button" value="Tilewa" />
              <input className="answer-option" type="button" value="You" />
              <input className="answer-option" type="button" value="Usman" />
              <input className="answer-option" type="button" value="Tolu" />
            </div>
          </div> */}


<div className="answer-container">
  <div className="answer-card">
    <input
      className={`answer-option ${
        selectedAnswerIndex === 0 ? "selected-answer" : ""
      }`}
      type="button"
      value="Tilewa"
      onClick={() => handleAnswerClick(0)}
    />
  </div>
  <div className="answer-card">
    <input
      className={`answer-option ${
        selectedAnswerIndex === 1 ? "selected-answer" : ""
      }`}
      type="button"
      value="You"
      onClick={() => handleAnswerClick(1)}
    />
  </div>
  <div className="answer-card">
    <input
      className={`answer-option ${
        selectedAnswerIndex === 2 ? "selected-answer" : ""
      }`}
      type="button"
      value="Usman"
      onClick={() => handleAnswerClick(2)}
    />
  </div>
  <div className="answer-card">
    <input
      className={`answer-option ${
        selectedAnswerIndex === 3 ? "selected-answer" : ""
      }`}
      type="button"
      value="Tolu"
      onClick={() => handleAnswerClick(3)}
    />
  </div>
</div>
        </div>
      </div>





      {/* <div className="question">
        <div className="question-screen">
          <div className="timer-container">
            <div className="timer">
              <img src={Timer} alt="timer" />
              <p>{timer}</p>
            </div>
            <p className="quit">Quit</p>
          </div>
          <main className="main-container">
            {loading ? (
              <p className="loading">Loading...</p>
            ) : (
              <>
                <div className="quest-main-container">
                  {currentQuestion && answers.length > 0 && (
                    <p className="question-txt">{currentQuestion}</p>
                  )}

                  <Pagination
                    totalItems={totalItems}
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
                              selectedAnswerIndex === index
                                ? "selected-answer"
                                : ""
                            }`}
                            onClick={() => handleAnswerClick(index)}
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
        </div>
      </div> */}
      
    </>
  );
};

export { CountdownPage, Question, QuestionScreen };
