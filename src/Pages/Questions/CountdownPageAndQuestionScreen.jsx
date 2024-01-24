import { useState, useEffect } from "react";
import Logo from "../../assets/Images/trophy.png";
import { useNavigate } from "react-router-dom";
import "../../Pages/Questions/QuestionsScreen.css";
import Pagination from "../../Components/Pagination";
import axios from "axios";
import HomeNavBar from "../../Components/HomeNavBar";
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
      <div className="loading-container">
        <div className="logo-contt">
          <img src={Logo} alt="logo" />
          <span >YD</span>TRIVIA
        </div>
        <div className="countdown-container">
          <h1 className="football-trivia">Football Trivia</h1>
          <div className="football-countdown-wrapper">
            <p className="football-countdown"> {countdown}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Question = () => {
  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigate("/question-screen");
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="loading-container">
        <div className="logo-contt">
          <img src={Logo} alt="logo" />
          <span>YD</span>TRIVIA
        </div>
        <div className="count-container ">
          <div className="count-question-cont">
            <p>Question 1/20</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;

const QuestionScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackColor, setFeedbackColor] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const initialBalance = 0;

  const [balance, setBalance] = useState(initialBalance);

  const totalItems = 10;

  const handlePageChange = (index) => {
    setActiveIndex(index);
    setSelectedAnswerIndex(null);
    setCurrentQuestionIndex(index);
    setFeedbackText("");

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
          // setCurrentQuestionIndex(0)
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


  const currentQuestion =
    questions.length > 0
      ? questions[currentQuestionIndex]?.question
      : "Loading...";

  const handleAnswerSubmission = async () => {
    if (selectedAnswerIndex !== null) {
      const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

      const answerOptions = document.querySelectorAll(".answer-option");
      answerOptions.forEach((option, index) => {
        if (index === selectedAnswerIndex) {
          option.classList.add(isCorrect ? "correct" : "wrong");
        } else {
          option.classList.remove("correct", "wrong");
        }
      });
      setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");
      setFeedbackColor(isCorrect ? '#21A11E' : '#D12C2C');

      setTimeout(() => {
        const answerOptions = document.querySelectorAll('.answer-option');

        answerOptions.forEach((option) => {
          option.classList.remove("correct", "wrong", "selected-answer");
        });
        setFeedbackText("");
        setFeedbackColor('');

      }, 1000);

const token = sessionStorage.getItem("token");
    const gameId = 1; 
    const questionId = questions[currentQuestionIndex]?.questionID;
    const selectedAnswerID = answers[selectedAnswerIndex]?.answerID;

    try {
      const answersResponse = await axios.post(
        'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/SubmitAnswer',
        {
          gameID: gameId,
          answers: [
            {
              questionID: questionId,
              selectedAnswerID: selectedAnswerID,
            },
          ],
        },
        {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(answersResponse.data);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }





      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }
    }
   

    if (currentQuestionIndex === questions.length - 1) {
      navigate("/result-page", {
        state: {
          correctAnswers,
          wrongAnswers,
          balance,
        },
      });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    }

  return (
    <>

    <div className="question-screen">
      <HomeNavBar />

      <main className="main-container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <div className="quest-main-container">
              {/* {currentQuestion && ( */}
              {currentQuestion && answers.length > 0 && (
                <p className="question-txt"> {currentQuestion}</p>
              )}

              <Pagination
                totalItems={totalItems}
                activeIndex={activeIndex}
                onChange={handlePageChange}
              />
            </div>

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
                    >
                      {answer.answerText}
                    </div>
                  ))}
              </div>
              <p className="ans-que" style={{ color: feedbackColor }} onClick={handleAnswerSubmission}>
                {feedbackText || "What's your answer?"}

              </p>
            </div>
          </>
        )}
      </main>
    </div>
    </>

  );
};

export { CountdownPage, Question, QuestionScreen };


