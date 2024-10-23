import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/categories/categoriesSlice";
import Play from "../assets/Icons/play.svg";
import { useNavigate } from "react-router-dom";
import "../Styles/PopularCategories.css";
import { Circles } from "react-loader-spinner";
import NavBar from "./NavBar";
import CloseIcon from "../assets/Icons/close-iccon.svg";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import LogoCup from "../assets/Icons/logoicon.svg";
import History from "../assets/Images/History1.png";
import Movie from "../assets/Images/Movie.png";
import Politics from "../assets/Images/Politics.png";
import Sports from "../assets/Images/Sports.png";

import Login from "../assets/Icons/login.svg";
import SignUp from "../assets/Icons/sign-in.svg";
import TC from "../assets/Icons/Pen.png";
import FAQ from "../assets/Icons/Chat.png";

const PopularCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isImageOpen, setImageOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const categoriesImages = [History, Movie, Politics, Sports];

  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // if (isLoading) {
  //   return (
  //     <div className="category-spinner-container">
  //       <Circles color="#D9D9D9" height={30} width={30} />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const toggleImage = () => {
    setImageOpen(!isImageOpen);
    // setShowLogin(true);
    // setShowSignup(false);
  };

  const closeMenu = () => {
    setImageOpen(false);
    // setShowLogin(false);
    // setShowSignup(false);
  };

  const toggleLoginForm = () => {
    // setShowLogin(!showLogin);
    setShowSignup(false);
    setShowLogin(true);
  };

  const toggleSignupForm = () => {
    // setShowSignup(!showSignup);
    setShowLogin(false);
    setShowSignup(true);
  };

  const navigateToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleImageClick = () => {
    toggleImage();
  };

  const handlePlayClick = (category) => {
    console.log(`Playing category: ${category.name}`);
    toggleImage();
  };

  return (
    <>
      {isImageOpen && <div className="backdropp" onClick={closeMenu} />}
      <div
        className={`categories-container ${isImageOpen ? "blur" : ""}`}
        id="popularcategories"
      >
        <div className="categories-heading">
          <h4>Popular Categories</h4>
          <p>Pick a Category to Play</p>
        </div>

        <div className="categoryy-grid">
          {Array.isArray(categories) &&
            // categories.map((category) => (
            categories.slice(0, 4).map((category, index) => (
              <div
                key={category.id}
                className={`category-item ${category.name.toLowerCase()}`}
              >
                <img
                  // src={`data:image/png;base64,${category.logo}`}
                  src={categoriesImages[index]}
                  alt={category.name}
                  className="category-logo-img"
                  onClick={handleImageClick}
                />
                <div className="categories-btn-card">
                  <div className="count-container">
                    <h4>{category.name}</h4>
                  </div>
                  <button
                    className="total-countt-btn"
                    onClick={() => handlePlayClick(category)}
                  >
                    Play
                  </button>
                </div>
              </div>
            ))}
        </div>

        {isLoading && (
          <div className="category-spinner-container">
            <Circles color="#D9D9D9" height={30} width={30} />
          </div>
        )}
        {error && (
          <div className="errrorr-message">
            <p>
            Oops! Something went wrong on our end. Please try again later.
            </p>
          </div>
        )}
      </div>

      {isImageOpen && (
        <div className={`menu-pagee ${isImageOpen ? "menu-openn" : ""}`}>
          <div className={`menuu ${isImageOpen ? "openn" : ""}`}>
            <div className="close-header">
              <img src={LogoCup} alt="" />
              <img
                src={CloseIcon}
                alt="Close"
                className="close-icon"
                onClick={closeMenu}
              />
            </div>

            <ul className="menu-list">
              <li className="menu-item" onClick={toggleLoginForm}>
                <div className="form-container">
                  <img src={Login} alt="login" />
                  Login
                </div>
              </li>
              <div className={`login-divv ${showLogin ? "" : "hidden"}`}>
                {showLogin && <LoginForm isLoginOpen={true} />}
              </div>

              <li className="menu-item" onClick={toggleSignupForm}>
                <div className="form-container">
                  <img src={SignUp} alt="signup" />
                  Signup
                </div>
              </li>
              <div className={`signup-divv ${showSignup ? "" : "hidden"}`}>
                {showSignup && (
                  <SignUpForm
                    isSignUpOpen={true}
                    navigateToLogin={navigateToLogin}
                  />
                )}
              </div>
            </ul>

            <div className="additional-contentt">
              <p>
                <a href="/terms" className="content-linkss">
                  <img src={TC} alt="tc" />
                  T's&C's
                </a>
                <a href="/faq" className="content-linkss">
                  <img src={FAQ} alt="" /> FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularCategories;