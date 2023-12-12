import React from 'react';
import HomeNavBar from "../../Components/HomeNavBar";
import HomeSection from "../../Components/HomeSection";
import "../HomePage/HomePage.css";


const HomePage = ()=> {
  return (
    <>
        <div>
           <HomeNavBar/> 
           <HomeSection/>
        </div>
    </>
  )
}

export default HomePage