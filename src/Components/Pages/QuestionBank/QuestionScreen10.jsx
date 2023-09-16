import React, { useState,useEffect } from "react";
import "../../../Styles/QuestionScreen1.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const QuestionScreen10 = ({ question, onAnswerSelect }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigate = useNavigate();

  const handleAnswerClick = (answerText) => {
    setSelectedAnswer(answerText);

    const selectedAnswerObject = question.answers.find(
      (answer) => answer.answerText === answerText
    );

    const isAnswerCorrect = selectedAnswerObject?.isCorrectAnswer;
    setIsCorrect(isAnswerCorrect);
    onAnswerSelect(answerText, isAnswerCorrect);
    setShowFeedback(true);
  };

  useEffect(() => {
    if (showFeedback && isCorrect !== null) {
      const timeoutId = setTimeout(() => {
        navigate("/gamecomplete"); 
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [showFeedback, isCorrect, navigate]);



  return (
    <div>
      <p>{question.question}</p>

      <div className="answer-options">
        {showFeedback && (
          <div className="feedback">
            {isCorrect ? (
              <p className="correct-feedback">Correct!</p>
            ) : (
              <p className="wrong-feedback">Wrong!</p>
            )}
          </div>
        )}
        {question.answers.map((answer) => (
          <div
            key={answer.id}
            className={`answer-option ${
              selectedAnswer === answer.answerText
                ? isCorrect === null
                  ? "selected"
                  : isCorrect
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleAnswerClick(answer.answerText)}
          >
            {answer.answerText}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen10;
