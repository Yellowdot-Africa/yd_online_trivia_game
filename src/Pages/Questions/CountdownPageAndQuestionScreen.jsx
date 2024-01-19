import { useState, useEffect } from "react";
import Logo from "../../assets/Images/trophy.png";
import "../../Pages/Questions/QuestionsScreen.css";

import { useNavigate, useLocation } from "react-router-dom";
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
          <span>YD</span>TRIVIA
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



  useEffect(() => {
const fetchData = async ()=>{
 try{
  const token = sessionStorage.getItem("token");
  const questionsResponse= await axios.get(
    'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?categoryID=1&gameID=1&language=english',
    {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    
    );
    if (questionsResponse.data && questionsResponse.data.data !== null) {

    const currentQuestionAnswers =
        questionsResponse.data.data[currentQuestionIndex]?.answers || [];
          setQuestions(questionsResponse.data.data);

        setAnswers(currentQuestionAnswers);
      setCurrentQuestionIndex(0)
  } else {
    console.warn('Received null data for questions. Setting questions to an empty array.');
    setQuestions([]);
  }
    const gameId = 1;
    const questionId = 1;
    const answersResponse = await axios.post(
      'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/SubmitAnswer',
      {
        gameID: gameId,
        answers: [
          {
            questionID: questionId,
            selectedAnswerID: 0,
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
    if (answersResponse.data && answersResponse.data.data !== null) {
      const currentQuestionAnswers =
      questionsResponse.data.data[currentQuestionIndex]?.answers || [];

    setAnswers(currentQuestionAnswers);
  } else {
    console.warn('Received null data for answers. Setting answers to an empty array.');
    setAnswers([]);

  }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
}, [currentQuestionIndex]);

const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex]?.question : 'Loading...';


  return (
    <div className="question-screen">
      <HomeNavBar/>
     

      <main className="main-container">
        <div className="quest-main-container">
        {currentQuestion && (

          <p className="question-txt"> {currentQuestion}</p>
          )}
          {/* <div className="pagination">
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
          </div> */}
        </div>

        <div className="answer-container">
          <div className="answer-card">
            {answers && answers.map((answer, index) => (
              <div key={index} className="answer-option">
                {answer.answerText}
              </div>
            ))}
          </div>
          <p className="ans-que">whats your answer?</p>
        </div>
      </main>
    </div>
  );
};



// const QuestionScreen = () => {
//   const [countdown, setCountdown] = useState(10);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [noOfCorrect, setNoOfCorrect] = useState(0);
//   const [noOfWrong, setNoOfWrong] = useState(0);
//   const [isAnswerDisabled, setIsAnswerDisabled] = useState(false);
//   const [loadingQuestions, setLoadingQuestions] = useState(true);
//   const [showInsufficientFundsPopup, setShowInsufficientFundsPopup] =
//     useState(false);
//   const [insufficientFundsMessage, setInsufficientFundsMessage] = useState("");

//   const navigate = useNavigate();
//   // const category = location?.state?.category;

//   const location = useLocation();
//   const { state } = location;
//   const { correctAnswers, wrongAnswers, gemsEarned, category } = state || {};

//   const token = sessionStorage.getItem("token");

//   const startCountdown = React.useCallback(() => {
//     if (countdown > 0) {
//       setCountdown(countdown - 1);
//     }
//   }, [countdown]);

//   const handleNextQuestion = () => {
//     setShowFeedback(false);
//     setIsAnswerDisabled(false);

//     const currentQuestion = questions[currentQuestionIndex];
//     const isCurrentQuestionUnanswered =
//       !isQuestionAttempted(currentQuestionIndex);

//     if (isCurrentQuestionUnanswered) {
//       setSelectedAnswers((prevAnswers) => [
//         ...prevAnswers,
//         {
//           questionIndex: currentQuestionIndex,
//           answerText: "Unanswered",
//           isAnswerCorrect: false,
//         },
//       ]);

//       setNoOfWrong((prevWrong) => prevWrong + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setCountdown(10);
//     } else {
//       submitAnswersToApi(selectedAnswers);
//     }
//   };

//   useEffect(() => {
//     if (countdown === 0) {
//       handleNextQuestion();
//     }
//   }, []);

//   useEffect(() => {
//     if (countdown === 0 && !isAnswerDisabled) {
//       handleNextQuestion();
//     }
//   }, [countdown, isAnswerDisabled]);

//   useEffect(() => {
//     if (countdown > 0 && !isAnswerDisabled) {
//       const countdownTimer = setInterval(startCountdown, 1000);

//       return () => {
//         clearInterval(countdownTimer);
//       };
//     }
//   }, [countdown, currentQuestionIndex, isAnswerDisabled]);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const categoryId = 1;
//         const response = await axios.get(
//           `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?categoryID=1&gameID=1&language=english`,
//           {
//             headers: {
//               Accept: "*/*",
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const allQuestions = response.data.data;

//         setQuestions(allQuestions);
//         setCountdown(allQuestions.length);
//         setLoadingQuestions(false);
//       } catch (error) {
//         console.error("API Error:", error);
//         setQuestions([]);
//         setLoadingQuestions(false);
//       }
//     };

//     fetchQuestions();
//   }, [token]);

//   const handleAnswerSelect = (answerText, isAnswerCorrect) => {
//     if (isAnswerDisabled) return;
//     setIsAnswerDisabled(true);

//     setSelectedAnswers((prevAnswers) => [
//       ...prevAnswers,
//       { questionIndex: currentQuestionIndex, answerText, isAnswerCorrect },
//     ]);

//     setIsCorrect(isAnswerCorrect);

//     if (isAnswerCorrect) {
//       setNoOfCorrect((prevCorrect) => prevCorrect + 1);
//     } else {
//       setNoOfWrong((prevWrong) => prevWrong + 1);
//     }
//     const countdownDelay = countdown * 1000;
//     setTimeout(() => {
//       setShowFeedback(true);
//       setTimeout(() => {
//         setShowFeedback(false);
//         handleNextQuestion();
//       }, 800);
//     }, countdownDelay);
//   };

//   const isQuestionAttempted = (questionIndex) => {
//     return selectedAnswers.some(
//       (answer) => answer.questionIndex === questionIndex
//     );
//   };

//   const submitAnswersToApi = async (answers) => {
//     try {
//       const answersToSend = answers
//         .filter((answer) => answer.answerText !== "Unanswered")
//         .map((selectedAnswer) => ({
//           questionID: questions[selectedAnswer.questionIndex].id,
//           selectedAnswerID: 0,
//         }));

//       const response = await axios.post(
//         "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/SubmitAnswer",
//         {
//           gameID: 1,
//           answers: answersToSend,
//         },
//         {
//           headers: {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       navigate("/gamecomplete", {
//         state: {
//           correctAnswers: noOfCorrect,
//           wrongAnswers: noOfWrong + (questions.length - selectedAnswers.length),
//           gemsEarned: 0,
//           category,
//         },
//       });
//     } catch (error) {
//       console.error("Error submitting answers:", error);
//       if (error.response.status === 400) {
//         setInsufficientFundsMessage(
//           error.response.data.message ||
//             "Insufficient Wallet Balance. Please top up your wallet to continue."
//         );
//         setShowInsufficientFundsPopup(true);
//       } else if (error.response.status === 400) {
//         setInsufficientFundsMessage("Bad request. Please check your input.");
//         setShowInsufficientFundsPopup(true);
//       }
//     }
//   };

//   const closeInsufficientFundsPopup = () => {
//     setShowInsufficientFundsPopup(false);
//   };

//   return (
//     <div className="container">
//       <div className="">
//         <div className="countdown-container" id="countdown-nine">
//           <div className="countdown-nine">
//             {showFeedback ? (
//               isCorrect ? (
//                 <img src={sadMask} alt="Correct" />
//               ) : (
//                 <img src={sadMask} alt="Wrong" />
//               )
//             ) : loadingQuestions ? null : (
//               <p>{countdown}</p>
//             )}
//           </div>
//         </div>
//         <div className="text-contn">
//           {questions.length > 0 ? (
//             currentQuestionIndex < questions.length ? (
//               <QuestionScreen
//                 question={questions[currentQuestionIndex]}
//                 onAnswerSelect={handleAnswerSelect}
//                 isCorrect={isCorrect}
//                 showFeedback={showFeedback}
//                 isAnswerDisabled={isAnswerDisabled}
//                 selectedAnswer={selectedAnswers}
//               />
//             ) : (
//               <p>No questions available.</p>
//             )
//           ) : loadingQuestions ? (
//             <p>Loading questions...</p>
//           ) : null}
//         </div>
//       </div>
//       {showInsufficientFundsPopup && (
//         <Popups
//           message={insufficientFundsMessage}
//           onClose={closeInsufficientFundsPopup}
//         />
//       )}
//     </div>
//   );
// };

export { CountdownPage, Question, QuestionScreen };
