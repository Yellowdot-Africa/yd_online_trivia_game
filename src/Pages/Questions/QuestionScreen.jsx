// import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchUserQuestions,
//   setCurrentQuestionIndex,
//   submitAnswer
// } from "../../features/questions/questionSlice";
// import {
//   getCategories,
//   getGames,
// } from "../../features/categories/categoriesSlice";
// import Pagination from "../../Components/Pagination";
// import Timer from "../../assets/Icons/timer.svg";
// import { useNavigate, useLocation } from "react-router-dom";
// import EndGameModal from "../../Components/EndGameModal";
// import "../../Pages/Questions/QuestionsScreen.css";
// import { Circles } from "react-loader-spinner";
// import { unwrapResult } from "@reduxjs/toolkit";

// const QuestionScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const {
//     questions,
//     currentQuestionIndex,
//     answers,
//     loading,
//     error,
//   } = useSelector((state) => state.questions);

//   console.log("Questions in component:", questions);
//   const selectedCategoryID = useSelector(
//     (state) => state.categories.selectedCategory
//   );
//   const selectedGameID = useSelector((state) => state.categories.selectedGame);
//   const selectedLanguage =
//     useSelector((state) => state.categories.selectedLanguage) || "en";
//   const token = useSelector((state) => state.auth.jwt);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [selectedAnswerID, setSelectedAnswerID] = useState(null);

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
//   const [isOptionSelected, setIsOptionSelected] = useState(false);
//   const { selectedPack } = location.state || {};

//   useEffect(() => {
//     dispatch(getCategories());
//     dispatch(getGames());
//   }, [dispatch]);

//   useEffect(() => {
//     setSelectedAnswerID(null);
//   }, [currentQuestionIndex]);

//   useEffect(() => {
//     if (!selectedPack) {
//       console.error("Error: selectedPack is not defined");
//       setErrorMessage("Selected question pack is not available.");
//       return;
//     }

//     const packId = selectedPack?.questionPackId;
//     console.log("Selected Pack: ", selectedPack);
//     console.log("Pack ID: ", packId);

//     if (selectedCategoryID && selectedGameID && packId) {
//       dispatch(
//         fetchUserQuestions({
//           categoryID: selectedCategoryID,
//           gameID: selectedGameID,
//           packId,
//         })
//       )
//         .then(unwrapResult)
//         .then((result) => {
//           console.log("Fetched Questions:", result);
//           setErrorMessage("");
//           dispatch(setCurrentQuestionIndex(0));
//           setActiveIndex(0);
//           setTimer(10);
//         })
//         .catch((err) => {
//           console.error("Error fetching questions:", err);
//           const errorResponse = err.response || err;
//           const errorMessage =
//             errorResponse.data?.message ||
//             errorResponse.data?.errors ||
//             "An unknown error occurred";
//           setErrorMessage(errorMessage);
//         });
//     } else {
//       console.error("Error: Pack ID is not defined");
//       setErrorMessage("Pack ID is missing.");
//     }
//   }, [
//     dispatch,
//     selectedPack,
//     selectedGameID,
//     selectedCategoryID,
//     selectedLanguage,
//     token,
//   ]);

//   const handleAnswerSubmission = useCallback(
//     async (skipFeedback = false) => {
//       if (selectedAnswerID !== null) {
//         const isCorrect =
//           answers[selectedAnswerIndex]?.isCorrectAnswer === true;

//         const newAnswerBgColors = answers.map((answer, index) => {
//           if (index === selectedAnswerIndex) {
//             return isCorrect ? "#5CBE5A" : "#E37F80";
//           }
//           return answer.isCorrectAnswer ? "#5CBE5A" : "";
//         });

//         setAnswerBgColors(newAnswerBgColors);
//         setScreenBgColor("#4C22B8");
//         setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

//         // const updatedStatuses = [...statuses];
//         // updatedStatuses[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
//         // setStatuses(updatedStatuses);

