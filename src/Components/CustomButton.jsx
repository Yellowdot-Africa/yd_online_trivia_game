import "../Styles/CustomButton.css";
const CustomButton = ({
  buttonText,
  style,
  Share = null,
  ImageSrc = null,
  onClick,
  loading,
  type = "button",
  disabled,
}) => {
  return (
    <>
      <div className=" mb-2 p-3">
        <button
          className="custom-button"
          type={type}
          style={style}
          onClick={onClick}
          // disabled={disabled}
          // disabled={disabled || loading}
        >
          <div className="button-content">
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
          </div>
        </button>
      </div>
    </>
  );
};

export default CustomButton;
