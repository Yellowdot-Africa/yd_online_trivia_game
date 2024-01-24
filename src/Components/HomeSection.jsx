import React from "react";
import { Carousel } from "react-bootstrap";
import Arrow from "../assets/Icons/arrow.svg";

const HomeSection = () => {
  return (
    <>
      <div className="home-section">
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

        <div className="special-games-section">
          <h2>Special Games</h2>
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

        <div className="popular-categories-section">
          <div className="pop-categories-link">
            <h2>Popular Categories</h2>
            <a className="more-llink" href="">
              More
            </a>
          </div>

          <div className="cards-containers">
            <div className="popular-categories-card">
              <h3></h3>
              <h4>Title</h4>
            </div>
            <div className="popular-categories-card">
              <h3></h3>
              <h4>Title</h4>
            </div>
            <div className="popular-categories-card">
              <h3></h3>
              <h4>Title</h4>
            </div>
            <div className="popular-categories-card">
              <h3></h3>
              <h4>Title</h4>
            </div>

            <div className="popular-categories-column">
              <h3></h3>
              <h4>Title</h4>
            </div>
            <div className="popular-categories-column">
              <h3></h3>
              <h4>Title</h4>
            </div>
            <div className="popular-categories-column">
              <h3></h3>
              <h4>Title</h4>
            </div>
            <div className="popular-categories-column">
              <h3></h3>
              <h4>Title</h4>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default HomeSection;
