import React from "react";
import "../Styles/Pagination.css";

const Pagination = ({ totalItems, activeIndex, onChange }) => {
  const dots = Array.from({ length: totalItems }, (_, index) => index);

  return (
    <div className="pagination">
      {dots.map((dotIndex) => (
        <div
          key={dotIndex}
          className={`dot ${dotIndex === activeIndex ? "active" : ""}`}
          onClick={() => onChange(dotIndex)}
        />
      ))}
    </div>
  );
};

export default Pagination;
