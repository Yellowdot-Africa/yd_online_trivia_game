import React from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import "../../Pages/Rules/Rules.css";

const Rules = () => {
  return (
    <>
      <HomeNavBar />
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
        <div className="faq-card">
          <h3>Frequently asked questions</h3>
          <div className="faqs-lists">
            <ol className="faqs">
              <li>
                Collecting winnings
                <div className="faqs-details">
                  <p>Whenever a player wins a...</p>
                  <button>Read</button>
                </div>
              </li>
              <hr />
              <li>
                Collecting winnings
                <div className="faqs-details">
                  <p>Whenever a player wins a...</p>
                  <button>Read</button>
                </div>
              </li>
              <hr />
              <li>
                Collecting winnings
                <div className="faqs-details">
                  <p>Whenever a player wins a...</p>
                  <button>Read</button>
                </div>
              </li>
              <hr />
              <li>
                Collecting winnings
                <div className="faqs-details">
                  <p>Whenever a player wins a...</p>
                  <button>Read</button>
                </div>
              </li>
              <hr />
              <li>
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
      </div>
    </>
  );
};

export default Rules;
