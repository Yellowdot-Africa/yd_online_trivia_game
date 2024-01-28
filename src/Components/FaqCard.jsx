import React from "react";

const FaqCard = ({isVisible}) => {
  return (
    <>
      {isVisible && (
    <div className="faq">
      <div className="faq-card">
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
      </div>
      )}
    </>
  );
};

export default FaqCard;






