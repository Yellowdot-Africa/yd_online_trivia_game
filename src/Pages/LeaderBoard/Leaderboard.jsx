import React, { useState } from "react";
import Prev from "../../assets/Icons/chevron-left.png";
import "../../Pages/LeaderBoard/Leaderboard.css";
import { useNavigate } from "react-router-dom";



const Leaderboard = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();



  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <div className="leaderboard-text">
          <img src={Prev} alt=""  onClick={handleGoBack} />
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
            <div className="winner-two">
              <img src="" alt="" />
              <p>User Name</p>
              <div className="winner user-two"></div>
            </div>

            <div className="winner-one">
              <img src="" alt="" />
              <p>User Name</p>
              <div className="winner user-one"></div>
            </div>
            <div className="winner-three">
              <img src="" alt="" />
              <p>User Name</p>
              <div className="winner user-three"></div>
            </div>
          </div>
        )}
        <div className="top-players-deets">
          <div className="top-players-card">
            <div className="top-players-cont">
              <h3>Top 10 Players</h3>
              <p onClick={toggleDetails}>{showMore ? "Less" : "More"}</p>
            </div>

            <div className="players-details-container">
              {showMore ? (
                <>
                  <div className="first-user-deets">
                    <div className="green"></div>
                    <div className="green-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="second-user-deets">
                    <div className="orange"></div>
                    <div className="orange-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="third-user-deets">
                    <div className="blue"></div>
                    <div className="blue-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="fourth-user-deets">
                    <div className="purple"></div>
                    <div className="purple-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="fourth-user-deets">
                    <div className="purple"></div>
                    <div className="purple-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="fourth-user-deets">
                    <div className="purple"></div>
                    <div className="purple-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="fourth-user-deets">
                    <div className="purple"></div>
                    <div className="purple-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="first-user-deets">
                    <div className="green"></div>
                    <div className="green-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="second-user-deets">
                    <div className="orange"></div>
                    <div className="orange-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                  <div className="third-user-deets">
                    <div className="blue"></div>
                    <div className="blue-deets">
                      <p>Johno111</p>
                      <p className="number">120097</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
