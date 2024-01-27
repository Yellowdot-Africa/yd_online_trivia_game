import React from 'react';
import HomeNavBar from "../../Components/HomeNavBar";
import HomeSection from "../../Components/HomeSection";
import HomeFootIcon from '../../Components/HomeFootIcon';


const HomePage = ()=> {
  return (
    <>
        <div className='home-page-container'>
           <HomeNavBar /> 
           <HomeSection/>
           <HomeFootIcon/>

        </div>
    </>
  )
}

export default HomePage