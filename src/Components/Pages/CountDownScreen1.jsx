import React, { useState, useEffect } from "react";
import "../../Styles/CountDownScreen1.css";
import sadMask from "../../assets/icons/mask-sad-fill.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const CountDown1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [countdown, setCountdown] = useState(12);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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

  const handleAnswerSelect = (answer) => {
    if (showFeedback) {
      return;
    }

    setSelectedAnswer(answer);

    const isCorrect = answer === correctAnswer;
    setIsCorrect(isCorrect);
    setShowFeedback(true);

    setTimeout(() => {
      navigate("/gamecomplete");
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
          <p>What is the largest stadium in Lagos?</p>
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
