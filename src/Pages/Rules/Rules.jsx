import React, { useState } from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import "../../Pages/Rules/Rules.css";
import RulesCard from "../../Components/RulesCard";
import FaqCard from "../../Components/FaqCard";
import HomeFootIcon from "../../Components/HomeFootIcon";

const Rules = () => {
  const [showRules, setShowRules] = useState(true);

  const toggleContent = () => {
    setShowRules(!showRules);
  };
  return (
    <>
      <HomeNavBar showNavMobile={true}/>

      {/* Mobile view */}
      <div className="mobile-view">
      <div className="mobile-rule-faq">
            <h2>Rules & FAQ’s</h2>
          </div>
          <div className="mobile-card">
        <div className="general-card">
          <button className="rules-btn" onClick={toggleContent}>
            Rules
          </button>
          <button className="faqs-btn" onClick={toggleContent}>
            FAQs
          </button>

          {showRules ? (
            <RulesCard isVisible={showRules} />
          ) : (
            <FaqCard isVisible={!showRules} />
          )}
        </div>
        </div>
      </div>
      {/* desktop view */}
      <RulesCard isVisible={true} />
      <FaqCard isVisible={true} />
      <HomeFootIcon />
    </>
  );
};

export default Rules;
