import React, { useState } from "react";
import "../../../Styles/QuestionScreen1.css";

const QuestionScreen = ({
  question,
  onAnswerSelect,
  isCorrect,
  showFeedback,
  // selectedAnswer,
  isAnswerDisabled,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerClick = (answerText, isAnswerCorrect) => {
    if (isAnswerDisabled) return;
    setSelectedAnswer(answerText);
    const selectedFeedback = selectedAnswer
      ? isAnswerCorrect
        ? "Correct!"
        : "Wrong!"
      : "Wrong!";
    onAnswerSelect(answerText, isAnswerCorrect || false, selectedFeedback);

    setSelectedAnswer(answerText);
  };

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
              selectedAnswer === answer.answerText ? "selected-answer" : ""
            } ${
              showFeedback && selectedAnswer === answer.answerText
                ? isCorrect
                  ? "correct "
                  : "wrong "
                : ""
            }`}
            onClick={() =>
              handleAnswerClick(answer.answerText, answer.isCorrectAnswer)
            }
          >
            {answer.answerText}
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionScreen;
