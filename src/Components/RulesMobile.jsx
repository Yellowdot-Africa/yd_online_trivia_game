import React, { useState } from "react";
import Settings from "../assets/Icons/settings.svg";
import HomeIcon from "../assets/Icons/home-icon.png";
import MobileLinkIcon from "./MobileLinkIcon";

const RulesMobile = () => {
  const [showRules, setShowRules] = useState(true);

  return (
    <>
      <div className="mobile-view">
        <div className="mobile-rule-faq-card">
          <MobileLinkIcon/>
          <h2>Rules & FAQ’s</h2>
        </div>
        <div className="mobile-general-card">
          <div className="mobile-card">
            <div className="general-card-btn">
              <button className="rules-btn" onClick={() => setShowRules(true)}>
                Rules
              </button>
              <button className="faqs-btn" onClick={() => setShowRules(false)}>
                FAQs
              </button>
            </div>
            <div className="content">
              {showRules ? (
                <div className="mobile-rules-cardd">
                  <div className="mobile-rules-textt">
                    <h3>Game Rules</h3>
                    <ol className="mobile-rules">
                      <li className="rules-list">
                        Answer two questions to enter for the daily draw
                      </li>
                      <li className="rules-list">
                        Pick from options in each question to move to the next
                        level
                      </li>
                      <li className="rules-list">
                        All terms and conditions must be observed.
                      </li>
                    </ol>

                    <div className="mobile-save-button">
                      <button>Save</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mobile-faq-carrd">
                  <h3>Frequently asked questions</h3>
                  <div className="faqs-lists">
                    <ol className="faqs">
                      <li className="list-ol">
                        Collecting winnings
                        <div className="faqs-details">
                          <p>Whenever a player wins a...</p>
                          <button>Read</button>
                        </div>
                      </li>
                      <hr />
                      <li className="list-ol">
                        Collecting winnings
                        <div className="faqs-details">
                          <p>Whenever a player wins a...</p>
                          <button>Read</button>
                        </div>
                      </li>
                      <hr />
                      <li className="list-ol">
                        Collecting winnings
                        <div className="faqs-details">
                          <p>Whenever a player wins a...</p>
                          <button>Read</button>
                        </div>
                      </li>
                      <hr />
                      <li className="list-ol">
                        Collecting winnings
                        <div className="faqs-details">
                          <p>Whenever a player wins a...</p>
                          <button>Read</button>
                        </div>
                      </li>
                      <hr />
                      <li className="list-ol">
                        Collecting winnings
                        <div className="faqs-details">
                          <p>Whenever a player wins a...</p>
                          <button>Read</button>
                        </div>
                      </li>
                      <hr />
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RulesMobile;
