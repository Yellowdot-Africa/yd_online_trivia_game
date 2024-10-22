import { useState, useEffect } from "react";
import Logo from "../../assets/Icons/logoicon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Pages/Questions/QuestionsScreen.css";
import { useSelector } from "react-redux";
import { subscribeToPack} from "../../API/questionPackApi";



const CountdownPage = () => {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPack, selectedCategoryName, selectedCategoryImage } = location.state || {};
  const token = useSelector((state) => state.auth.jwt);



  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(countdownInterval);
      console.log("Token being used for subscription:", token);

      subscribeToPack(selectedPack.questionPackId, token)

      .then((response) => {
        console.log("Subscription successful:", response);



      navigate("/questions" , { state:
         { selectedPack ,
         selectedCategoryName,
         selectedCategoryImage,
         
      }
        });
    })
    .catch((error) => {
      console.error("Error during subscription:", error);
      // Handle error, maybe show an error message or retry
    });
}
    return () => clearInterval(countdownInterval);
  // }, [countdown, navigate, selectedPack]);
}, [countdown, token, navigate, selectedPack, selectedCategoryName, selectedCategoryImage]);



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




