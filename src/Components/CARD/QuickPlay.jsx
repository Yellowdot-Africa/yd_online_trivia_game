import React from 'react';
import Card3 from "../../assets/Images/card3-icon.png";
import { useNavigate } from "react-router-dom";



const QuickPlay =()=> {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/loading");
    };
  
  return (
    <>
        <div className="third-card">
            <img src={Card3} alt="card-three" />
            <h3>Quick game Play</h3>
            <button onClick={handleButtonClick}>Here</button>
          </div>
    </>
  )
}

export default QuickPlay;