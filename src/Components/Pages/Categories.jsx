import React, { useState, useEffect } from "react";
import "../../Styles/Categories.css";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();
  const buttonText = "Start Trivia";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
    width: "222px",
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem("token");
  console.log("token", token);

  useEffect(() => {
    const fetchGameCategories = async () => {
      try {
        const response = await axios.get(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories",
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        setCategories(response.data.data);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGameCategories();

    // const fetchCategory = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategory",
    //       {
    //         headers: {
    //           "Accept": "*/*",
    //           "Content-Type": "application/json",
    //           "Authorization": `Bearer ${token}`,
    //         },
    //       }
    //     );

    //     setCategory(response.data.data);

    //     setLoading(false);
    //   } catch (error) {
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // };

    // fetchCategory();
  }, []);
  console.log("categories", categories);

  return (
    <div>
      <h4>CATEGORIES</h4>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="loading">Error fetching game categories: {error}</p>
      ) : (
        <div className="categories-container">
          <img src={CaretUp} alt="caretup" />

          {categories?.map((category) => (
            <div key={category.id} className="category-cont">
              <p>{category.name}</p>
            </div>
          ))}
          <img src={CaretDown} alt="caretdown" />

          <CustomButton
            buttonText={buttonText}
            style={buttonStyles}
            onClick={() => navigate("/game-info")}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
