import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  selectCategory,
  selectGame,
  getGames
} from "../features/categories/categoriesSlice";
import "../Styles/TriviaCategories.css";
import { useNavigate } from "react-router-dom";

const TriviaCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector((state) => state.categories);
  const categories = useSelector((state) => state.categories.categories);
  const games = useSelector((state) => state.categories.games);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGames());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    if (!Array.isArray(games)) {
      console.error('Games array is not defined');
      return;
    }

    if (!category || !category.name) {
      console.error('Category is not defined or does not have a name');
      return;
    }

    console.log("Selected Category ID:", category.id);
    console.log("Games Array:", games);

    const selectedGame = games.find((game) =>
      game.name.toLowerCase().includes(category.name.toLowerCase())
    );

    if (selectedGame) {
      console.log("Selected Game ID:", selectedGame.id);
      dispatch(selectCategory(category.id));
      dispatch(selectGame(selectedGame.id));
    } else {
      console.warn('Game not found for the selected category, using default game ID');
      dispatch(selectCategory(category.id));
      dispatch(selectGame(1)); 
    }

    navigate("/getting-started",  {
      state: { 
        selectedCategoryName: category.name,  
        // selectedCategoryImage: category.logo,
        selectedCategoryImage: `data:image/png;base64,${category.logo}`, 

      },
    });
  };

 

  if (error) {
    return <div>Error loading categories or games: {error.message}</div>;
  }

  return (
    <>
      <div className="category-container">
        <div className="category-heading">
          <h4>Trivia Categories</h4>
          <p>We know how wide your interests are...</p>
        </div>

        <div className="category-grid">
          {Array.isArray(categories) &&
            categories.map((category) => (
              <div
                key={category.id}
                className={`category-item ${category.name.toLowerCase()}`}
              >
                <img
                  className="category-images"
                  src={`data:image/png;base64,${category.logo}`}
                  alt={category.name}
                />
                <div className="category-details">
                  <div className="countt-container">
                    <h4>{category.name}</h4>
                    {/* <p className="total-count">1.2K</p> */}
                  </div>
                  <button
                    className="play-btn"
                    onClick={() => handleCategoryClick(category)}
                  >
                    Play
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TriviaCategories;




