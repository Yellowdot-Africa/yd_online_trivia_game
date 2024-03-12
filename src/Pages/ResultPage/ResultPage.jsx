import React from 'react';
import Logo from "../../assets/Images/trophy.png";
import Red from "../../assets/Icons/red.svg";
import Green from "../../assets/Icons/green.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import "../../Pages/ResultPage/ResultPage.css";


const ResultPage = () => {
  const location = useLocation();

const navigate = useNavigate();
const { correctAnswers, wrongAnswers, balance } = location.state || {};

  return (
    <>
    <div className='result-container'>
    <div className="result-header">
            {/* <div className="timer"> */}
              <p>Your Results</p>
            {/* </div> */}
            <p className="quitt">Quit</p>
          </div>
    </div>
 
  {/* <div className='loading-containerr'>
    <div className='result-container'>
    <div className="container-style">
        <div className='image-cont-sty'>
        <img
        src={Logo}
        alt="logoimg"
        className="image-style"
      />
        </div>
     
      <div className='header-sty'>
        <a href="/home" className="done-link">
          Done
        </a>
      </div>
      <div className="result-text">
        <p className="congratulations">CONGRATULATIONS!</p>
        <p className="qualification-text">
          You automatically qualify for a draw after every game that you exceed
          70% correct.
        </p>
      </div>
      <div className='result-heading'>
      <h4 className='your-result'>Your Results</h4>

      </div>
      <div className="result-details">
        <div className="result-info">
        <img className='' src={Green} alt="green" />

        <p className="info-value">{correctAnswers}</p>

          <p className="info-heading">Correct </p>
        </div>
        <div className="result-info">
          <img src={Red} alt="red" />
        <p className="info-value">{wrongAnswers}</p>

          <p className="info-heading">Wrong</p>
        </div>
      </div>
      <div className="prize-details">
        <p className="prize-heading">You won</p>
        <p className="prize-amount">N{balance}</p>
        <p className="current-balance">Current balance: N{balance}</p>
      </div>
      <button className="replay-button" onClick={() => { navigate("/questions")}}>Replay</button>
    </div>
    </div>
    </div> */}
    </>
  );
};

export default ResultPage;






