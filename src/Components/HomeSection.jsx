import React from "react";
import { Carousel } from "react-bootstrap";
import Arrow from "../assets/Icons/arrow.svg";
import Settings from "../assets/Icons/settings.svg";
import HomeIcon from "../assets/Icons/home-icon.png";
import "../Pages/HomePage/HomePage.css";
const HomeSection = () => {
  return (
    <>
      <div className="home-section">
        <div className="home-section-container">
          <div className="links-icon">
            <a href="/settings">
              <img src={Settings} alt="setting" />
            </a>
            <a href="/loading2">
              <img src={HomeIcon} alt="home" />
            </a>
          </div>
          <div className="welcome-section">
            <h1>Welcome "User Name"</h1>
            <div className="homee-deetails">
              <p>Home</p>
              <div className="customs-link">
                <a className="link" href="/account">
                  Acct:N1,050.00{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="special-games-section">
          <h2>Special Games</h2>
          <div className="carousel-container">
            <div className="cards-container">
              <div className="special-game-card">
                <h3>Todays Game</h3>
                <h4>Play</h4>
                <img src={Arrow} alt="arrw" />
              </div>
              <div className="special-game-card">
                <h3>Todays Game</h3>
                <h4>Play</h4>
                <img src={Arrow} alt="" />
              </div>
              <div className="special-game-card">
                <h3>Todays Game</h3>
                <h4>Play</h4>
                <img src={Arrow} alt="arrw" />
              </div>
            </div>
          </div>
        </div>

        <div className="popular-categories-section">
          <div className="pop-categories-link">
            <h2>Popular Categories</h2>
            <a className="more-llink" href="">
              More
            </a>
          </div>

          <div className="cards-containers">
            <div className="popular-categories-column">
              <div className="popular-categories-card mbottom">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>
            <div className="popular-categories-column">
              <div className="popular-categories-card mtop ">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>
            <div className="popular-categories-column">
              <div className="popular-categories-card mbottom">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>
            <div className="popular-categories-column">
              <div className="popular-categories-card mtop">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>

            <div className="popular-categories-column">
              <div className="popular-categories-card mbottom">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>

            <div className="popular-categories-column">
              <div className="popular-categories-card mtop">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>
            <div className="popular-categories-column">
              <div className="popular-categories-card mbottom">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>
            <div className="popular-categories-column">
              <div className="popular-categories-card mtop">
                <div className="empty-div"></div>
                <h4>Title</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
