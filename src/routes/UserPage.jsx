import React from "react";
import "../Styles/UserPage.css";
import CategoryIcon from "../Assets/Icons/dashiconscategory.svg";


function UserPage() {
  return (
    <>
      <div className="container">
        <div className="user-search">
          <div className="all-user-box">all users</div>
          <div className="cate">
            <div className="search-box ">
              <input type="text" placeholder="Search users" />
            </div>
            <div className="players">
            <p className="top">Top players</p>
              <p className="date">Date select</p>
            </div>
          </div>
        </div>
        <button className="btn">
          <div className="icon">
          <img src={CategoryIcon} alt="" />

          </div>
          <p>All Transactions</p>
          </button>

        {/* <div className="category-">
          hi
        </div> */}
      </div>
    </>
  );
}

export default UserPage;
