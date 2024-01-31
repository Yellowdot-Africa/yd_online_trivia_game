import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Arrow from "../assets/Icons/arrow.svg";
import "../Pages/HomePage/HomePage.css";
import MobileLinkIcon from "../Components/MobileLinkIcon";

const HomeSection = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);
  const token = sessionStorage.getItem("token");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(token, "token");



  useEffect(() => {
    fetchGameCategories();
    fetchGames();
  }, []);

  const fetchGameCategories = async () => {
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCategories(response.data.data);
      console.log(category.logo);

      if (response.data.data.length > 0) {
        setSelectedCategoryIndex(0);
        setSelectedCategory(response.data.data[0]);
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchGames = async ()=>{
            try{
              const response = await axios.get(
              "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Games/GetGames",
              {
                headers: {
                  Accept: "*/*",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
              );
              setGames(response.data.data)
    
            }catch(error) {
              setError(error.message);
              setLoading(false);
    
            }
          }


  return (
    <>
      <div className="home-section">
        <div className="home-section-container">
          <MobileLinkIcon />

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
            <div className="games-container">

           {/* {games.map((game,index) => (
             <div key={game.id} className="special-game-card">
               <h3>{game.name}</h3>
               <h4>Play</h4>
               <img src={Arrow} alt="arrw" />
             </div>
           ))} 
           */}

         </div>

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
            {categories.map((category, index) => (
              <div
                className={`popular-categories-column ${
                  index % 2 === 0 ? "mbottom" : "mtop"
                }`}
                key={category.id}
              >
                <div className="popular-categories-card">
                  <img
                    className="empty-div"
                    src={`data:image/png;base64,${category.logo}`}
                    alt={category.name}
                  />

                  <h4>{category.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;




