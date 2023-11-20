import React, { useState } from "react";
import CategoryIcon from "../Assets/Icons/dashiconscategory.svg";
import Plus from "../Assets/Icons/plusw.svg";
import Question from "../Assets/Icons/que.svg";
import Notification from "../Assets/Icons/notif.svg";
import PlusB from "../Assets/Icons/plusb.svg";
import AddCategoryModal from "../Components/AddCategoryModal/AddCategoryModal";
import UpdateQuestionsModal from "../Components/UpdateQuestionsModal/UpdateQuestionsModal";
import SendNotificationModal from "../Components/SendNotificationModal/SendNotificationModal";
import "../Styles/Button.css";

const Button = () => {
  const [isAddCategoryModalVisible, setAddCategoryModalVisibility] = useState(false);
const [isUpdateQuestionModalVisible, setIsUpdateQuestionModalVisibility] = useState(false);
const [isSendNotificationModalVisible, setIsSendNotificationModalVisibility] = useState(false);


  const openAddCategoryModal = () => {
    setAddCategoryModalVisibility(true);
    setIsUpdateQuestionModalVisibility(false);
    setIsSendNotificationModalVisibility(false);
  };

  const closeAddCategoryModal = () => {
    setAddCategoryModalVisibility(false);
  };

  const openUpdateQuestionModal = () => {
    setIsUpdateQuestionModalVisibility(true);
    setAddCategoryModalVisibility(false);
    setIsSendNotificationModalVisibility(false);
  };

  const closeUpdateQuestionModal = () => {
    setIsUpdateQuestionModalVisibility(false);
  };


  const openSendNotificationModal = () =>{
    setIsSendNotificationModalVisibility(true);
    setAddCategoryModalVisibility(false);
    setIsUpdateQuestionModalVisibility(false);
  }

  const closeSendNotificationModal = () => {
    setIsSendNotificationModalVisibility (false);
  }
  return (
    <>
      <div>
        <div className="button-box ">
          <button className="category-button" onClick={openAddCategoryModal}>
            <div className="icons">
              <img src={CategoryIcon} alt="cate-icon" />
            </div>

            <div className="btn-text">
              <p className="add">ADD</p>
              <p className="categ">Category(4)</p>
            </div>
            <img src={Plus} alt="plus" />
          </button>
          <button className="que-btn" onClick={openUpdateQuestionModal}>
            <div className="icons">
              <img src={Question} alt="cate-icon" />
            </div>
            <div className="btn-text">
              <p className="add">UPDATE</p>
              <p className="categ">Questions</p>
            </div>
            <img src={PlusB} alt="plus" />
          </button>
          <button className="notif-btn" onClick={openSendNotificationModal}>
            <div className="icons">
              <img src={Notification} alt="cate-icon" />
            </div>
            <div className="btn-text">
              <p className="add">SEND</p>
              <p className="categ">Notifications</p>
            </div>
            <img src={PlusB} alt="plus" />
          </button>

          <AddCategoryModal
            isVisible={isAddCategoryModalVisible}
            onClose={() => setAddCategoryModalVisibility(false)}

            // onClose={closeAddCategoryModal}
          />

          <UpdateQuestionsModal
            isVisible={isUpdateQuestionModalVisible}
            onClose={() => setIsUpdateQuestionModalVisibility(false)}

            // onClose={closeUpdateQuestionModal}
          />

          <SendNotificationModal
          isVisible = {isSendNotificationModalVisible}
          onClose={() => setIsSendNotificationModalVisibility(false)}

          // onClose={closeSendNotificationModal}
          />
        </div>
      </div>
    </>
  );
};

export default Button;
