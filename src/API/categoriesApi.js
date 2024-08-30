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







// const handleAnswerClick = useCallback(
//   (index) => {
//     if (selectedAnswerIndex === null) {
//       setSelectedAnswerIndex(index);
//       setScreenBgColor("#0B0B2A");

//       const newAnswerBgColors = answers.map((_, i) => (i === index ? "#973CF2" : ""));
//       setAnswerBgColors(newAnswerBgColors);

//       // Call handleAnswerSubmission after 2 seconds
//       setTimeout(handleAnswerSubmission, 2000);
//     }
//   },
//   [selectedAnswerIndex, answers, handleAnswerSubmission] // Ensure handleAnswerSubmission is included in the dependency array
// );


// const handleAnswerClick = useCallback(
//   (index) => {
//     if (selectedAnswerIndex === null) {
//       setSelectedAnswerIndex(index);

//       const isCorrect = answers[index]?.isCorrectAnswer === true;

//       const newAnswerBgColors = answers.map((_, i) => {
//         if (i === index) {
//           return isCorrect ? "#5CBE5A" : "#E37F80"; // Set background color based on correctness
//         }
//         return ""; // No color for unselected answers
//       });

//       setAnswerBgColors(newAnswerBgColors);
//       setScreenBgColor("#4C22B8");
//       setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

//       // Proceed to handle answer submission after 2 seconds
//       setTimeout(handleAnswerSubmission, 2000);
//     }
//   },
//   [selectedAnswerIndex, answers, handleAnswerSubmission]
// );


// const handleAnswerSubmission = useCallback(() => {
//   if (selectedAnswerIndex !== null) {
//     const isCorrect = answers[selectedAnswerIndex]?.isCorrectAnswer === true;

//     const newAnswerBgColors = answers.map((answer, index) => {
//       if (index === selectedAnswerIndex) {
//         return isCorrect ? "#5CBE5A" : "#E37F80";
//       }
//       return answer.isCorrectAnswer ? "#5CBE5A" : "";
//     });

//     setAnswerBgColors(newAnswerBgColors);
//     setScreenBgColor("#4C22B8");
//     setFeedbackText(isCorrect ? "Nice! Correct" : "Oops! Wrong");

//     const updatedStatuses = [...statuses];
//     updatedStatuses[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
//     setStatuses(updatedStatuses);

//     if (isCorrect) {
//       setCorrectAnswers((prev) => prev + 1);
//     } else {
//       setWrongAnswers((prev) => prev + 1);
//     }
//   } else {
//     const updatedStatuses = [...statuses];
//     updatedStatuses[currentQuestionIndex] = "wrong";
//     setStatuses(updatedStatuses);

//     setWrongAnswers((prev) => prev + 1);
//   }

//   // Move to the next question after showing feedback
//   setTimeout(() => {
//     const nextIndex = currentQuestionIndex + 1;
//     if (nextIndex < questions.length) {
//       dispatch(setCurrentQuestionIndex(nextIndex));
//       setActiveIndex(nextIndex);
//       setTimer(10);
//       setScreenBgColor("#580DA4");
//       setAnswerBgColors([]);
//       setFeedbackText("");
//       setSelectedAnswerIndex(null);
//     } else {
//       navigate("/result-page", {
//         state: {
//           correctAnswers,
//           wrongAnswers,
//         },
//       });
//     }
//   }, 2000); // Delay before moving to the next question
// }, [
//   selectedAnswerIndex,
//   answers,
//   statuses,
//   currentQuestionIndex,
//   questions?.length,
//   navigate,
//   dispatch,
//   correctAnswers,
//   wrongAnswers,
// ]);





// const handleAnswerSubmission = useCallback(() => {
//   const isCorrect = selectedAnswerIndex !== null && answers[selectedAnswerIndex]?.isCorrectAnswer === true;

//   const updatedStatuses = [...statuses];
//   updatedStatuses[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
//   setStatuses(updatedStatuses);

//   if (isCorrect) {
//     setCorrectAnswers((prev) => prev + 1);
//   } else {
//     setWrongAnswers((prev) => prev + 1);
//   }

//   // Move to the next question after the feedback has been shown
//   const nextIndex = currentQuestionIndex + 1;
//   if (nextIndex < questions.length) {
//     dispatch(setCurrentQuestionIndex(nextIndex));
//     setActiveIndex(nextIndex);
//     setTimer(10);
//     setScreenBgColor("#580DA4");
//     setAnswerBgColors([]);
//     setFeedbackText("");
//     setSelectedAnswerIndex(null);
//   } else {
//     // Navigate to the result page after the last question
//     navigate("/result-page", {
//       state: {
//         correctAnswers,
//         wrongAnswers,
//       },
//     });
//   }
// }, [
//   selectedAnswerIndex,
//   answers,
//   statuses,
//   currentQuestionIndex,
//   questions?.length,
//   navigate,
//   dispatch,
//   correctAnswers,
//   wrongAnswers,
// ]);




// const handleAnswerClick = useCallback(
//   (index) => {
//     if (selectedAnswerIndex === null) {
//       setSelectedAnswerIndex(index);
//       setScreenBgColor("#0B0B2A");

//       const newAnswerBgColors = answers.map((_, i) => (i === index ? "#973CF2" : ""));
//       setAnswerBgColors(newAnswerBgColors);

//       // Wait for 2 seconds before showing feedback and moving to the next question
//       setTimeout(() => {
//         handleAnswerSubmission(); // Show feedback (correct/wrong) and move to the next question
//       }, 2000);
//     }
//   },
//   [selectedAnswerIndex, answers, handleAnswerSubmission]
// );
