import React from "react";
import "../Styles/Ad.css";

const Ad = () => {
  return (
    <>
      <div className="advert-container">
        <div className="advert"> <p>Ad Space</p></div>
      </div>
    </>
  );
};

export default Ad;

// import React, { useState, useEffect } from 'react';
// import "../Styles/CustomButton.css";
// const Ad = () => {
//   const [time, setTime] = useState(60); // 1 minute
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000); // 1 second

//     setIntervalId(intervalId);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const seconds = time % 60;
//   const minutes = Math.floor(time / 60);

//   return (
//     <div className="countdown-timer">
//       <svg width="100" height="100">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="#fff"
//           strokeWidth="2"
//           fill="none"
//           strokeDasharray={`${time * 6.2832} 6.2832`}
//         />
//         <text x="50" y="55" textAnchor="middle" fontSize="24">
//           {minutes}:{seconds.toString().padStart(2, '0')}
//         </text>
//       </svg>
//     </div>
//   );
// };

// export default Ad;
