import React, {useState} from "react";
import "../../Styles/Card.css";
import "../../Components/CARDD/Cardd.css";
import QuickPPlay from "../../Components/CARDD/QuickPPlay";

const Cardd = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={showModal ? "blur" : ""}>
        <div className="card-container">
          <QuickPPlay/>
        </div>
      </div>
    </>
  );
};

export default Cardd;






