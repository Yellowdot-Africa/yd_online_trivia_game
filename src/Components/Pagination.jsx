import React from "react";
import "../Styles/Pagination.css";

const Pagination = ({ totalItems, activeIndex, onChange, statuses }) => {
  const dots = Array.from({ length: totalItems }, (_, index) => index);

  return (
    <div className="pagination">
      {dots.map((dotIndex) => (
        <div
          key={dotIndex}
          className={`dot ${
            dotIndex === activeIndex
              ? "active"
              : statuses[dotIndex] === "correct"
              ? "correct"
              : statuses[dotIndex] === "wrong"
              ? "wrong"
              : ""
          }`}
          onClick={() => onChange(dotIndex)}
        />
      ))}
    </div>
  );
};

export default Pagination;







