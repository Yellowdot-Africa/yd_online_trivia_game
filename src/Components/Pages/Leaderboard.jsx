import React, { useState, useEffect, useRef } from "react";
import Table from "react-bootstrap/Table";
import Caret from "../../assets/icons/uiwdown.svg";
import Trophy from "../../assets/icons/trophy.svg";
import Profile from "../../assets/icons/profile-fill.svg";
import GemStone from "../../assets/icons/gemstone.svg";
import "../../Styles/LeaderBoard.css";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  // const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameId, setGameId] = useState(0);
  const [status, setStatus] = useState(false);

  // const token = sessionStorage.getItem("token");

  // console.log(userId )
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const maskMsisdn = (msisdn) => {
    if (typeof msisdn !== "string") {
      return "Invalid MSISDN";
    }

    const maskedPart = "xxx ".repeat(msisdn.length / 3);
    const lastThreeDigits = msisdn.slice(-2);

    return maskedPart.trim() + lastThreeDigits;
  };

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
      if (response.data.statusCode === "999") {
        setLeaderboardData(response.data.data);
        // const userEntry = leaderboardData.find(
        //   (item) => item.msisdn === "08027003684"
        // );
        // if (userEntry) {
        //   const rank = leaderboardData.indexOf(userEntry) + 1;
        //   setUserRank(rank);
        // }

        setStatus(true);
        setLoading(false);
      } else if (response.data.statusCode === "400") {
        setLeaderboardData(response.data.data);
        setStatus(false);
        setLoading(false);
      }
    } catch (error) {
      setLeaderboardData("No Data Available");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, [token, gameId, currentPage]);

  const changeGameId = () => {
    setGameId(1);
  };

  const loadMoreButtonRef = useRef(null);

  const handleLoadMore = () => {
    if (loadMoreButtonRef.current) {
      const rect = loadMoreButtonRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleLoadMore);
    return () => {
      window.removeEventListener("scroll", handleLoadMore);
    };
  }, []);

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
                  MSISDN <img src={GemStone} alt="gems" />
                </th>
              </tr>
            </thead>
            <tbody>
              {status
                ? leaderboardData.map((item, index) => (
                    <tr key={`${item.userId}-${index}`}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{maskMsisdn(item.msisdn)}</td>
                    </tr>
                  ))
                : "No Leaderboard found"}
            </tbody>
          </Table>
        )}
        <div className="more-link">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(currentPage + 1);
            }}
            ref={loadMoreButtonRef}
          >
            More <img className="img" src={Caret} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
