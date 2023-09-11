// import React, { useState, useEffect } from "react";
// import "../../Styles/CountDown1.css";
// import sadMask from "../../assets/icons/mask-sad-fill.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";

// const CountDown1 = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

//   const [countdown, setCountdown] = useState(9);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (countdown > 1) {
//         setCountdown(countdown - 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [countdown]);

//   const correctAnswer = "Me";

//   const handleAnswerSelect = (answer) => {
//     if (showFeedback) {
//       return;
//     }

//     setSelectedAnswer(answer);

//     const isCorrect = answer === correctAnswer;
//     setIsCorrect(isCorrect);
//     setShowFeedback(true);

//     setTimeout(() => {
//       navigate("/countdownscreen");
//     }, 2000);
//   };

//   return (
//     <div className="container" data-aos="zoom-in">
//       <div className="">
//         <div className="countdown-container">
//           <div className="countdown-nine">
//             {showFeedback ? (
//               isCorrect ? (
//                 <img src={sadMask} alt="Correct" />
//               ) : (
//                 <img src={sadMask} alt="Wrong" />
//               )
//             ) : (
//               <p>{countdown}</p>
//             )}
//           </div>
//         </div>
//         <div className="text-contn">
//           <p>What is the name of the oldest footballer alive?</p>
//         </div>
//         {showFeedback && (
//           <div className="feedback">
//             {isCorrect ? (
//               <p className="correct-feedback">Correct!</p>
//             ) : (
//               <p className="wrong-feedback">Wrong!</p>
//             )}
//           </div>
//         )}
//         <div className="names">
//           <p
//             className="selection"
//             onClick={() => handleAnswerSelect("Tilewa")}
//             style={{
//               backgroundColor:
//                 selectedAnswer === "Tilewa"
//                   ? isCorrect
//                     ? "#8CD49C"
//                     : "#D48C8C"
//                   : "",
//             }}
//           >
//             Tilewa
//           </p>
//           <p
//             className="selection"
//             onClick={() => handleAnswerSelect("Me")}
//             style={{
//               backgroundColor:
//                 selectedAnswer === "Me"
//                   ? isCorrect
//                     ? "#8CD49C"
//                     : "#D48C8C"
//                   : "",
//             }}
//           >
//             Me
//           </p>
//           <p
//             className="selection"
//             onClick={() => handleAnswerSelect("Usman")}
//             style={{
//               backgroundColor:
//                 selectedAnswer === "Usman"
//                   ? isCorrect
//                     ? "#8CD49C"
//                     : "#D48C8C"
//                   : "",
//             }}
//           >
//             Usman
//           </p>
//           <p
//             className="selection"
//             onClick={() => handleAnswerSelect("Gift")}
//             style={{
//               backgroundColor:
//                 selectedAnswer === "Gift"
//                   ? isCorrect
//                     ? "#8CD49C"
//                     : "#D48C8C"
//                   : "",
//             }}
//           >
//             Gift
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountDown1;




// import React, { useState, useEffect } from "react";
// import "../../Styles/CountDown1.css";
// import sadMask from "../../assets/icons/mask-sad-fill.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios

// const CountDown1 = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

//   const [countdown, setCountdown] = useState(9);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (countdown > 1) {
//         setCountdown(countdown - 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [countdown]);

//   const correctAnswer = "Me";

//   const handleAnswerSelect = (answer) => {
//     if (showFeedback) {
//       return;
//     }

//     setSelectedAnswer(answer);

//     const isCorrect = answer === correctAnswer;
//     setIsCorrect(isCorrect);
//     setShowFeedback(true);

//     setTimeout(() => {
//       // Call the API to add a new question
//       addNewQuestion("What is the capital of France?", "Paris"); // Example question and answer
//       navigate("/countdownscreen");
//     }, 2000);
//   };

//   // Function to add a new question
//   const addNewQuestion = async (question, answer) => {
//     try {
//       const response = await axios.post(
//         "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/AddQuestion",
//         {
//           question,
//           answer,
//         },
//         {
//           headers: {
//             "Accept": "*/*",
//             "Content-Type": "application/json",
//             // Add any authorization headers if required
//           },
//         }
//       );

//       console.log("Question added successfully:", response.data);
//     } catch (error) {
//       console.error("Error adding question:", error);
//     }
//   };

//   return (
//     <div className="container" data-aos="zoom-in">
//       {/* ... rest of your component ... */}
//     </div>
//   );
// };

// export default CountDown1;





// import React, { useState, useEffect } from "react";
// import "../../Styles/CountDown1.css";
// import sadMask from "../../assets/icons/mask-sad-fill.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CountDown1 = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

