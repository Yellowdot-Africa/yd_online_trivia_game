import React, { useState, useEffect } from "react";
import "../../Styles/Categories.css";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import CustomButton from "../Common/CustomButton";
import Spinner from "react-bootstrap/Spinner";
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
    fetchGameCategories();
    fetchCategory();
    createCategory();
  }, []);

  const fetchGameCategories = async () => {
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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

  const createCategory = async () => {
    try {
      const categoryData = {
        name: "History",
        description: "Quiz questions in this category are strictly for history",
      };
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/CreateCategory",
        categoryData,
       

        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newCategory = response.data.data;

      setCategories([...categories, newCategory]);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategory",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCategory(response.data.data);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const updateCategory = async (categoryId, updatedData) => {
    try {
      const response = await axios.put(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/UpdateCategory?categoryID=${categoryId}`,
        updatedData,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedCategories = categories.map((category) =>
        category.id === categoryId ? response.data.data : category
      );
      setCategories(updatedCategories);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/DeleteCategory?categoryID=${categoryId}`,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedCategories = categories.filter(
        (category) => category.id !== categoryId
      );
      setCategories(updatedCategories);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  console.log("categories", categories);

  return (
    <div>
      <h4>CATEGORIES</h4>
      {loading ? (
      
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      

      ) : error ? (
        <p className="loading">Error fetching game categories: {error}</p>
      ) : categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <div className="categories-container">
          <img className="caret" src={CaretUp} alt="caretup" />
          {categories.map((category) => (
            <div key={category.id} className="category-cont">
              <p>{category.name}</p>
            </div>
          ))}
          <img className="caret" src={CaretDown} alt="caretdown" />
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

//   return (
//     <div>
//       <h4>CATEGORIES</h4>
//       {loading ? (
//         <p className="loading">Loading...</p>
//       ) : error ? (
//         <p className="loading">Error fetching game categories: {error}</p>
//       ) : (
//         {categories.length === 0 ? (
//           <p>No categories available.</p>
//         ) : (
//         <div className="categories-container">
//           <img className="caret" src={CaretUp} alt="caretup" />

//           {categories?.map((category) => (
//             <div key={category.id} className="category-cont">
//               <p>{category.name}</p>
//             </div>
//           ))}
//           <img className="caret" src={CaretDown} alt="caretdown" />

//           <CustomButton
//             buttonText={buttonText}
//             style={buttonStyles}
//             onClick={() => navigate("/game-info")}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;
