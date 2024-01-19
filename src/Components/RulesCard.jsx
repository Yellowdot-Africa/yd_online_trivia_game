import React from "react";

const RulesCard = ({ isVisible }) => {
  return (
    <>
      {isVisible && (
        <>
          <div className="rules-faq">
            <h2>Rules & FAQ’s</h2>
            <p>Information and documentation</p>
          </div>
          <div className="rules-card">
            <div className="rules-text">
              <h3>Rules</h3>
              <ol className="rules">
                <li className="rules-list">
                  Answer two questions to enter for the daily draw{" "}
                </li>
                <li className="rules-list">
                  Pick from options in each question to move to the next level
                </li>
                <li className="rules-list">
                  All terms and conditions must be observed.
                </li>
              </ol>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RulesCard;
