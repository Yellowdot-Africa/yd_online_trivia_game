import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 8,
    width: "100%",
    backgroundColor: "#0B0B2A",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: completed < 100 ? "#FFFFFF" : bgcolor,
    transition: "width 1s ease-in-out,background-color 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
