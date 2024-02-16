import React, { useState, useEffect } from "react";
import More from "../assets/Icons/more.svg";
import Play from "../assets/Icons/play.svg";
import Football from "../assets/Images/football.png";
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
          <h4>Football</h4>

          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">10,200</p>
              </div>
            </div>
          </div>
        </div>

        <div className="music category-item">
          <h4>Music</h4>
          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">10,200</p>
              </div>
            </div>
          </div>
        </div>

        <div className="movie category-item">
          <h4>Movies</h4>
          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">1,500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="history category-item">
          <h4>History</h4>
          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">1,800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moree">
        <a href="#">
          Load More
          
        </a>
      </div>
    </div>
  );
};

export default CategoriesSection;
