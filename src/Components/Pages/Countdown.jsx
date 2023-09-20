import React, { useEffect } from "react";
import "../../Styles/Countdown.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Countdown = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const navigationTimeout = setTimeout(() => {
      navigate("/countdown1");
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div data-aos="fade-down" className="count-container ">
        <div className="div">
          <div className="qquestion-cont">
            <p>Questions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
