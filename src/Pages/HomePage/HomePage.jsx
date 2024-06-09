import React from "react";
import LogoIcon from "../../assets/Icons/cup-broken.svg";
import HomeIcon from "../../assets/Icons/home-icon.png";
import "../HomePage/HomePage.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Toast from "../../Components/Toastify";
import { useNavigate } from "react-router-dom";
import TriviaCategories from "../../Components/TriviaCategories";
import NavigationIcons from "../../Components/NavigationIcons";
import Ad from "../../Components/Ad";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";




const HomePage = () => {
//   useEffect(() => {
//     Toast({ type: "success", message: "Welcome to the home page!" });
//   }, []);

const navigate=useNavigate();

const handleSeeAccount = () => {
    navigate("/account");
  };


  return (
    <>
      <div className="home-page">
        <div className="header">
          <div className="account-section">
            <div className="account-balance">
              <p className="acct" onClick={handleSeeAccount}>Account Balance</p>
              <p className="amount">NGN20,000.00</p>
              <p className="xpoint">Xp00</p>
            </div>
            <div className="logo-section">
              <img src={LogoIcon} alt="Logo" className="logo-section-logo" />
            </div>
            <div
              className="home-icon"
              onClick={() => navigate("/user-profile")}
            >
              <img src={HomeIcon} alt="" />
            </div>
          </div>
        </div>
        {/* <Toast /> */}
        <div className="toastt">
          <p>
            **Flash win, random people can win big prizes but time is not
            specified AD
          </p>
        </div>
        <div>
            <TriviaCategories/>
            <NavigationIcons/>
           
        </div>
        
      </div>
      <div >
      <Ad/>
      <Contact/>
      <Footer/>
      </div>



     
    </>
  );
};

export default HomePage;