//         // if (isCorrect) {
//         //   setCorrectAnswers((prev) => prev + 1);
//         // } else {
//         //   setWrongAnswers((prev) => prev + 1);
//         // }

//     setCorrectAnswers(prev => isCorrect ? prev + 1 : prev);
//     setWrongAnswers(prev => isCorrect ? prev : prev + 1);

//     const userAnswerData = {
//       questionPackID: selectedPack.questionPackId,
//       gameID: selectedGameID,
//       answers: [
//         {
//           questionID: selectedPack.questionId,
//           selectedAnswerID: selectedAnswerID,
//         }
//       ],    };
//       console.log("Submitting answer data:", userAnswerData);

//       // } else {
//       //   const updatedStatuses = [...statuses];
//       //   updatedStatuses[currentQuestionIndex] = "wrong";
//       //   setStatuses(updatedStatuses);
//       //   setWrongAnswers((prev) => prev + 1);
//       // }

//       try {
//         await dispatch(submitAnswer(userAnswerData));
//         console.log("Answers submitted successfully");
//     } catch (error) {
//         console.error("Error submitting answers:", error);
//         setErrorMessage("Failed to submit answers. Please try again.");

//     }
//       }

//       setTimeout(
//         () => {
//           const nextIndex = currentQuestionIndex + 1;
//           if (nextIndex < questions.length) {
//             dispatch(setCurrentQuestionIndex(nextIndex));
//             setActiveIndex(nextIndex);
//             resetQuestionState();
//             setTimer(10);
//             setScreenBgColor("#580DA4");
//             setAnswerBgColors([]);
//             setFeedbackText("");
//             setSelectedAnswerIndex(null);
//             setIsOptionSelected(false);
//           } else {
//             // submitAnswer(selectedPack.questionPackId, selectedGameID, userAnswers, token)
//             //   .then((response) => {
//             //     console.log("Answers submitted successfully:", response);

//                 navigate("/result-page", {
//                   state: {
//                     correctAnswers,
//                     wrongAnswers,
//                     selectedPack,
//                   },
//                 });
//                 }
//               // })
//               // .catch((error) => {
//               //   console.error("Error submitting answers:", error);
//               // });
//           // }
//         },
//         skipFeedback ? 100 : 2000
//       );
//     },
//     [
//       selectedAnswerID,
//       selectedAnswerIndex,
//       answers,
//       statuses,
//       currentQuestionIndex,
//       questions?.length,
//       navigate,
//       dispatch,
//       correctAnswers,
//       wrongAnswers,
//       submitAnswer,
//       userAnswers,
//       selectedPack,
//       selectedGameID,
//       token,
//     ]
//   );

// const handleAnswerClick = useCallback(
//   (index) => {
//     if (selectedAnswerIndex === null) {
//       setSelectedAnswerIndex(index);
//       setIsOptionSelected(true);
//       setScreenBgColor("#0B0B2A");

//       const newAnswerBgColors = answers.map((_, i) =>
//         i === index ? "#973CF2" : ""
//       );
//       setAnswerBgColors(newAnswerBgColors);

//       const selectedAnswerID = answers[index].answerID;
//       setSelectedAnswerID(selectedAnswerID);

//       const newAnswer = {
//         questionID: questions[currentQuestionIndex].questionID,
//         selectedAnswer: selectedAnswerID,
//       };

//       setUserAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
//     }
//   },
//   [selectedAnswerIndex, answers, questions, currentQuestionIndex]
// );

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
//     const timerInterval = setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer === 1) {
//           clearInterval(timerInterval);
//           handleAnswerSubmission(true);
//         } else if (prevTimer === 7 && isOptionSelected) {
//           handleAnswerSubmission(false);
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerInterval);
//   }, [handleAnswerSubmission, isOptionSelected]);

//   const handleQuit = () => {
//     setScreenBgColor("#1F82F2");
//     setShowModal(true);
//   };

//   const handleEndGame = () => {
//     navigate("/result-page", {
//       state: {
//         correctAnswers,
//         wrongAnswers,
//         selectedPack,
//       },
//     });
//   };

