import React from "react";
import ReactPaginate from "react-paginate";
import "../Styles/Pagination.css";

function Pagination({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      previousLabel=" Prev"
      nextLabel="Next "
      anotherLabel="X/100"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(data) => handlePageClick(data.selected)}
    />
  );
}

export default Pagination;
