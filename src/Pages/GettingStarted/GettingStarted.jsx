import React,{useState} from "react";
import "../../Pages/GettingStarted/GettingStarted.css";
import TrophyCup from "../../assets/Icons/TrophyCup.png";
import CustomButton from "../../Components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const GettingStarted = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const popularCategories = useSelector(state => state.categories.selectedCategory);
const { categories, isLoading, error } = useSelector(
  (state) => state.categories
);


// console.log('Popular Categories:', popularCategories);
// console.log('Selected Category:', selectedCategory);

// const category = popularCategories.find(cat => cat.id === selectedCategory);
const category = categories && categories.length > 0 
    ? categories.find(cat => cat.id === popularCategories)
    : null;


const btnText ="Begin";
const buttonStyle = {
  borderRadius: "23px",
  color: "#FFFFFF",
  fontFamily: "AlpinoMedium",
  fontSize: "16px",
  fontWeight: "500",
  padding: "0",
  width: "222px",
  backgroundColor: inputValue ? "#973CF266" : "#973CF2",
};

const handleQuestionPack = () => {
  navigate("/question-pack");
};
  return (
    <>
      <div className="getting-started-container">
        <div className="trophy-img">
          <img src={TrophyCup} alt="trophy" />
        </div>
        <h4 className="challenge">The Challenge!</h4>

        {category ? (
        <div key={category.id} className="category">

        <p className="game-inffo">{category.description}</p>
        {/* <p className="game-inffo">Information about the game</p> */}
        </div>
          ) : (
            <p className="game-inffo">No category selected</p>
            )}
        <CustomButton 
        buttonText={btnText} 
        style={buttonStyle}
        onClick={handleQuestionPack}
        disabled={loading || !inputValue}/>
      </div>
    </>
  );
};

export default GettingStarted;



