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
  // Check if the screen width is less than a certain threshold (e.g., 768 pixels)
  const isMobile = window.innerWidth < 768;

  // Render the Carousel only for mobile devices
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




// const HomeSection = () => {
//   return (
//     <>
//       {/* Other content of HomeSection */}
//       <SpecialGamesSection />
//       {/* Rest of the content */}
//     </>
//   );
// };

// export default HomeSection;
