// import React from "react";
// import "../../Styles/CountDown1.css";

// const CountDown1 = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="">
//         <div className="countdown-container">
//           <div className="nine">
//             <p>9</p>
//           </div>
//         </div>
//         <div className="text-contn">
//           <p>What is the name of the oldest footballer alive?</p>
//         </div>
//         <div className="names">
//           <p>Tilewa</p>
//           <p>Me</p>
//           <p>Usman</p>
//           <p>Gift</p>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default CountDown1;

import React, { useState, useEffect } from "react";
import "../../Styles/CountDown1.css";

const CountDown1 = () => {
  const [countdown, setCountdown] = useState(9);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerBackgroundColor, setAnswerBackgroundColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 4) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    // setShowFeedback(true);

    const correctAnswer = "Me";
    const isCorrect = answer === correctAnswer;

    setIsCorrect(isCorrect);

    const backgroundColor = isCorrect ? "green" : "red";
    setAnswerBackgroundColor(backgroundColor);
    setShowFeedback(true);
  };

  return (
    <>
      <div className="container">
        <div className="">
          <div className="countdown-container">
            <div className="countdown-nine">
              <p>{countdown}</p>
            </div>
          </div>
          <div className="text-contn">
            <p>What is the name of the oldest footballer alive?</p>
          </div>
          <div className="names">
            <p
              onClick={() => handleAnswerSelect("Tilewa")}
              style={{
                backgroundColor:
                  selectedAnswer === "Tilewa" ? answerBackgroundColor : "",
              }}
            >
              Tilewa
            </p>
            <p
              onClick={() => handleAnswerSelect("Me")}
              style={{
                backgroundColor:
                  selectedAnswer === "Me" ? answerBackgroundColor : "",
              }}
            >
              Me
            </p>
            <p
              onClick={() => handleAnswerSelect("Usman")}
              style={{
                backgroundColor:
                  selectedAnswer === "Usman" ? answerBackgroundColor : "",
              }}
            >
              Usman
            </p>
            <p
              onClick={() => handleAnswerSelect("Gift")}
              style={{
                backgroundColor:
                  selectedAnswer === "Gift" ? answerBackgroundColor : "",
              }}
            >
              Gift
            </p>
          </div>
          {showFeedback && (
            <div className="feedback">
              {isCorrect ? <p>Correct!</p> : <p>Wrong. Try again.</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CountDown1;
