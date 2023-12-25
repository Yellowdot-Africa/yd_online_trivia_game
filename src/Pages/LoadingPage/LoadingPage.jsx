// import React, { useState, useEffect } from "react";
// import Logo from "../../assets/Images/trophy.png";
// import TriviaLogo from "../../assets/Images/ydTrivia.png";
// import ProgressBar from "../../Components/ProgressBar";
// import "../../Pages/LoadingPage/LoadingPage.css";
// import { useNavigate } from "react-router-dom";

// const LoadingPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [completed, setCompleted] = useState(0);
//   const [slider, setSlider] = useState(true);
//   const [loadingCompleted, setLoadingCompleted] = useState(false);
//   const [showContinueButton, setShowContinueButton] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (completed < 100) {
//         setCompleted((prevCompleted) => prevCompleted + 1);
//       } else {
//         clearInterval(interval);
//         setLoading(false);
//         setSlider(false);
//         setLoadingCompleted(false);
     
//         const continueButtonTimer = setTimeout(() => {
//           setShowContinueButton(true);
//         }, 2000);

//         return () => {
//           clearTimeout(continueButtonTimer);
//         };
//       }
//     }, 200);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [completed]);

//   const handleButtonContinue = () => {
//     navigate("/home");
//   };

//   return (
//     <>
//       <div className="loading-container">
//         <div className="logo-cont">
//           <img src={Logo} alt="logo" />
//           <span>YD</span>TRIVIA
//         </div>
//         <div className="trivia-main-container">
//           <div className="trivia-progress">
//             <img className="trivia-logo" src={TriviaLogo} alt="trivia" />
//             {loadingCompleted ? (
//               <div className="welcome-content">
//                 <h1 className="welcome">
//                   WELCOME TO <span className="yd-span"> YELLOWDOT</span> TRIVIA
//                 </h1>
//                 {showContinueButton && (
//                   <button className="welcom-btn" onClick={handleButtonContinue}>
//                     Continue
//                   </button>
//                 )}
//               </div>
//             ) : (
//               <div className="progressbar">
//                 ):(
          
//             {slider ? (

//               <ProgressBar bgcolor={"#9334AB"} completed={completed} />
//              ) : (
//                )}
//                 </div>
//               )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoadingPage;



import React, { useState, useEffect } from "react";
import Logo from "../../assets/Images/trophy.png";
import TriviaLogo from "../../assets/Images/ydTrivia.png";
import ProgressBar from "../../Components/ProgressBar";
import "../../Pages/LoadingPage/LoadingPage.css";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [slider, setSlider] = useState(true);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (completed < 100) {
        setCompleted((prevCompleted) => prevCompleted + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
        setSlider(false);
        setLoadingCompleted(true); // Fixed this line

        const continueButtonTimer = setTimeout(() => {
          setShowContinueButton(true);
        }, 2000);

        return () => {
          clearTimeout(continueButtonTimer);
        };
      }
    }, 100); // Decreased the interval for smoother progress

    return () => {
      clearInterval(interval);
    };
  }, [completed]);

  const handleButtonContinue = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="loading-container">
        <div className="logo-cont">
          <img src={Logo} alt="logo" />
          <span>YD</span>TRIVIA
        </div>
        <div className="trivia-main-container">
          <div className="trivia-progress">
            <img className="trivia-logo" src={TriviaLogo} alt="trivia" />
            {/* {loadingCompleted ? (
              <div className="welcome-content">
                <h1 className="welcome">
                  WELCOME TO <span className="yd-span"> YELLOWDOT</span> TRIVIA
                </h1>
                {showContinueButton && (
                  <button className="welcom-btn" onClick={handleButtonContinue}>
                    Continue
                  </button>
                )}
              </div>
            ) : (
              <div className="progressbar">
                {slider && (
                  <ProgressBar bgcolor={"#9334AB"} completed={completed} />
                )}
              </div>
            )} */}

{loadingCompleted ? (
  <div className="welcome-content">
    <h1 className="welcome">
      WELCOME TO <span className="yd-span"> YELLOWDOT</span> TRIVIA
    </h1>
    {showContinueButton && (
      <button className="welcom-btn" onClick={handleButtonContinue}>
        Continue
      </button>
    )}
  </div>
) : (
  <div className="progressbar">
    {slider && (
      <ProgressBar bgcolor={"#9334AB"} completed={completed} />
    )}
  </div>
)}

          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
