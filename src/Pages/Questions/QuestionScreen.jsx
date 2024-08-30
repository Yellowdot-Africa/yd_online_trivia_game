import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions, setCurrentQuestionIndex } from "../../features/questions/questionSlice";
import { getCategories, getGames } from "../../features/categories/categoriesSlice";
import Pagination from "../../Components/Pagination";
import Timer from "../../assets/Icons/timer.svg";
import { useNavigate } from "react-router-dom";
import EndGameModal from "../../Components/EndGameModal";
import "../../Pages/Questions/QuestionsScreen.css";
import { Circles } from "react-loader-spinner";
import { unwrapResult } from "@reduxjs/toolkit";

const QuestionScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, answers, currentQuestionIndex, loading, error } = useSelector((state) => state.questions);
  const selectedCategoryID = useSelector((state) => state.categories.selectedCategory);
  const selectedGameID = useSelector((state) => state.categories.selectedGame);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(10);
  const [screenBgColor, setScreenBgColor] = useState("#580DA4");
  const [answerBgColors, setAnswerBgColors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategoryID && selectedGameID) {
      dispatch(fetchQuestions({ categoryID: selectedCategoryID, gameID: selectedGameID }))
        .then(unwrapResult)
        .then((result) => {
          setErrorMessage(""); 
          dispatch(setCurrentQuestionIndex(0));
          setActiveIndex(0);
          setTimer(10);
        })
        .catch((err) => {
          setErrorMessage(err.message || "An unknown error occurred");
          console.error("Error fetching questions:", err.message);
        });
    }
  }, [dispatch, selectedCategoryID, selectedGameID]);



  const handleAnswerSubmission = useCallback(() => {
    // console.log("IND", index || 0);
    if (selectedAnswerIndex !== null) {
      // const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true || answers[index]?.isCorrectAnswer === true;
      const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

      const newAnswerBgColors = answers.map((answer, index) => {
        if (index === selectedAnswerIndex) {
          return isCorrect ? "#5CBE5A" : "#E37F80";
        }
        return answer.isCorrectAnswer ? "#5CBE5A" : "";
      });

      setAnswerBgColors(newAnswerBgColors);
      setScreenBgColor("#4C22B8");
      setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

      const updatedStatuses = [...statuses];
      updatedStatuses[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
      setStatuses(updatedStatuses);

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }
    } else {
      const updatedStatuses = [...statuses];
      updatedStatuses[currentQuestionIndex] = "wrong";
      setStatuses(updatedStatuses);

      setWrongAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        dispatch(setCurrentQuestionIndex(nextIndex));
        setActiveIndex(nextIndex);
        setTimer(10);
        setScreenBgColor("#580DA4");
        setAnswerBgColors([]);
        setFeedbackText("");
        setSelectedAnswerIndex(null);
      } else {
        navigate("/result-page", {
          state: {
            correctAnswers,
            wrongAnswers,
          },
        });
      }
    }, 2000);
  }, [
    selectedAnswerIndex,
    answers,
    statuses,
    currentQuestionIndex,
    questions?.length,
    navigate,
    dispatch,
    correctAnswers,
    wrongAnswers,
  ]);

 
//   const handleAnswerSubmission = useCallback(() => {
//     if (selectedAnswerIndex !== null) {
//         // Check if the selected answer is correct
//         const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

//         // Set the background colors of the answers
//         const newAnswerBgColors = answers.map((answer, index) => {
//             if (index === selectedAnswerIndex) {
//                 return isCorrect ? "#5CBE5A" : "#E37F80"; // Green for correct, red for wrong
//             }
//             return answer.isCorrectAnswer ? "#5CBE5A" : ""; // Mark the correct answer green if it's not the selected one
//         });

//         setAnswerBgColors(newAnswerBgColors); // Update the state with the new background colors
//         setScreenBgColor("#4C22B8"); // Change the screen background color
//         setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong"); // Set the feedback text

//         // Update the status of the current question to correct or wrong
//         const updatedStatuses = [...statuses];
//         updatedStatuses[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
//         setStatuses(updatedStatuses);

//         // Increment the count of correct or wrong answers
//         if (isCorrect) {
//             setCorrectAnswers((prev) => prev + 1);
//         } else {
//             setWrongAnswers((prev) => prev + 1);
//         }
//     } else {
//         // If no answer is selected, mark the question as wrong
//         const updatedStatuses = [...statuses];
//         updatedStatuses[currentQuestionIndex] = "wrong";
//         setStatuses(updatedStatuses);

//         setWrongAnswers((prev) => prev + 1);
//     }

