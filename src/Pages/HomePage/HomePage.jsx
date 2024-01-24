import React from 'react';
import HomeNavBar from "../../Components/HomeNavBar";
import HomeSection from "../../Components/HomeSection";
import HomeFootIcon from '../../Components/HomeFootIcon';
import "../HomePage/HomePage.css";


const HomePage = ()=> {
  return (
    <>
        <div className='home-page-container'>
           <HomeNavBar showNavMobile={true}/> 
           <HomeSection/>
           <HomeFootIcon/>

        </div>
    </>
  )
}

export default HomePage