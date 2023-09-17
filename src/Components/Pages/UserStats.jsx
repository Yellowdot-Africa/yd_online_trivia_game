import React from "react";
import "../../Styles/UserStats.css";
import Gem from "../../assets/Icons/gem.svg";
import Prize from "../../assets/Icons/mdi_prize.svg";
import Rank from "../../assets/Icons/Star 2.svg";
import Question from "../../assets/Icons/fluent-mdl2_survey-questions.svg";
import Answers from "../../assets/Icons/grommet-icons_status-good.svg";
import Cancel from "../../assets/Icons/ic_outline-cancel.svg";
import Money from "../../assets/Icons/ph_money-duotone.svg";

const UserStats = () => {
  return (
    <>
      <div className="user-stats-header">
        <h4>USER STATS </h4> <hr />
      </div>

      <div className="user-stats-container">
        <div className="gem">
          <div className="gem-cont">
            <img src={Gem} alt="gem" />
            <p className="gemm">Total Gems gotten</p>
          </div>
          <p className="gem-no">0</p>
        </div>

        <div className="prize">
          <div className="prize-cont">
            <img src={Prize} alt="prize" />
            <p className="prz">Prizes won</p>
          </div>
          <p className="prz-no">12</p>
        </div>

        <div className="rank">
          <div className="rank-cont">
            <img src={Rank} alt="rank" />
            <p className="player-rank"> Player rank</p>
          </div>
          <p className="p-rank"> Beginner</p>
        </div>

        <div className="que">
          <div className="que-cont">
            <img src={Question} alt="que" />
            <p className="question">Current answer</p>
          </div>
          <p className="question-ans">146</p>
        </div>

        <div className="answers">
          <div className="answers-cont">
            <img src={Answers} alt="ans" />
            <p className="ans">Right answers</p>
          </div>
          <p className="ans-percent">75%</p>
        </div>

        <div className="cancel-cont">
          <div className="cancel-cancel-cont">
            <img src={Cancel} alt="cancel" />
            <p className="cancel">Wrong answers</p>
          </div>
          <p className="cancel-percent">25%</p>
        </div>

        <div className="money-cont">
          <div className="money-earnings">
            <img src={Money} alt="money" />
            <p className="total-earnings">Total earnings</p>
          </div>
          <p className="earning">N200,000.00</p>
        </div>
      </div>
    </>
  );
};

export default UserStats;