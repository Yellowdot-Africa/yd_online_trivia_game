// import React, {useState, useEffect} from "react";
// import "../../Styles/CategoryOption.css";
// import CaretUp from "../../assets/icons/uiwup.svg";
// import CaretDown from "../../assets/icons/uiwdown.svg";

// const CategoryOptions = () => {
//   const [categories, setCategories] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = sessionStorage.getItem("token");
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

//   useEffect(() => {
//     fetchGameCategories();
//   }, []);

//   const fetchGameCategories = async () => {
//     try {
//       const response = await axios.get(
//         "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories",
//         {
//           headers: {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setCategories(response.data.data);

//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   const handleCategorySelect = (index, category) => {
//     setSelectedCategoryIndex(index);
//     setSelectedCategory(category);
//   };

//   return (
//     <>

// <div className="categories-container">
//           <img
//             className="caret up"
//             src={CaretUp}
//             alt="caretup"
//             onClick={() => {
//               const newIndex =
//                 selectedCategoryIndex > 0
//                   ? selectedCategoryIndex - 1
//                   : categories.length - 1;
//               handleCategorySelect(newIndex);
//             }}
//           />
//           <div className="category-options">
//             {categories.map((category, index) => (
//               <div
//                 className={`option ${
//                   selectedCategoryIndex === index ? "selected" : ""
//                 }`}
//                 key={category.id}
//                 onClick={() => handleCategorySelect(index, category)}
//               >
//                 {category.name}
//               </div>
//             ))}
//           </div>
//           <img
//             className="caret down"
//             src={CaretDown}
//             alt="caretdown"
//             onClick={() => {
//               const newIndex =
//                 selectedCategoryIndex < categories.length - 1
//                   ? selectedCategoryIndex + 1
//                   : 0;
//               handleCategorySelect(newIndex);
//             }}
//           />
//           </div>
//       {/* <div className="categories-container">
//         <img src={CaretUp} alt="caretup" />
//         <p className="history">History</p>
//         <p className="football">Football</p>
//         <p className="movies">Movies</p>
//         <img src={CaretDown} alt="caretdown" />
//       </div> */}
//     </>
//   );
// };

// export default CategoryOptions;