//     // Move to the next question after 2 seconds
//     setTimeout(() => {
//         const nextIndex = currentQuestionIndex + 1;
//         if (nextIndex < questions.length) {
//             dispatch(setCurrentQuestionIndex(nextIndex));
//             setActiveIndex(nextIndex);
//             setTimer(10); // Reset the timer
//             setScreenBgColor("#580DA4"); // Reset the background color
//             setAnswerBgColors([]); // Clear the answer background colors
//             setFeedbackText(""); // Clear the feedback text
//             setSelectedAnswerIndex(null); // Reset the selected answer
//         } else {
//             // If there are no more questions, navigate to the result page
//             navigate("/result-page", {
//                 state: {
//                     correctAnswers,
//                     wrongAnswers,
//                 },
//             });
//         }
//     }, 2000);
// }, [
//     selectedAnswerIndex,
//     answers,
//     statuses,
//     currentQuestionIndex,
//     questions?.length,
//     navigate,
//     dispatch,
//     correctAnswers,
//     wrongAnswers,
// ]);

// const handleAnswerClick = useCallback(
//   (index) => {
//       if (selectedAnswerIndex === null) {
//           setSelectedAnswerIndex(index); // Set the selected answer index
//           setScreenBgColor("#0B0B2A"); // Change the screen background color

//           const newAnswerBgColors = answers.map((_, i) => (i === index ? "#973CF2" : ""));
//           setAnswerBgColors(newAnswerBgColors); // Update the background color of the selected answer

//           // Check if the timer is 2 seconds or less, if so, show feedback and move to the next question
//           if (timer <= 2) {
//               handleAnswerSubmission();
//           }
//       }
//   },
//   [selectedAnswerIndex, answers, timer, handleAnswerSubmission]
// );


  const handleAnswerClick = useCallback(
    (index) => {
      if (selectedAnswerIndex === null) {
        setSelectedAnswerIndex(index);
        setScreenBgColor("#0B0B2A");

        const newAnswerBgColors = answers.map((_, i) => (i === index ? "#973CF2" : ""));
        setAnswerBgColors(newAnswerBgColors);

        // setTimeout(()=>{

        //   handleAnswerSubmission(index);
        // },1500)
      } 

      
    },
    [selectedAnswerIndex, answers]
  );



  const handlePageChange = (index) => {
    setActiveIndex(index);
    dispatch(setCurrentQuestionIndex(index));
    setSelectedAnswerIndex(null);
    setFeedbackText("");
    setTimer(10);
    setScreenBgColor("#580DA4");
    setAnswerBgColors([]);
  };

 

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(timerInterval);
          handleAnswerSubmission();
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [handleAnswerSubmission]);


//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//         setTimer((prevTimer) => {
//             if (prevTimer === 1) {
//                 clearInterval(timerInterval);
//                 handleAnswerSubmission(); // Show feedback and move to the next question when the timer reaches 1
//             } else if (prevTimer === 2 && selectedAnswerIndex !== null) {
//                 handleAnswerSubmission(); // Show feedback and move to the next question when the timer reaches 2
//             }
//             return prevTimer - 1;
//         });
//     }, 1000);
//     return () => clearInterval(timerInterval);
// }, [handleAnswerSubmission, selectedAnswerIndex]);


  const handleQuit = () => {
    setScreenBgColor("#1F82F2");
    setShowModal(true);
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
    questions?.length > 0 ? questions[currentQuestionIndex]?.question : "Loading...";

  return (
    <>
      <div className={`question-screen ${showModal ? "modal-active" : ""}`} style={{ backgroundColor: screenBgColor }}>
        <div className="timer-container">
          <div className="timer-wrapper">
            <div className="timer">
              <img className="img-timer" src={Timer} alt="timer" />
              <p>{timer}</p>
            </div>
            <div className="quit-div">
              <p className="quit" onClick={handleQuit}>
                Quit
              </p>
            </div>
          </div>
        </div>

        <main className="main-container">
          {loading ? (
            <Circles color="#D9D9D9" height={20} width={20} />
          ) : errorMessage ? (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          ) : (
            <>
              <div className="quest-main-container">
                {currentQuestion && answers.length > 0 && <p className="question-txt">{currentQuestion}</p>}
                <Pagination
                  totalItems={questions.length}
                  activeIndex={activeIndex}
                  onChange={handlePageChange}
                  statuses={statuses}
                />
                <div className="answer-container">
                  <div className="answer-card">
                    {answers &&
                      answers.map((answer, index) => (
                        <div
                          key={index}
                          className={`answer-option ${
                            selectedAnswerIndex === index ? "selected-answer" : ""
                          } ${selectedAnswerIndex !== null ? "disabled" : ""}`}
                          onClick={() => handleAnswerClick(index)}
                          style={{
                            backgroundColor: answerBgColors[index] || "",
                          }}
                        >
                          {answer?.answerText}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
        <EndGameModal isOpen={showModal} onClose={() => setShowModal(false)} onEnd={handleEndGame} />
      </div>
    </>
  );
};

export default QuestionScreen;



