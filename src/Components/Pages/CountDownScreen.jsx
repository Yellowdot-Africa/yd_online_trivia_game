import React, { useEffect } from "react";
import "../../Styles/CountDownScreen.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CountDownScreen = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const navigationTimeout = setTimeout(() => {
      navigate("/countdownscreen1");
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div data-aos="fade-down" className="container position-relative">
        <div className="div">
          <div className="qquestion-cont">
            <p>Question 2/20</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDownScreen;
