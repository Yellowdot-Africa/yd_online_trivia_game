import React from "react";
import Play from "../assets/Icons/play.svg";
import Football from "../assets/Images/new-football.png";
import Politics from "../assets/Images/history-new.png";
import Music from "../assets/Images/music-new.png";
import Movies from "../assets/Images/movie-new.png";
import "../Styles/PopularCategories.css";

const PopularCategories = () => {
  return (
    <>
    <div className="testing">

    
      <div className="categories-container">
        <div className="categories-heading">
          <h4>Popular Categories</h4>
          <p>We know how wide your interests are...</p>
        </div>

        <div className="categoryy-grid">
          <div className="football category-item">
            <img src={Football} alt="" />
            <h4>Football</h4>
            <div className="count-container">
              <div className="play-img">
                <img src={Play} alt="" />
              </div>
              <p className="total-countt">1.2K</p>
            </div>
          </div>

          <div className="history category-item">
            <img src={Politics} alt="" />
            <h4>Politics</h4>
            <div className="count-container">
              <div className="play-img">
                <img src={Play} alt="" />
              </div>
              <p className="total-countt">1.2K</p>
            </div>
          </div>

          <div className="music category-item">
            <img src={Music} alt="" />

            <h4>Music</h4>
            <div className="count-container">
              <div className="play-img">
                <img src={Play} alt="" />
              </div>
              <p className="total-countt">1.2K</p>
            </div>
          </div>

          <div className="movie category-item">
            <img src={Movies} alt="" />
            <h4>Movies</h4>
            <div className="count-container">
              <div className="play-img">
                <img src={Play} alt="" />
              </div>
              <p className="total-countt">1.2K</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PopularCategories;
