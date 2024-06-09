import React, {useState} from "react";
import CustomButton from "../Components/CustomButton";
import "../Styles/Contact.css";


const Contact = () => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const buttonStyle = {
        borderRadius: "23px",
        color: "#FFFFFF",
        fontFamily: "Inter,sans-serif",
        fontSize: "16px",
        fontWeight: "500",
        padding: "0",
        width: "125px",
        backgroundColor: inputValue ? "#54349F" : "#54349F66",
        marginLeft: "-170px",
        
    };

  return (
    <>
      <div className="contact-container">
        <div className="contact-section">
          <h4>We would love your feedback</h4>
          <p>Please input your details and comments to get in touch with our support team.</p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Number" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Comment" />
          <CustomButton
           buttonText={loading ? "Processing..." : "Submit"}
           style={buttonStyle}

           disabled={loading || !inputValue}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;









// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [active, setActive] = useState('home');

//   const handleNavClick = (item) => {
//     setActive(item);
//   };

//   return (
//     <div className="nav">
//       <div 
//         className={`nav-item ${active === 'home' ? 'active' : ''}`} 
//         onClick={() => handleNavClick('home')}
//       >
//         <i className="icon">🏠</i>
//         <span>Home</span>
//       </div>
//       <div 
//         className={`nav-item ${active === 'settings' ? 'active' : ''}`} 
//         onClick={() => handleNavClick('settings')}
//       >
//         <i className="icon">⚙️</i>
//         <span>Settings</span>
//       </div>
//       <div 
//         className={`nav-item ${active === 'leaderboard' ? 'active' : ''}`} 
//         onClick={() => handleNavClick('leaderboard')}
//       >
//         <i className="icon">🏆</i>
//         <span>Leaderboard</span>
//       </div>
//     </div>
//   );
// };

// export default App;
