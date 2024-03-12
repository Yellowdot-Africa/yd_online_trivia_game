import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Prev from "../../assets/Icons/chevron-left.png";
import BadgeOne from "../../assets/Icons/badge1.png";
import BadgeTwo from "../../assets/Icons/badge2.png";
import BadgeThree from "../../assets/Icons/badge3.png";
import axios from "axios";
import "../../Pages/LeaderBoard/Leaderboard.css";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

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
      
        toast.info("You are currently number 4 and you are doing better than 65% of players");

      } else if (response.data.statusCode === "400") {
        setLeaderboardData(response.data.data);
        setStatus(false);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, [token, gameId]);

  return (
    <>
      <div className="leaderboard">
        <div className="leaderboard-content">
          <div className="leaderboard-text">
            <img src={Prev} alt="" onClick={handleGoBack} />
            <h2>Leader Board</h2>
          </div>
        </div>
        <div className="main">
          <div className="user-card">
            <div className="four">#4</div>
            <p>
              You are currently number 4 and you are doing better than 65% of
              players
            </p>
          </div>
          {!showMore && (
            <div className="winner-chart">
              {leaderboardData.length >= 3 && (
                <>
                  <div className="winner-two">
                    <img src={BadgeTwo} alt="badge-two" />
                    <p>{leaderboardData[1].name}</p>
                    <div className="winner user-two"></div>
                  </div>

                  <div className="winner-one">
                    <img src={BadgeOne} alt="badge-one" />
                    <p>{leaderboardData[0].name}</p>
                    <div className="winner user-one"></div>
                  </div>
                  <div className="winner-three">
                    <img src={BadgeThree} alt="badge-three" />
                    <p>{leaderboardData[2].name}</p>
                    <div className="winner user-three"></div>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="top-players-deets">
            <div className="top-players-card">
              <div className="top-players-cont">
                <h3>Top 10 Players</h3>
                <p className="show-details" onClick={toggleDetails}>
                  {showMore ? "Show Less" : " Show More"}
                </p>
              </div>

              <div className="players-details-container">
                {leaderboardData
                  .slice(0, showMore ? leaderboardData.length : 3)
                  .map((player, index) => (
                    <div key={index} className="first-user-deets">
                      <div className="green">{index + 1}</div>
                      <div className="green-deets">
                        <p>{player.name}</p>
                        <p className="number">{player.score}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
