import React,{useState} from "react";

const QuestionScreen4 = ({ question, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };
  return (
   <>
<div>
<p>{question.question}</p>
      <div className="answer-options">
        {question.answers.map((answer) => (
          <div
            key={answer.id}
            className={`answer-option ${
              selectedAnswer === answer.answerText ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(answer.answerText)}
          >
            {answer.answerText}
          </div>
        ))}
      </div>
      <button onClick={() => onAnswerSelect(selectedAnswer)}>Next</button>
</div>
  </>
  )
};

export default QuestionScreen4;