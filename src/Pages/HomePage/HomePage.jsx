import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/Icons/cup-broken.svg";
import HomeIcon from "../../assets/Icons/home-icon.png";
import SearchBar from "../../Components/SearchBar";
import TodaysGames from "../../Components/TodaysGame";
// import PopularCategories from "../../Components/PopularCategories";
import NavigationIcons from "../../Components/NavigationIcons";
// import SearchCard from "../../Components/SearchCard";
import "../HomePage/HomePage.css";
import CategoriesSection from "../../Components/CategoriesSection";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSeeAccount = () => {
    navigate("/account");
  };

  const handleSeeAllGames = () => {
    navigate("/all-games");
  };

  return (
    <div className="home-page">
      <div className="header">
        <div className="welcome-section">
          <div className="welcome-user">
           Welcome <br />
          <p className="username">Username</p>  
          </div>
          <div className="logo-section">
            <img src={LogoIcon} alt="Logo" className="logo-section-logo" />
          </div>
          <div className="home-icon" onClick={() => navigate("/")}>
            <img src={HomeIcon} alt="" />
          </div>
        </div>

        <div className="account-section">
          <div className="account-balance">
            <p className="acct">Account Balance</p>
            <p className="amount">NGN20,000.00</p>
          </div>
          <div className="see-account" onClick={handleSeeAccount}>
            See Account <span className="arrow-icon">&rarr;</span>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="todays-games-section">
        <div className="todays-game">
          <h2>Today's Games</h2>
          <div className="see-all-games" onClick={handleSeeAllGames}>
            See All
          </div>
        </div>
        <TodaysGames />
      </div>

      <div className="popular-categories-section">
        {/* <h2>Popular Categories</h2>
        <PopularCategories /> */}
        <CategoriesSection />
      </div>

      <div className="navigation-icons-section">
        <NavigationIcons />
      </div>
    </div>
  );
};

export default HomePage;
