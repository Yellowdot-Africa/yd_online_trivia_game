import React, {useState} from 'react'
import "../../Components/UpdateQuestionsModal/UpdateQuestionsModal.css";


const UpdateQuestionsModal = ({ isVisible, onClose })=> {

    const [categoryName, setCategoryName] = useState("");

    const handleCategoryNameChange = (e) => {
      setCategoryName(e.target.value);
    };
  
    const handleAddCategory = () => {
      console.log("Adding category:", categoryName);
      onClose();
    };
  
  return (
    <>
{isVisible && <div className="backdrop" />}

<div className={`update-question-modal ${isVisible ? "visible" : ""}`}>
  <div className="update-question-modal-content">
    <div className="butonns">
      <p className="catte-btn">Category </p>
      <p className="catte-que-btn">Questions</p>
    </div>
    <div className="header-container">
        <div className='que-header-div'>
      <h3 className="question-heading">Add Question</h3>
<small>bulk upload</small>
</div>
      <div className="name-input-data">
        <label htmlFor="Question">Question</label>
        <input
          type="text"
          placeholder="Type in question"
          value={categoryName}
          onChange={handleCategoryNameChange}
        />

        <label htmlFor="Answer options">Answer options</label>
        <input
          type="text"
          placeholder="Type in answer options and select the correct option"
        />
        <p className="small-add-btn">Add</p>

        <label htmlFor="Category">Category</label>
        <input
          type="text"
          placeholder="History"
        />

        <label htmlFor="Sub Category">Sub Category</label>
        <input
          type="text"
          placeholder="Prehistoric"
        />
      </div>
      <div className="buttons-container">
        <p className="buttn" onClick={onClose}>
          Cancel
        </p>
        <p className="buttn-btn" onClick={handleAddCategory}>
          Save
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default UpdateQuestionsModal