import "../../Styles/CustomButton.css";
const CustomButton = ({ buttonText, style, ImageSrc = null, onClick }) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button type="submit" style={style} onClick={onClick}>
          {buttonText}
          {ImageSrc}
        </button>
      </div>
    </>
  );
};

export default CustomButton;
