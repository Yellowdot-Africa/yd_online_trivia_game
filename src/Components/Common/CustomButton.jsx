import "../../Styles/CustomButton.css";
const CustomButton = ({ buttonText, style, ImageSrc = null, Share=null, onClick }) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button type="submit" style={style} onClick={onClick}>
          {buttonText}
          {ImageSrc}
          {/* {Share} */}
          {/* onClick={() => setShowShareButtons(!showShareButtons)} */}
        </button>
      </div>
    </>
  );
};

export default CustomButton;
