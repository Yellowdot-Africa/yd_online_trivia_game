import React from "react";
import { Carousel } from "react-bootstrap";
import Arrow from "../assets/Icons/arrow.svg";

const SpecialGameCard = ({ title, playText }) => (
  <Carousel.Item>
    <div className="special-game-card">
      <h3>{title}</h3>
      <h4>{playText}</h4>
      <img src={Arrow} alt="arrow" />
    </div>
  </Carousel.Item>
);

const SpecialGamesSection = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="special-games-section">
      <h2>Special Games</h2>
      {isMobile && (
        <Carousel>
          <SpecialGameCard title="Todays Game 1" playText="Play" />
          <SpecialGameCard title="Todays Game 2" playText="Play" />
          <SpecialGameCard title="Todays Game 3" playText="Play" />
        </Carousel>
      )}
    </div>
  );
};




