import React from "react";
import CategoryIcon from "../Assets/Icons/dashiconscategory.svg";
import Plus from "../Assets/Icons/plusw.svg";
import Question from "../Assets/Icons/que.svg";
import Notification from "../Assets/Icons/notif.svg";
import PlusB from "../Assets/Icons/plusb.svg";
import "../Styles/Button.css";

const Button = () => {
  return (
    <>
      <div>
        <div className="button-box ">
          <button className="category-button">
            <div className="icons">
              <img src={CategoryIcon} alt="cate-icon" />
            </div>

            <div className="btn-text">
              <p className="add">ADD</p>
              <p className="categ">Category(4)</p>
            </div>
            <img src={Plus} alt="plus" />
          </button>

          <button className="que-btn">
            <div className="icons">
              <img src={Question} alt="cate-icon" />
            </div>
            <div className="btn-text">
              <p className="add">UPDATE</p>
              <p className="categ">Questions</p>
            </div>

            <img src={PlusB} alt="plus" />
          </button>
          <button className="notif-btn">
            <div className="icons">
              <img src={Notification} alt="cate-icon" />
            </div>

            <div className="btn-text">
              <p className="add">SEND</p>
              <p className="categ">Notifications</p>
            </div>

            <img src={PlusB} alt="plus" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
