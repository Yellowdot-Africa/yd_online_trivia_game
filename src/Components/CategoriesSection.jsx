import React from "react";
import More from "../assets/Icons/more.svg";
import Play from "../assets/Icons/play.svg";
import "../Styles/CategoriesSection.css";

const CategoriesSection = () => {
  return (
    <div className="category-container">
      <div className="category-heading">
        <h4>Popular categories</h4>
        <p>Sign in to enjoy even more</p>
      </div>

      <div className="category-grid">
        <div className="football category-item">
          <h4>Football</h4>
          <button>PLAY NOW</button>
          <div className="no">
            {" "}
            <img src={Play} alt="" />
            1,200
          </div>
        </div>

        <div className="music category-item">
          <h4>Music</h4>
          <button>PLAY NOW</button>
          <div className="no">
            <img src={Play} alt="" />
            10,200
          </div>
        </div>

        <div className="history category-item">
          <h4>History</h4>
          <button>PLAY NOW</button>
          <div className="no">
            <img src={Play} alt="" />
            1,800
          </div>
        </div>
      </div>
      <div className="moree">
        <a href="#">
          More
          <img src={More} alt="more" />
        </a>
      </div>
    </div>
  );
};

export default CategoriesSection;
