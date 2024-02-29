import React, { useState, useEffect } from "react";
import Play from "../assets/Icons/play.svg";
import Football from "../assets/Images/new-football.png";
import Music from "../assets/Images/music-new.png";
import History from "../assets/Images/history-new.png";
import Movie from "../assets/Images/movie-new.png";

import "../Styles/CategoriesSection.css";
import axios from "axios";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-container">
      <div className="category-heading">
        <h4>Popular categories</h4>
        <p>We know how wide your interests are...</p>
      </div>

      <div className="category-grid">
        <div className="football category-item">
          <img src={Football} alt="football" />
          <h4>Football</h4>
          <div className="play-cont">
            <div className="play">
              <img src={Play} alt="" />
            </div>
            <p className="play-no">1.2K</p>

          </div>
    
        </div>

        <div className="history category-item">
        <img src={History} alt="history" />
          <h4>History</h4>
          <div className="play-cont">
            <div className="play">
              <img src={Play} alt="" />
            </div>
            <p className="play-no">1.2K</p>

          </div>
        </div>

        <div className="music category-item">
        <img src={Music} alt="music" />
          <h4>Music</h4>
          <div className="play-cont">
            <div className="play">
              <img src={Play} alt="" />
            </div>
            <p className="play-no">1.2K</p>

          </div>
          
        </div>

        <div className="movie category-item">
        <img src={Movie} alt="movie" />

          <h4>Movies</h4>
          <div className="play-cont">
            <div className="play">
              <img src={Play} alt="" />
            </div>
            <p className="play-no">1.2K</p>

          </div>
        </div>

       
      </div>
      <div className="load-more">
        <a href="#">Load More</a>
      </div>
    </div>
  );
};

export default CategoriesSection;
