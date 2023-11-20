import React, { useState } from "react";
import Plus from "../../Assets/Icons/plus-wt.svg";
import Upload from "../../Assets/Icons/upload.svg";
import QuestionSavedModal from "../../Components/QuestionSavedModal/QuestionSavedModal";

import "../../Components/UpdateQuestionsModal/UpdateQuestionsModal.css";

const UpdateQuestionsModal = ({
  isVisible,
  onClose,
  switchToAddCategoryModal,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("History");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Prehistoric");
  const [answerOptions, setAnswerOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [isQuestionSavedVisible, setQuestionSavedVisible] = useState(false);

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    console.log("Adding category:", categoryName);
    onClose();

    setQuestionSavedVisible(true);
  };

  const handleAddOption = () => {
    if (newOption.trim() !== "") {
      setAnswerOptions([...answerOptions, newOption.trim()]);
      setNewOption("");
    }
  };

  const handleQuestionSavedClose = () => {
    setQuestionSavedVisible(false);
  };

  const handleCancel = () => {
    onClose();
    switchToAddCategoryModal();
  };

  return (
    <>
      {isVisible && <div className="backdrop" />}

      <div className={`update-question-modal ${isVisible ? "visible" : ""}`}>
        <div className="update-question-modal-content">
          <div className="butonns">
            <p className="catte-btn" onClick={switchToAddCategoryModal}>
              Category{" "}
            </p>
            <p className="catte-que-btn">Questions</p>
          </div>
          <div className="header-container">
            <div className="que-header-div">
              <h3 className="question-heading">Add Question</h3>
              <div className="bulk-upload">
                <small>bulk upload</small>
                <img src={Upload} alt="upload" />
              </div>
            </div>
            <div className="name-input-data">
              <label htmlFor="Question">Question</label>
              <input
                type="text"
                // className='input'
                placeholder="Type in question"
                value={categoryName}
                onChange={handleCategoryNameChange}
              />

              <label htmlFor="Answer options">Answer options</label>
              <div className="options-container">
                <input
                  type="text"
                  placeholder="Type in answer option"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                />
                <p className="small-add-btn" onClick={handleAddOption}>
                  Add
                  <img src={Plus} alt="pls" />
                </p>
              </div>
              {answerOptions.length > 0 && (
                // <div className="added-options">
                //   <ul className="options-list">
                //     {answerOptions.map((option, index) => (
                //       <li key={index}>{option}</li>
                //     ))}
                //   </ul>
                // </div>
                <div className="added-options">
                  {answerOptions.map((option, index) => (
                    <div key={index} className="radio-option">
                      <input
                        type="radio"
                        id={`option${index}`}
                        name="answerOptions"
                        value={option}
                      />

                      <label htmlFor={`option${index}`}>{option}</label>
                    </div>
                  ))}
                </div>
              )}

              <label htmlFor="Category">Category</label>
              <input type="text" placeholder="History" />

              <label htmlFor="Sub Category">Sub Category</label>
              <input type="text" placeholder="Prehistoric" />
            </div>
            <div className="butttons-container">
              <p className="butttn" onClick={handleCancel}>
                {/* // onClick={onClose}> */}
                Cancel
              </p>
              <p className="butttn-btn" onClick={handleAddCategory}>
                Save
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuestionSavedModal
        isVisible={isQuestionSavedVisible}
        onClose={handleQuestionSavedClose}
      />
    </>
  );
};

export default UpdateQuestionsModal;
