import React, {useState} from "react";
import "../../Styles/Card.css";
import SignupCard from "../../Components/CARD/SignupCard";
import LoginCard from "../../Components/CARD/LoginCard";
import QuickPlay from "../../Components/CARD/QuickPlay";

const Card = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={showModal ? "blur" : ""}>
        <div className="card-container">
          <SignupCard />
          <LoginCard/>
          <QuickPlay/>
        </div>
      </div>
    </>
  );
};

export default Card;




