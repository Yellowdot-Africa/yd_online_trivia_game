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
  const [status,setStatus]=useState(false)

  const token = sessionStorage.getItem("token");

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Answers/ShowLeaderboard?gameID=1`,     
           {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(response.data.statusCode==="999"){
        setLeaderboardData(response.data.data);
        setStatus(true);
        setLoading(false);
      }else if(response.data.statusCode==="400"){
        setLeaderboardData(response.data.data);
        setStatus(false)
        setLoading(false);
      }
  
    } catch (error) {
      setLeaderboardData("No Data Available");
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
              {
                  status?(
                    leaderboardData.map((item, index) => (
                      <tr key={item.userId}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.msisdn}</td>
                      </tr>
                    ))
                    
                  ):(
                      "No Leaderboard found"
                  )
              
              
             
              
              
              }
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