//   const currentQuestion = questions[currentQuestionIndex] || [];

//   console.log("Current Question:", currentQuestion);

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
//                 {currentQuestion?.question && answers.length > 0 ? (
//                   <p className="question-txt">{currentQuestion.question}</p>
//                 ) : (
//                   <p className="question-txt">Loading question...</p>
//                 )}

//                 <Pagination
//                   totalItems={questions.length}
//                   activeIndex={activeIndex}
//                   onChange={handlePageChange}
//                   statuses={statuses}
//                 />
//                 <div className="answer-container">
//                   <div className="answer-card">
//                     {Array.isArray(answers) && answers.length > 0 ? (
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
//                       ))
//                     ) : (
//                       <p>No answers available</p>
//                     )}
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





import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserQuestions,
  setCurrentQuestionIndex,
  submitAnswer,
  setQuestions
} from "../../features/questions/questionSlice";
import {
  getCategories,
  getGames,
} from "../../features/categories/categoriesSlice";
import Pagination from "../../Components/Pagination";
import Timer from "../../assets/Icons/timer.svg";
import { useNavigate, useLocation } from "react-router-dom";
import EndGameModal from "../../Components/EndGameModal";
import "../../Pages/Questions/QuestionsScreen.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { Circles } from "react-loader-spinner";

const QuestionScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {questions, currentQuestionIndex,  answers, loading, error } = useSelector((state) => state.questions);
  const selectedCategoryID = useSelector((state) => state.categories.selectedCategory);
  const selectedGameID = useSelector((state) => state.categories.selectedGame);
  const selectedLanguage = useSelector((state) => state.categories.selectedLanguage) || "en";
  const token = useSelector((state) => state.auth.jwt);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswerID, setSelectedAnswerID] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(10);
  const [screenBgColor, setScreenBgColor] = useState("#580DA4");
  const [answerBgColors, setAnswerBgColors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const { selectedPack } = location.state || {};
  const activeIndex = currentQuestionIndex;
  const [statuses, setStatuses] = useState([]);
  const [isTimerActive, setIsTimerActive] = useState(true);


  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    if (!selectedPack) {
      setErrorMessage("Selected question pack is not available.");
      return;
    }
   
    const packId = selectedPack?.questionPackId;
   

    if (selectedCategoryID && selectedGameID && packId) {
      dispatch(
        fetchUserQuestions({
          categoryID: selectedCategoryID,
          gameID: selectedGameID,
          packId,
        })
      )
        .then(unwrapResult)
        .then((result) => {
          console.log("Fetched questions:", result.data); 
          dispatch(setQuestions(result.data));
          setErrorMessage("");
          dispatch(setCurrentQuestionIndex(0));
          resetQuestionState();
        })
        .catch((err) => {
          console.error("Error fetching questions:", err);
          const errorMessage = err.response?.data?.message || "An unknown error occurred";
          setErrorMessage(errorMessage);
        });
    } else {
      setErrorMessage("Pack ID is missing.");
    }
  }, [dispatch, selectedPack, selectedGameID, selectedCategoryID, selectedLanguage, token]);

  const resetQuestionState = () => {
    setSelectedAnswerID(null);
    setSelectedAnswerIndex(null);
    setIsOptionSelected(false);
    setTimer(10);
    setAnswerBgColors([]);
    setFeedbackText("");
    setScreenBgColor("#580DA4");
  };

 

  const handleAnswerSubmission = useCallback(async (skipFeedback = false) => {
   
    if (selectedAnswerID !== null) {

      const currentQuestion = questions[currentQuestionIndex] || {};
     

      const questionID = currentQuestion?.id; 
    
      const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

        setUserAnswers((prevAnswers) => [
          ...prevAnswers,
          { questionID: questionID, selectedAnswerID: selectedAnswerID },
        ]);
   
      const newAnswerBgColors = answers.map((answer, index) => {
        if (index === selectedAnswerIndex) {
          return isCorrect ? "#5CBE5A" : "#E37F80"; 
        }
        return answer.isCorrectAnswer ? "#5CBE5A" : ""; 
      });

      setAnswerBgColors(newAnswerBgColors);
      setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");
      setCorrectAnswers((prev) => isCorrect ? prev + 1 : prev);
      setWrongAnswers((prev) => isCorrect ? prev : prev + 1);

      const updateStatuses = (index, isCorrect) => {
        setStatuses((prev) => {
          const newStatuses = [...prev];
          newStatuses[index] = isCorrect ? "correct" : "wrong"; // Use your color logic here
          return newStatuses;
        });
      };
      
      updateStatuses(currentQuestionIndex, isCorrect);
    
      setIsTimerActive(false); 

      setTimeout(() => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
          dispatch(setCurrentQuestionIndex(nextIndex));
          resetQuestionState();
        } else {
          console.log("Submitting answers: ", userAnswers);

          submitAnswerPack(userAnswers);

          
        }
      },  2000); 
    }

    
  }, [selectedAnswerID, selectedAnswerIndex, answers, currentQuestionIndex, questions.length, dispatch, correctAnswers, wrongAnswers, navigate, selectedPack, selectedGameID]);

 const submitAnswerPack = async (answers) => {
  const userAnswerData = {
    questionPackID: selectedPack.questionPackId,
    gameID: selectedGameID,
    answers,
  };

  try {
    await dispatch(submitAnswer(userAnswerData));
    navigate("/result-page", {
      state: { correctAnswers, wrongAnswers, selectedPack },
    });
  } catch (error) {
    console.error("Error submitting answers:", error);
    setErrorMessage("Failed to submit answers. Please try again.");
  }
};



  const handleAnswerClick = useCallback((index) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
      setIsOptionSelected(true);
      setAnswerBgColors(answers.map((_, i) => (i === index ? "#973CF2" : ""))); // Purple for selected
      setSelectedAnswerID(answers[index].id);
      setIsTimerActive(false); 
      handleAnswerSubmission();
    }
  }, [selectedAnswerIndex, answers, handleAnswerSubmission]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval);
          if (selectedAnswerID === null) {
            setWrongAnswers((prev) => prev + 1);

            const newAnswerBgColors = answers.map((answer, index) => {
              return ""; 
            });
            setAnswerBgColors(newAnswerBgColors);
          }



          handleAnswerSubmission(true); 
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [handleAnswerSubmission, selectedAnswerID]);

  const handleEndGame = () => {
    navigate("/result-page", {
      state: { correctAnswers, wrongAnswers, selectedPack },
    });
  };

  const handlePageChange = (newIndex) => {
    dispatch(setCurrentQuestionIndex(newIndex));
    resetQuestionState();
  };

  const currentQuestion = questions[currentQuestionIndex] || [];

  return (
    <div
            className={`question-screen ${showModal ? "modal-active" : ""}`}
            style={{ backgroundColor: screenBgColor }}
          >
      <div className="timer-container">
        <div className="timer-wrapper">
          <div className="timer">
            <img className="img-timer" src={Timer} alt="timer" />
            <p>{timer}</p>
          </div>
          <div className="quit-div">
            <p className="quit" onClick={handleEndGame}>Quit</p>
          </div>
        </div>
      </div>

      <main className="main-container">
        {loading ? (
                      <Circles color="#D9D9D9" height={20} width={20} />

        ) : errorMessage ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          <>
            <div className="quest-main-container">
              <p className="question-txt">{currentQuestion?.question}</p>

              <Pagination
                  totalItems={questions.length}
                  activeIndex={activeIndex}
                  onChange={handlePageChange}
                  statuses={statuses}
                />


              <div className="answer-container">
                  <div className="answer-card">

                {answers.map((answer, index) => (
                  <div
                    key={index}
                    className={`answer-option ${selectedAnswerIndex === index ? "selected" : ""}`}
                    style={{ backgroundColor: answerBgColors[index] || "" }}
                    onClick={() => handleAnswerClick(index)}
                  >
                    <span className="answer-content">{answer.answerText}</span>
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



// import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchUserQuestions,
//   setCurrentQuestionIndex,
//   submitAnswer,
//   setQuestions
// } from "../../features/questions/questionSlice";
// import {
//   getCategories,
//   getGames,
// } from "../../features/categories/categoriesSlice";
// import Pagination from "../../Components/Pagination";
// import Timer from "../../assets/Icons/timer.svg";
// import { useNavigate, useLocation } from "react-router-dom";
// import EndGameModal from "../../Components/EndGameModal";
// import "../../Pages/Questions/QuestionsScreen.css";
// import { unwrapResult } from "@reduxjs/toolkit";
// import { Circles } from "react-loader-spinner";

// const QuestionScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const {questions, currentQuestionIndex,  answers, loading, error } = useSelector((state) => state.questions);
//   const selectedCategoryID = useSelector((state) => state.categories.selectedCategory);
//   const selectedGameID = useSelector((state) => state.categories.selectedGame);
//   const selectedLanguage = useSelector((state) => state.categories.selectedLanguage) || "en";
//   const token = useSelector((state) => state.auth.jwt);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [selectedAnswerID, setSelectedAnswerID] = useState(null);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
//   const [feedbackText, setFeedbackText] = useState("");
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [wrongAnswers, setWrongAnswers] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [timer, setTimer] = useState(10);
//   const [screenBgColor, setScreenBgColor] = useState("#580DA4");
//   const [answerBgColors, setAnswerBgColors] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isOptionSelected, setIsOptionSelected] = useState(false);
//   const { selectedPack } = location.state || {};
//   const activeIndex = currentQuestionIndex;
//   const [statuses, setStatuses] = useState([]);


//   useEffect(() => {
//     dispatch(getCategories());
//     dispatch(getGames());
//   }, [dispatch]);

//   useEffect(() => {
//     if (!selectedPack) {
//       setErrorMessage("Selected question pack is not available.");
//       return;
//     }
   
//     const packId = selectedPack?.questionPackId;
   

//     if (selectedCategoryID && selectedGameID && packId) {
//       dispatch(
//         fetchUserQuestions({
//           categoryID: selectedCategoryID,
//           gameID: selectedGameID,
//           packId,
//         })
//       )
//         .then(unwrapResult)
//         .then((result) => {
//           dispatch(setQuestions(result.data));
//           setErrorMessage("");
//           dispatch(setCurrentQuestionIndex(0));
//           resetQuestionState();
//         })
//         .catch((err) => {
//           console.error("Error fetching questions:", err);
//           const errorMessage = err.response?.data?.message || "An unknown error occurred";
//           setErrorMessage(errorMessage);
//         });
//     } else {
//       setErrorMessage("Pack ID is missing.");
//     }
//   }, [dispatch, selectedPack, selectedGameID, selectedCategoryID, selectedLanguage, token]);

//   const resetQuestionState = () => {
//     setSelectedAnswerID(null);
//     setSelectedAnswerIndex(null);
//     setIsOptionSelected(false);
//     setTimer(10);
//     setAnswerBgColors([]);
//     setFeedbackText("");
//     setScreenBgColor("#580DA4");
//   };

 

//   const handleAnswerSubmission = useCallback(async (skipFeedback = false) => {
   
//     if (selectedAnswerID !== null) {

//       const currentQuestion = questions[currentQuestionIndex] || {};
     

//       const questionID = currentQuestion?.id; 
    
//       const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

//         setUserAnswers((prevAnswers) => [
//           ...prevAnswers,
//           { questionID: questionID, selectedAnswerID: selectedAnswerID },
//         ]);
   
//       const newAnswerBgColors = answers.map((answer, index) => {
//         if (index === selectedAnswerIndex) {
//           return isCorrect ? "#5CBE5A" : "#E37F80"; 
//         }
//         return answer.isCorrectAnswer ? "#5CBE5A" : ""; 
//       });

//       setAnswerBgColors(newAnswerBgColors);
//       setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");
//       setCorrectAnswers((prev) => isCorrect ? prev + 1 : prev);
//       setWrongAnswers((prev) => isCorrect ? prev : prev + 1);

     
//       setTimeout(() => {
//         const nextIndex = currentQuestionIndex + 1;
//         if (nextIndex < questions.length) {
//           dispatch(setCurrentQuestionIndex(nextIndex));
//           resetQuestionState();
//         } else {
//           console.log("Submitting answers: ", userAnswers);

//           submitAnswerPack(userAnswers);

          
//         }
//       },  2000); 
//     }

    
//   }, [selectedAnswerID, selectedAnswerIndex, answers, currentQuestionIndex, questions.length, dispatch, correctAnswers, wrongAnswers, navigate, selectedPack, selectedGameID]);

//  const submitAnswerPack = async (answers) => {
//   const userAnswerData = {
//     questionPackID: selectedPack.questionPackId,
//     gameID: selectedGameID,
//     answers,
//   };

//   try {
//     await dispatch(submitAnswer(userAnswerData));
//     navigate("/result-page", {
//       state: { correctAnswers, wrongAnswers, selectedPack },
//     });
//   } catch (error) {
//     console.error("Error submitting answers:", error);
//     setErrorMessage("Failed to submit answers. Please try again.");
//   }
// };



//   const handleAnswerClick = useCallback((index) => {
//     if (selectedAnswerIndex === null) {
//       setSelectedAnswerIndex(index);
//       setIsOptionSelected(true);
//       setAnswerBgColors(answers.map((_, i) => (i === index ? "#973CF2" : ""))); // Purple for selected
//       setSelectedAnswerID(answers[index].id);
//     }
//   }, [selectedAnswerIndex, answers]);

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer === 1) {
//           clearInterval(timerInterval);
//           handleAnswerSubmission(true); 
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerInterval);
//   }, [handleAnswerSubmission]);

//   const handleEndGame = () => {
//     navigate("/result-page", {
//       state: { correctAnswers, wrongAnswers, selectedPack },
//     });
//   };

//   const handlePageChange = (newIndex) => {
//     dispatch(setCurrentQuestionIndex(newIndex));
//     resetQuestionState();
//   };

//   const currentQuestion = questions[currentQuestionIndex] || [];

//   return (
//     <div
//             className={`question-screen ${showModal ? "modal-active" : ""}`}
//             style={{ backgroundColor: screenBgColor }}
//           >
//       <div className="timer-container">
//         <div className="timer-wrapper">
//           <div className="timer">
//             <img className="img-timer" src={Timer} alt="timer" />
//             <p>{timer}</p>
//           </div>
//           <div className="quit-div">
//             <p className="quit" onClick={handleEndGame}>Quit</p>
//           </div>
//         </div>
//       </div>

//       <main className="main-container">
//         {loading ? (
//                       <Circles color="#D9D9D9" height={20} width={20} />

//         ) : errorMessage ? (
//           <div className="error-message">{errorMessage}</div>
//         ) : (
//           <>
//             <div className="quest-main-container">
//               <p className="question-txt">{currentQuestion?.question}</p>

//               <Pagination
//                   totalItems={questions.length}
//                   activeIndex={activeIndex}
//                   onChange={handlePageChange}
//                   statuses={statuses}
//                 />


//               <div className="answer-container">
//                   <div className="answer-card">

//                 {answers.map((answer, index) => (
//                   <div
//                     key={index}
//                     className={`answer-option ${selectedAnswerIndex === index ? "selected" : ""}`}
//                     style={{ backgroundColor: answerBgColors[index] || "" }}
//                     onClick={() => handleAnswerClick(index)}
//                   >
//                     <span className="answer-content">{answer.answerText}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             </div>
//           </>
//         )}
//       </main>
//       <EndGameModal
//           isOpen={showModal}
//           onClose={() => setShowModal(false)}
//           onEnd={handleEndGame}
//         />

//     </div>
//   );
// };

// export default QuestionScreen;



