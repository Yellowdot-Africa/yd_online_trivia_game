import React from "react";
import SideBar from "../../Components/Admin/SideBar";
import MainPage from  "../../Components/Admin/MainPage";
import "../../Styles/Dashboard.css";



const Dashboard = () => {
  return (
    <>
      <div className="dash">
        <SideBar />
        <div className="main-container">
          <MainPage />
         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
