/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../Styles/Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className="tool-tip-container"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && <div className="tool-tip">{text}</div>}
      </div>
    </>
  );
};

export default Tooltip;
