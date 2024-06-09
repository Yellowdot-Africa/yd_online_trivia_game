import React from "react";
import Play from "../assets/Icons/play.svg";
import Football from "../assets/Images/new-football.png";
import Politics from "../assets/Images/history-new.png";
import Music from "../assets/Images/music-new.png";
import Movies from "../assets/Images/movie-new.png";
import "../Styles/TriviaCategories.css";
import { useNavigate } from "react-router-dom";




const TriviaCategories = () => {

  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/getting-started");
  };

  return (
    <>
      <div className="category-container">
        <div className="category-heading">
          <h4>Trivia Categories</h4>
          <p>We know how wide your interests are...</p>
        </div>

        <div className="category-grid">
          <div className="football category-item">
            <img src={Football} alt="" />
            <div className="category-details">
              <div className="countt-container">
                <h4>Sports</h4>
                <p className="total-count">1.2K</p>
              </div>
              <button className="play-btn"  onClick={() => handleCategoryClick()}>Play</button>
            </div>
          </div>

          <div className="history category-item">
            <img src={Politics} alt="" />
            <div className="category-details">
              <div className="countt-container">
                <h4>History</h4>
                <p className="total-count">1.2K</p>
              </div>
              <button className="play-btn"  onClick={() => handleCategoryClick()}>Play</button>
            </div>
          </div>

          <div className="music category-item">
            <img src={Music} alt="" />
            <div className="category-details">
              <div className="countt-container">
                <h4>Music</h4>
                <p className="total-count">1.2K</p>
              </div>
              <button className="play-btn"  onClick={() => handleCategoryClick()}>Play</button>
            </div>
          </div>

          <div className="movie category-item">
            <img src={Movies} alt="" />
            <div className="category-details">
              <div className="countt-container">
                <h4>Movies</h4>
                <p className="total-count">1.2K</p>
              </div>
              <button className="play-btn"  onClick={() => handleCategoryClick()}>Play</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriviaCategories;