//   const [countdown, setCountdown] = useState(9);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = sessionStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       console.log("token", token)
//       try {
//         const response = await axios.get(
//           "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestions",
//           {
//             headers: {
//               Accept: "*/*",
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setQuestions(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//         console.error("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (countdown > 1) {
//         setCountdown(countdown - 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [countdown]);

//   const correctAnswer = "Me";

//   const handleAnswerSelect = (answer) => {
//     if (showFeedback) {
//       return;
//     }

//     setSelectedAnswer(answer);

//     const isCorrect = answer === correctAnswer;
//     setIsCorrect(isCorrect);
//     setShowFeedback(true);

//     setTimeout(() => {
//       navigate("/countdownscreen");
//     }, 2000);
//   };

//   return (
//     <div className="container" data-aos="zoom-in">
//       <div className="">
//         <div className="countdown-container">
//           <div className="countdown-nine">
//             {showFeedback ? (
//               isCorrect ? (
//                 <img src={sadMask} alt="Correct" />
//               ) : (
//                 <img src={sadMask} alt="Wrong" />
//               )
//             ) : (
//               <p>{countdown}</p>
//             )}
//           </div>
//         </div>
//         {loading ? (
//           <p className="loading">Loading...</p>
//         ) : error ? (
//           <p className="loading">Error fetching game categories: {error}</p>
//         ) : (
//           <div className="text-contn">
//             <p>What is the name of the oldest footballer alive?</p>
//           </div>
//         )}
//         {showFeedback && (
//           <div className="feedback">
//             {isCorrect ? (
//               <p className="correct-feedback">Correct!</p>
//             ) : (
//               <p className="wrong-feedback">Wrong!</p>
//             )}
//           </div>
//         )}
//         <div className="names">
//           {questions.map((question) => (
//             <p
//               className="selection"
//               key={question.id}
//               onClick={() => handleAnswerSelect(question.answer)}
//               style={{
//                 backgroundColor:
//                   selectedAnswer === question.answer
//                     ? isCorrect
//                       ? "#8CD49C"
//                       : "#D48C8C"
//                     : "",
//               }}
//             >
//               {question.text}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountDown1;



import React, { useState, useEffect } from "react";
import "../../Styles/CountDown1.css";
import sadMask from "../../assets/icons/mask-sad-fill.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const CountDown1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [countdown, setCountdown] = useState(9);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const token = sessionStorage.getItem("token");
  console.log("token", token);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const correctAnswer = "Me";

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        
        const newQuestion = {
          "questionID": 1,
          "questionText": "what is the first book in the bible?",
          "categoryID": 4,
          "level": 5,
          "language": "English",
          "answers": [
            {
              "answerID": 1,
              "answerText": "yes",
              "isCorrectAnswer": true,
              "score": 5
            }
          ]
        };
        await axios.post(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/AddQuestion",
          newQuestion,
          {
            headers: {
              "Accept": "*/*",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        const updatedQuestion = {
          "id": 1, 
          "questionText": "what is the first book in the bible?",
          "categoryID": 4,
          "level": 5,
          "language": "English",
          "answers": [
            {
              "answerID": 1,
              "answerText": "yes",
              "isCorrectAnswer": true,
              "score": 5
            }
          ]
        };
        await axios.put(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/UpdateQuestion",
          updatedQuestion,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        const categoryId = 4; 
        const allQuestionsResponse = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestions?categoryId=${categoryId}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        const allQuestions = allQuestionsResponse.data;

        const userId = 8012345678; // Replace with the actual user ID
        const unattemptedQuestionsResponse = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Questions/GetQuestionsForUser?userId=${userId}&categoryId=${categoryId}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        const unattemptedQuestions = unattemptedQuestionsResponse.data;

        // Handle the retrieved data as needed
        console.log("All Questions:", allQuestions);
        console.log("Unattempted Questions:", unattemptedQuestions);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (answer) => {
    if (showFeedback) {
      return;
    }

    setSelectedAnswer(answer);

    const isCorrect = answer === correctAnswer;
    setIsCorrect(isCorrect);
    setShowFeedback(true);

    setTimeout(() => {
      navigate("/countdownscreen");
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
          <p>What is the name of the oldest footballer alive?</p>
        </div>
        {showFeedback && (
          <div className="feedback">
            {isCorrect ? (
              <p className="correct-feedback">Correct!</p>
            ) : (
              <p className="wrong-feedback">Wrong!</p>
            )}
          </div>
        )}
        <div className="names">
          <p
            className="selection"
            onClick={() => handleAnswerSelect("Tilewa")}
            style={{
              backgroundColor:
                selectedAnswer === "Tilewa"
                  ? isCorrect
                    ? "#8CD49C"
                    : "#D48C8C"
                  : "",
            }}
          >
            Tilewa
          </p>
          <p
            className="selection"
            onClick={() => handleAnswerSelect("Me")}
            style={{
              backgroundColor:
                selectedAnswer === "Me"
                  ? isCorrect
                    ? "#8CD49C"
                    : "#D48C8C"
                  : "",
            }}
          >
            Me
          </p>
          <p
            className="selection"
            onClick={() => handleAnswerSelect("Usman")}
            style={{
              backgroundColor:
                selectedAnswer === "Usman"
                  ? isCorrect
                    ? "#8CD49C"
                    : "#D48C8C"
                  : "",
            }}
          >
            Usman
          </p>
          <p
            className="selection"
            onClick={() => handleAnswerSelect("Gift")}
            style={{
              backgroundColor:
                selectedAnswer === "Gift"
                  ? isCorrect
                    ? "#8CD49C"
                    : "#D48C8C"
                  : "",
            }}
          >
            Gift
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDown1;
