import "../../Styles/CustomButton.css";
const CustomButton = ({ buttonText, style,ImageSrc }) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button type="submit" style={style} >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default CustomButton;
