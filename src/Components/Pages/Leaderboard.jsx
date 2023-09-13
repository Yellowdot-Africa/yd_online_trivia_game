import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Caret from "../../assets/icons/uiwdown.svg";
import Trophy from "../../assets/icons/trophy.svg";
import Profile from "../../assets/icons/profile-fill.svg";
import GemStone from "../../assets/icons/gemstone.svg";
import "../../Styles/LeaderBoard.css";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameId, setGameId] = useState(0);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        // const gameId = 0;
        const response = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/ShowLeaderboard?gameId=${gameId}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setLeaderboardData(response.data.status);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, [token, gameId]);
  const changeGameId = () => {
    setGameId(1);
  };
  return (
    <>
      <div>
        <h4>LEADERBOARD</h4>
      </div>
      <div className="table-container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="loading">Error fetching leaderboard: {error}</p>
        ) : (
          <Table responsive="sm">
            <thead className="table-head">
              <tr>
                <th>
                  Rank <img src={Trophy} alt="trophy" />
                </th>
                <th>
                  User <img src={Profile} alt="profile" />
                </th>
                <th>
                  User <img src={GemStone} alt="gems" />
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((item, index) => (
                <tr key={item.userId}>
                  <td>{index + 1}</td>
                  <td>{item.userName}</td>
                  <td>{item.gems}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="more-link">
          <a href="#">
            More <img className="img" src={Caret} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
