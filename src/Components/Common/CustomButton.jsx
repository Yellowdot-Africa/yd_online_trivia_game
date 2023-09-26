import "../../Styles/CustomButton.css";
const CustomButton = ({ buttonText, style,  Share=null, ImageSrc = null, onClick, loading }) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button type="submit" style={style} onClick={onClick}>
          {/* {buttonText} */}
          {ImageSrc}
          {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          {/* <span>Loading...</span> */}
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      ) : (
        buttonText
      )}
          {/* {Share} */}
          {/* onClick={() => setShowShareButtons(!showShareButtons)} */}
        </button>
      </div>
    </>
  );
};

export default CustomButton;
