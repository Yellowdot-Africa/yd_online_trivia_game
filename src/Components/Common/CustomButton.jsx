import "../../Styles/CustomButton.css";
const CustomButton = ({ buttonText, style, ImageSrc, onClick }) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button type="submit" style={style} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default CustomButton;
