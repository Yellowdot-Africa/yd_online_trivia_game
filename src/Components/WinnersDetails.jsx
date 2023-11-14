import React from "react";
import Table from "../utils/Table";

const WinnersDetails = ({ tableData, columns }) => {
  return (
    <div className="winners">
      <div className="winners-details">
        <p className="win">Winners</p>
        <p className="date">Date select</p>
      </div>
      <Table data={tableData} columns={columns} />
    </div>
  );
};

export default WinnersDetails;
