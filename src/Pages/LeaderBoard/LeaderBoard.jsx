import React, { useState, useEffect } from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import Bage from "../../assets/Images/Bage.png";
import BageOne from "../../assets/Images/Bage1.png";
import BageTwo from "../../assets/Images/Bage2.png";
import BageMobileOne from "../../assets/Images/Bage-mobile1.png";
import BageMobileTwo from "../../assets/Images/Bage-mobile2.png";
import BageMobileThree from "../../assets/Images/Bage-mobile3.png";
import PlayerImage from "../../assets/Images/player-img.svg";
import HomeFootIcon from "../../Components/HomeFootIcon";
import axios from "axios";

import "../LeaderBoard/LeaderBoard.css";

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameId, setGameId] = useState(1);

  const [status, setStatus] = useState(false);

  const token = sessionStorage.getItem("token");
  console.log("Token:", token);
  console.log(token, "token");

  const handleGameChange = (event) => {
    setGameId(event.target.value);
  };

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/ShowLeaderboard?gameID=${gameId}`,

        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.statusCode === "999") {
        setLeaderboardData(response.data.data);

        setStatus(true);
        setLoading(false);
      } else if (response.data.statusCode === "400") {
        setLeaderboardData(response.data.data);
        setStatus(false);
        setLoading(false);
      }
    } catch (error) {
      setLeaderboardData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, [token, gameId]);

  const changeGameId = () => {
    setGameId(1);
  };
  return (
    <>
      <HomeNavBar showNavMobile={true} />
      <div className="leaderboard-section">
        <h2>Leaderboard</h2>
        <p className="subheading">Top Players of YD Trivia</p>

        <div className="leaderboard-cards">
          <div className="leaderboard-card">
            <img src={Bage} alt="bage" />
            <img src={BageOne} alt="bage" />
            <img src={BageTwo} alt="bage" />
          </div>

          <div className="leaderboard-card-mobile">
            <img className="Bmt" src={BageMobileTwo} alt="bage" />
            <img className="bmo" src={BageMobileOne} alt="bage" />
            <img className="bmtt" src={BageMobileThree} alt="bage" />
          </div>

          <div className="leaderboards-card">
            <div className="leaderboard-header">
              <p className="empty"></p>
              <p className="empty"></p>
              <h3 className="name-heading">Name</h3>
              <p>Score</p>
            </div>
            <div className="leaderboard-details">
              {leaderboardData.map((player, index) => (
                <div className="player-details" key={index}>
                  <p>{index + 1}</p>
                  <img src={PlayerImage} alt={`img-${index}`} />
                  <p className="player-name">{player.name}</p>
                  <p className="player-score">{player.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <HomeFootIcon />
    </>
  );
};

export default LeaderBoard;





 