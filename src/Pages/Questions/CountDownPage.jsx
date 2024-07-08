import { useState, useEffect } from "react";
import Logo from "../../assets/Icons/logoicon.svg";
import { useNavigate } from "react-router-dom";
import "../../Pages/Questions/QuestionsScreen.css";

const CountdownPage = () => {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(countdownInterval);
      navigate("/questions");
    }

    return () => clearInterval(countdownInterval);
  }, [countdown, navigate]);



  const getClipPath = () => {
    if (countdown === 3) {
      return 'polygon(50% 50%, 100% 50%, 100% 0%, 50% 0%, 50% 50%)'; 
    } else if (countdown === 2) {
      return 'polygon(50% 50%, 100% 50%, 100% 100%, 0% 100%, 0% 50%, 50% 50%)'; 
    } else if (countdown === 1) {
      return 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%, 50% 50%)'; 
    }
  };
  return (
    <>
      <div className="loading-pack-container">
        <div className="logo-contt">
          <img src={Logo} alt="logo" />
        </div>
        <div className="countdown-container">
          <h1 className="football-trivia">Your game is starting in</h1>
          <div className="football-countdown-wrapper">
              <div className="mask" style={{ clipPath: getClipPath() }}></div>
            <p className="football-countdown"> {countdown}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownPage;





  
  