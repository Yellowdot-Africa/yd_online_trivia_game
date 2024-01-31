import React, { useState, useEffect } from "react";
import More from "../assets/Icons/more.svg";
import Play from "../assets/Icons/play.svg";
import "../Styles/CategoriesSection.css";
import axios from "axios";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-container">
      <div className="category-heading">
        <h4>Popular categories</h4>
        <p>Sign in to enjoy even more</p>
      </div>

      <div className="category-grid">
        <div className="football category-item">
          <h4>Football</h4>

          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">10,200</p>
              </div>
            </div>
          </div>
        </div>

        <div className="music category-item">
          <h4>Music</h4>
          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">10,200</p>
              </div>
            </div>
          </div>
        </div>

        <div className="movie category-item">
          <h4>Movies</h4>
          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">1,500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="history category-item">
          <h4>History</h4>
          <div className="no">
            <div className="play-now-cont">
              <button className="cate-button">PLAY NOW</button>
              <div className="play-contn">
                <img src={Play} alt="" />
                <p className="play-no">1,800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moree">
        <a href="#">
          More
          <img src={More} alt="more" />
        </a>
      </div>
    </div>
  );
};

export default CategoriesSection;

// import React, { useState, useEffect } from "react";
// import More from "../assets/Icons/more.svg";
// import Play from "../assets/Icons/play.svg";
// import "../Styles/CategoriesSection.css";
// import axios from "axios";

// const CategoriesSection = () => {
//   const [categories, setCategories] = useState([]);
//   const token = sessionStorage.getItem("token");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         console.log(`Bearer ${token}`);

//         const response = await axios.get(
//           "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories",
//           {
//             headers: {
//               Accept: "*/*",
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setCategories(response.data);
//         if (response.data.data.length > 0) {
//           setSelectedCategoryIndex(0);
//           setSelectedCategory(response.data.data[0]);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, [token]);

//   return (
//     <div className="category-container">
//       <div className="category-heading">
//         <h4>Popular categories</h4>
//         <p>Sign in to enjoy even more</p>
//       </div>

//       <div className="category-grid">
//         {categories.map((category) => (
//           <div key={category.id} className={`category-item ${category.name.toLowerCase()}`}>
//             <h4>{category.name}</h4>
//             <div className="no">
//               <div className="play-now-cont">
//                 <button className="cate-button">PLAY NOW</button>
//                 <div className="play-contn">
//                   <img src={Play} alt="" />
//                   <p className="play-no">{category.playCount}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="moree">
//         <a href="#">
//           More
//           <img src={More} alt="more" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CategoriesSection;
