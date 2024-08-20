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

  const userRankText = userRank
    ? `You are currently number ${userRank} and you are doing better than ${Math.round(
        (userRank / leaderboardData.length) * 100
      )}% of players`
    : "You are not currently on the leaderboard. Keep playing to earn a spot!";

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
          <h2>Leader Board</h2>
        </div>
      </div>
      <div className="main">
        <div className="user-card">
          <div className="four">{userRank ? `#${userRank}` : ""}</div>

          <p>{userRankText || "Loading your rank..."}</p>
        </div>
        <div className="leaderboard-date">
          <p>Today</p>
          <p>Monthly</p>
        </div>
       
 {/* <div className="winner-chart">
          {leaderboardData.length >= 3 ? (
            <>
              <div className="winner-two">
                <div className='winner-two-cont'>
                <img src={BadgeTwo} alt="badge-two" />
                <p>{leaderboardData[1]?.name}</p>
                </div>    
                <div className="winner user-two"></div>
              </div>
              <div className="winner-one">
                <div className='winner-two-cont'>
                <img src={BadgeOne} alt="badge-one" />
                <p>{leaderboardData[0]?.name}</p>
                </div>
              
                <div className="winner user-one"></div>
              </div>
              <div className="winner-three">
                <div className='winner-two-cont'>
                <img src={BadgeThree} alt="badge-three" />
                <p>{leaderboardData[2]?.name}</p>
                </div>
               
                <div className="winner user-three"></div>
              </div>
            </>
          ) : (
            <div className="spinner-containerr">
              <Circles color="#D9D9D9" height={30} width={30} />
            </div>
          )}
        </div> */}

        {/* <div className="winner-chart">
          {error ? (
            <div className="error-text">
              <p>
                You are not currently on the leaderboard. Keep playing to earn a
                spot!
              </p>
            </div>
          ) : loading ? (
            <div className="spinner-containerr">
              <Circles color="#D9D9D9" height={30} width={30} />
            </div>
          ) : leaderboardData.length >= 3 ? (
            <>
              <div className="winner-two">
                <div className="winner-two-cont">
                  <img src={BadgeTwo} alt="badge-two" />
                  <p>{leaderboardData[1]?.name}</p>
                </div>
                <div className="winner user-two"></div>
              </div>
              <div className="winner-one">
                <div className="winner-two-cont">
                  <img src={BadgeOne} alt="badge-one" />
                  <p>{leaderboardData[0]?.name}</p>
                </div>
                <div className="winner user-one"></div>
              </div>
              <div className="winner-three">
                <div className="winner-two-cont">
                  <img src={BadgeThree} alt="badge-three" />
                  <p>{leaderboardData[2]?.name}</p>
                </div>
                <div className="winner user-three"></div>
              </div>
            </>
          ) : (
            <div className="err-text">
              <p>
                You are not currently on the leaderboard. Keep playing to earn a
                spot!
              </p>
            </div>
          )}
        </div> */}

<div className="winner-chart">
  {error ? (
    <div className="error-message">
      <p>You are not currently on the leaderboard. Keep playing to earn a spot!</p>
    </div>
  ) : loading ? (
    <div className="spinner-containerr">
      <Circles color="#D9D9D9" height={30} width={30} />
    </div>
  ) : leaderboardData && leaderboardData.length > 0 ? (
    <>
      {leaderboardData.length >= 3 ? (
        <>
          <div className="winner-two">
            <div className='winner-two-cont'>
              <img src={BadgeTwo} alt="badge-two" />
              <p>{leaderboardData[1]?.name}</p>
            </div>    
            <div className="winner user-two"></div>
          </div>
          <div className="winner-one">
            <div className='winner-two-cont'>
              <img src={BadgeOne} alt="badge-one" />
              <p>{leaderboardData[0]?.name}</p>
            </div>
            <div className="winner user-one"></div>
          </div>
          <div className="winner-three">
            <div className='winner-two-cont'>
              <img src={BadgeThree} alt="badge-three" />
              <p>{leaderboardData[2]?.name}</p>
            </div>
            <div className="winner user-three"></div>
          </div>
        </>
      ) : (
        <div className="error-message">
          <p>Not enough data to display the top 3. Keep playing to earn a spot!</p>
        </div>
      )}
    </>
  ) : (
    <div className="error-message">
      <p>You are not currently on the leaderboard. Keep playing to earn a spot!</p>
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
                leaderboardData.map((player, index) => (
                  <div key={index} className="first-user-deets">
                    <div className="green">{index + 1}</div>
                    <div className="green-deets">
                      <p>{player.name}</p>
                      <p className="number">{player.score}</p>
                    </div>
                    <div className="purpcont">
                      <div className="purple">{player.name.charAt(0)}</div>
                    </div>
                  </div>
                ))
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
