import React, { useState, useEffect } from "react";
import Plus from "../../Assets/Icons/plus-wt.svg";
import PlusDrk from "../../Assets/Icons/plusdrk.svg";
import SaveConfirmationModal from "../../Components/SaveConfirmationModal/SaveConfirmationModal";
import "../../Components/AddCategoryModal/AddCategoryModal.css";
import UpdateQuestionsModal from "../../Components/UpdateQuestionsModal/UpdateQuestionsModal";

const AddCategoryModal = ({ isVisible, onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [newSubcategory, setNewSubcategory] = useState("");
  const [isAddButtonPurple, setIsAddButtonPurple] = useState(false);
  const [isSaveButtonPurple, setIsSaveButtonPurple] = useState(false);

  const [isSaveConfirmationVisible, setSaveConfirmationVisible] =
    useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [isEditingSelection, setIsEditingSelection] = useState(false);
  const [isUpdateQuestionsModalVisible, setUpdateQuestionsModalVisibility] =
    useState(false);

  useEffect(() => {
    console.log("Thumbnail state changed:", thumbnail);

    setIsSaveButtonPurple(thumbnail !== null && thumbnail !== undefined);
  }, [thumbnail]);

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleNewSubcategoryChange = (e) => {
    setNewSubcategory(e.target.value);
  };

  const handleAddSubcategory = () => {
    if (newSubcategory.trim() !== "") {
      setSubcategories([...subcategories, newSubcategory]);
      setNewSubcategory("");
      setIsAddButtonPurple(true);

      setTimeout(() => {
        setIsAddButtonPurple(false);
      }, 1500);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    setIsSaveButtonPurple(true);
  };

  const handleEditSelection = () => {
    setIsEditMode(true);
  };

  const handleAddCategory = () => {
    console.log("Adding category:", { categoryName, subcategories });
    onClose();
    setSaveConfirmationVisible(true);
    setIsAddButtonPurple(true);
    setIsSaveButtonPurple(true);

    setTimeout(() => {
      setIsAddButtonPurple(false);
    }, 1500);
  };
  const handleSaveConfirmationClose = () => {
    setSaveConfirmationVisible(false);
  };

  const openUpdateQuestionsModal = () => {
    setUpdateQuestionsModalVisibility(true);
  };

  const closeUpdateQuestionsModal = () => {
    setUpdateQuestionsModalVisibility(false);
  };

  return (
    <>
      {isVisible && <div className="backdrop" />}

      <div className={`add-category-modal ${isVisible ? "visible" : ""}`}>
        <div className="add-category-modal-content">
          <div className="butons">
            <p className="cate-btn">Category </p>
            <p className="cate-que-btn" onClick={openUpdateQuestionsModal}>
              Questions
            </p>
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
                value={newSubcategory}
                onChange={handleNewSubcategoryChange}
              />
              <p
                className={`small-add-btn ${isAddButtonPurple ? "purple" : ""}`}
                onClick={handleAddSubcategory}
              >
                Add
                <img src={Plus} alt="pls" />
              </p>
              {subcategories.length > 0 && (
                <div className="added-subcategories">
                  <ul className="subcategory-list">
                    {subcategories.map((subcat, index) => (
                      <li key={index}>{subcat}</li>
                    ))}
                  </ul>
                </div>
              )}

              <label htmlFor="Thumbnail">Thumbnail</label>
              <div className="thumbnail-input-container">
                <input
                  className="thumbnail"
                  type="file"
                  accept="image/*"
                  placeholder="upload image to represent category"
                  onChange={handleThumbnailChange}
                />
                {thumbnail && (
                  <>
                    <p
                      className="edit-selection-text"
                      onClick={handleEditSelection}
                    >
                      edit selection
                    </p>
                  </>
                )}
              </div>

              <img
                className="plusdrk"
                src={PlusDrk}
                alt="plsdrk"
                onClick={() =>
                  document.querySelector('input[type="file"]').click()
                }
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

              <p
                className={`buttn-btn ${isSaveButtonPurple ? "purple" : ""}`}
                onClick={handleAddCategory}
              >
                Save
              </p>
            </div>
          </div>
          <UpdateQuestionsModal
            isVisible={isUpdateQuestionsModalVisible}
            onClose={closeUpdateQuestionsModal}
            switchToAddCategoryModal={() =>
              setUpdateQuestionsModalVisibility(false)
            }
          />
        </div>
      </div>
      <SaveConfirmationModal
        isVisible={isSaveConfirmationVisible}
        onClose={handleSaveConfirmationClose}
      />
    </>
  );
};

export default AddCategoryModal;
