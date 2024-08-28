import axios from 'axios';

const categoriesApi = axios.create({
  baseURL: "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia",
});

const gamesApi = axios.create({
  baseURL: "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia",
  
})

export const fetchCategories = (token) => {
  return categoriesApi.get("/GameCategory/GetCategories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  
  
   } );
};


export const fetchGames = (token)=>{
  return gamesApi.get("/Games/GetGames", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export default { fetchCategories, fetchGames };











// import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchQuestions,
//   setCurrentQuestionIndex,
// } from "../../features/questions/questionSlice";
// import {
//   getCategories,
//   getGames,
// } from "../../features/categories/categoriesSlice";
// import Pagination from "../../Components/Pagination";
// import Timer from "../../assets/Icons/timer.svg";
// import { useNavigate } from "react-router-dom";
// import EndGameModal from "../../Components/EndGameModal";
// import "../../Pages/Questions/QuestionsScreen.css";
// import { Circles } from "react-loader-spinner";

// const QuestionScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { questions, answers, currentQuestionIndex, loading, error } =
//     useSelector((state) => state.questions);

//   const selectedCategoryID = useSelector(
//     (state) => state.categories.selectedCategory
//   );
//   const selectedGameID = useSelector((state) => state.categories.selectedGame);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
//   const [feedbackText, setFeedbackText] = useState("");
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [wrongAnswers, setWrongAnswers] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [timer, setTimer] = useState(10);
//   const [screenBgColor, setScreenBgColor] = useState("#580DA4");
//   const [answerBgColors, setAnswerBgColors] = useState([]);
//   const [statuses, setStatuses] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     dispatch(getCategories());
//     dispatch(getGames());
//   }, [dispatch]);

//   useEffect(() => {
//     if (selectedCategoryID && selectedGameID) {
//       dispatch(
//         fetchQuestions({
//           categoryID: selectedCategoryID,
//           gameID: selectedGameID,
//         })
//       ).then((response) => {
//         if (response.error) {
//           setErrorMessage(response.error.message || "An unknown error occurred");
//           console.error("Error fetching questions:", response.error.message);
//         } else {
//           setErrorMessage("");
//           dispatch(setCurrentQuestionIndex(0));
//           setActiveIndex(0);
//           setTimer(10);
//         }
//       });
//     }
//   }, [dispatch, selectedCategoryID, selectedGameID]);

//   const handleAnswerSubmission = useCallback(() => {
//     if (selectedAnswerIndex !== null) {
//       const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

//       const newAnswerBgColors = answers.map((answer, index) => {
//         if (index === selectedAnswerIndex) {
//           return isCorrect ? "#5CBE5A" : "#E37F80";
//         }
//         return answer.isCorrectAnswer ? "#5CBE5A" : "";
//       });

//       setAnswerBgColors(newAnswerBgColors);
//       setScreenBgColor("#4C22B8");
//       setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

//       const updatedStatuses = [...statuses];
//       updatedStatuses[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
//       setStatuses(updatedStatuses);

//       if (isCorrect) {
//         setCorrectAnswers((prev) => prev + 1);
//       } else {
//         setWrongAnswers((prev) => prev + 1);
//       }
//     } else if (currentQuestionIndex !== 0) { // Avoid auto-submission for the first question
//       const updatedStatuses = [...statuses];
//       updatedStatuses[currentQuestionIndex] = "wrong";
//       setStatuses(updatedStatuses);

//       setWrongAnswers((prev) => prev + 1);
//     }

//     setTimeout(() => {
//       const nextIndex = currentQuestionIndex + 1;
//       if (nextIndex < questions.length) {
//         dispatch(setCurrentQuestionIndex(nextIndex));
//         setActiveIndex(nextIndex);
//         setTimer(10);
//         setScreenBgColor("#580DA4");
//         setAnswerBgColors([]);
//         setFeedbackText("");
//         setSelectedAnswerIndex(null);
//       } else {
//         navigate("/result-page", {
//           state: {
//             correctAnswers,
//             wrongAnswers,
//           },
//         });
//       }
//     }, 1000);
//   }, [
//     selectedAnswerIndex,
//     answers,
//     statuses,
//     currentQuestionIndex,
//     questions?.length,
//     navigate,
//     dispatch,
//     correctAnswers,
//     wrongAnswers,
//   ]);

//   const handleAnswerClick = useCallback(
//     (index) => {
//       if (selectedAnswerIndex === null) {
//         setSelectedAnswerIndex(index);
//         setScreenBgColor("#0B0B2A");

//         const newAnswerBgColors = answers.map((_, i) =>
//           i === index ? "#973CF2" : ""
//         );
//         setAnswerBgColors(newAnswerBgColors);
//       }
//     },
//     [selectedAnswerIndex, answers]
//   );

//   const handlePageChange = (index) => {
//     setActiveIndex(index);
//     dispatch(setCurrentQuestionIndex(index));
//     setSelectedAnswerIndex(null);
//     setFeedbackText("");
//     setTimer(10);
//     setScreenBgColor("#580DA4");
//     setAnswerBgColors([]);
//   };

//   useEffect(() => {
//     const timerInterval = setTimeout(() => {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer === 1) {
//             clearInterval(interval);
//             handleAnswerSubmission();
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//     }, 1000); // Delay of 1 second before the timer starts

//     return () => clearTimeout(timerInterval);
//   }, [handleAnswerSubmission, currentQuestionIndex]);

//   const handleQuit = () => {
//     setScreenBgColor("#1F82F2");
//     setShowModal(true);
//   };

//   const handleEndGame = () => {
//     navigate("/result-page", {
//       state: {
//         correctAnswers,
//         wrongAnswers,
//       },
//     });
//   };

//   const currentQuestion =
//     questions?.length > 0
//       ? questions[currentQuestionIndex]?.question
//       : "Loading...";

//   return (
//     <>
//       <div
//         className={`question-screen ${showModal ? "modal-active" : ""}`}
//         style={{ backgroundColor: screenBgColor }}
//       >
//         <div className="timer-container">
//           <div className="timer-wrapper">
//             <div className="timer">
//               <img className="img-timer" src={Timer} alt="timer" />
//               <p>{timer}</p>
//             </div>
//             <div className="quit-div">
//               <p className="quit" onClick={handleQuit}>
//                 Quit
//               </p>
//             </div>
//           </div>
//         </div>

//         <main className="main-container">
//           {loading ? (
//             <Circles color="#D9D9D9" height={20} width={20} />
//           ) : errorMessage ? (
//             <div className="error-message">
//               <p>{errorMessage}</p>
//             </div>
//           ) : (
//             <>
//               <div className="quest-main-container">
//                 {currentQuestion && answers.length > 0 && (
//                   <p className="question-txt">{currentQuestion}</p>
//                 )}
//                 <Pagination
//                   totalItems={questions?.length}
//                   activeIndex={activeIndex}
//                   onChange={handlePageChange}
//                   statuses={statuses}
//                 />
//                 <div className="answer-container">
//                   <div className="answer-card">
//                     {answers &&
//                       answers.map((answer, index) => (
//                         <div
//                           key={index}
//                           className={`answer-option ${
//                             selectedAnswerIndex === index
//                               ? "selected-answer"
//                               : ""
//                           } ${selectedAnswerIndex !== null ? "disabled" : ""}`}
//                           onClick={() => handleAnswerClick(index)}
//                           style={{
//                             backgroundColor: answerBgColors[index] || "",
//                           }}
//                         >
//                           {answer?.answerText}
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </main>
//         <EndGameModal
//           isOpen={showModal}
//           onClose={() => setShowModal(false)}
//           onEnd={handleEndGame}
//         />
//       </div>
//     </>
//   );
// };

// export default QuestionScreen;
