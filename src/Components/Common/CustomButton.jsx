import "../../Styles/CustomButton.css";
const CustomButton = ({
  buttonText,
  style,
  Share = null,
  ImageSrc = null,
  onClick,
  loading,
}) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button type="submit" style={style} onClick={onClick}>
          {ImageSrc}
          {loading ? (
            <div className="d-flex align-items-center justify-content-center ">
              <div
                className="spinner-border ms-auto custom-spinner"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : (
            buttonText
          )}
        </button>
      </div>
    </>
  );
};

export default CustomButton;
