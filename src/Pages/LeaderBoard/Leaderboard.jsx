import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameId } from "../../features/Game/gameSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Prev from "../../assets/Icons/chevron-left.png";
import BadgeOne from "../../assets/Icons/badg1.png";
import BadgeTwo from "../../assets/Icons/badg2.png";
import BadgeThree from "../../assets/Icons/badg3.png";
import LeaderboardImg from "../../assets/Images/leaderboard.png";
import "../../Pages/LeaderBoard/Leaderboard.css";
import { useNavigate } from "react-router-dom";
import NavigationIcons from "../../Components/NavigationIcons";
import { getLeaderboard } from "../../features/leaderboard/leaderboardSlice";
import { Circles } from "react-loader-spinner";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const leaderboardData = useSelector((state) => state.leaderboard.data || []);
  const loading = useSelector((state) => state.leaderboard.loading);
  const error = useSelector((state) => state.leaderboard.error);
  const token = useSelector((state) => state.auth.jwt);
  const username = useSelector((state) => state.auth.username);
  const [showMore, setShowMore] = useState(false);
  const [gameId, setGameId] = useState(1);

  useEffect(() => {
    dispatch(getLeaderboard(gameId));
  }, [dispatch, gameId, token]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const userRank =
    Array.isArray(leaderboardData) && leaderboardData.length > 0
      ? leaderboardData.findIndex((player) => player.name === username) + 1
      : null;

  const userRankText =
    userRank && userRank <= 10
      ? `You are currently number ${userRank} out of ${leaderboardData.length} players.`
      : "You are not currently in the top 10. Keep playing to earn a better spot!";

  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGameChange = (event) => {
    setGameId(event.target.value);
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <div className="leaderboard-text">
          <h2>Leaderboard</h2>
        </div>
      </div>
      <div className="main">
        {userRank && userRank <= 10 ? (
          <div className="user-card">
            <div className="four">#{userRank}</div>
            <p>{userRankText}</p>
          </div>
        ) : (
          <div className="user-card">
            <p>{userRankText || "Loading your rank..."}</p>
          </div>
        )}

        {/* <div className="leaderboard-date">
          <p>Today</p>
          <p>Monthly</p>
        </div> */}

        <div className="winner-chart">
          {error ? (
            <div className="error-message">
              <p>
                You are not currently on the leaderboard. Keep playing to earn a
                spot!
              </p>
            </div>
          ) : loading ? (
            <div className="spinner-containerr">
              <Circles color="#D9D9D9" height={30} width={30} />
            </div>
          ) : leaderboardData && leaderboardData.length > 0 ? (
            <>
              {leaderboardData.length >= 3 ? (
                <>
                  <div className="winner">
                    <img
                      src={LeaderboardImg}
                      alt="Leaderboard background"
                      className="leaderboard-img"
                    />
                    <div className="overlay">
                      <div className="badge-two badgde">
                        <p>{leaderboardData[1]?.name}</p>
                      </div>
                      <div className="badge-one badgde">
                        <p>{leaderboardData[0]?.name}</p>
                      </div>
                      <div className="badge-three badgde">
                        <p>{leaderboardData[2]?.name}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="error-message">
                  <p>
                    Not enough data to display the top 3. Keep playing to earn a
                    spot!
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="error-message">
              <p>
                You are not currently on the leaderboard. Keep playing to earn a
                spot!
              </p>
            </div>
          )}
        </div>

        <div className="top-players-deets">
          <div className="top-players-card">
            <div className="top-players-cont">
              <h3>Top 10 Players</h3>
              <p className="show-details" onClick={toggleDetails}>
                {showMore ? "Show Less" : " Show More"}
              </p>
            </div>
            <div className="players-details-container">
              {loading ? (
                <div className="spinner-container">
                  <Circles color="#D9D9D9" height={30} width={30} />
                </div>
              ) : (
                <>
                  {leaderboardData.slice(3, 10).map((player, index) => (
                    <div key={index} className="first-user-deets">
                      <div className="green">{index + 4}</div>
                      <div className="green-deets">
                        <p>{player.name}</p>
                        <p className="number">{player.score}</p>
                      </div>
                      <div className="purpcont">
                        <div className="purple">{player.name.charAt(0)}</div>
                      </div>
                    </div>
                  ))}
                  {userRank > 10 && (
                    <div className="first-user-deets">
                      <div className="green">{userRank}</div>
                      <div className="green-deets">
                        <p>{username}</p>
                        <p className="number">
                          {leaderboardData[userRank - 1]?.score}
                        </p>
                      </div>
                      <div className="purpcont">
                        <div className="purple">{username.charAt(0)}</div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <NavigationIcons bgColor={"#FFFFFF"} />
    </div>
  );
};

export default Leaderboard;
