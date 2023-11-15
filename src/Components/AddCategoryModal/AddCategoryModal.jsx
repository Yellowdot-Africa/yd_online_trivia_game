import React, { useState } from "react";
import "../../Components/AddCategoryModal/AddCategoryModal.css";

const AddCategoryModal = ({ isVisible, onClose }) => {
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

      <div className={`add-category-modal ${isVisible ? "visible" : ""}`}>
        <div className="add-category-modal-content">
          <div className="butons">
            <p className="cate-btn">Category </p>
            <p className="cate-que-btn">Questions</p>
          </div>
          <div className="header-container">
            <h3 className="category-heading">Add Category</h3>

            <div className="name-input-data">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                placeholder="What is the category name?"
                value={categoryName}
                onChange={handleCategoryNameChange}
              />

              <label htmlFor="Subcategories">Subcategories</label>
              <input
                type="text"
                placeholder="Add subcategories to this category"
              />
              <p className="small-add-btn">Add</p>

              <label htmlFor="Thumbnail">Thumbnail</label>
              <input
                type="text"
                placeholder="upload image to represent category"
              />

              <label htmlFor="Description">Description</label>
              <input
                type="text"
                placeholder="input some information about this category"
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
  );
};

export default AddCategoryModal;
