import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoIcon from "../../assets/Icons/cup-broken.svg";
import HomeIcon from "../../assets/Icons/home-icon.png";
import "../HomePage/HomePage.css";
import {
  updateBalance,
  setWalletBalance,
  fetchWalletBalance
} from "../../features/wallet/walletSlice";
import { useNavigate } from "react-router-dom";
import TriviaCategories from "../../Components/TriviaCategories";
import NavigationIcons from "../../Components/NavigationIcons";
import Ad from "../../Components/Ad";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
// import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  const token = useSelector((state) => state.auth.jwt);

  // useEffect(() => {
  //   dispatch(setWalletBalance());
  // }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchWalletBalance(token)); 
    }
  }, [dispatch, token]);



  const handleSeeAccount = () => {
    navigate("/account");
  };

  return (
    <>
      <div className="home-page">
        <div className="header">
          <div className="account-section">
            <div className="account-cont-cont">
              <div className="account-balance">
                <p className="acct" onClick={handleSeeAccount}>
                  Account Balance
                </p>
                <p className="amount">NGN{walletBalance}</p>

                <p className="xpoint"></p>
              </div>
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

        <div className="toastt">
          <p>
            **Flash win, random people can win big prizes but time is not
            specified AD
          </p>
        </div>
        <div>
          <TriviaCategories />
          <NavigationIcons bgColor={"#404040"} opacity={0.9} />
        </div>
      </div>
      <div>
        <Ad />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;






