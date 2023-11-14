import React from "react";
import Button from "../Button";
import BarChart from "../BarChart";
import "../../Components/GeneralStatistics/GeneralStatics.css";

const GeneralStatistics = ({
  userData,
  selectedDataType,
  onDataTypeChange,
}) => {
  return (
    <>
      <div className="gen-stats">
        <div className="box">
          <p>General Statistics</p>
          <div className="stats-text">
            <p onClick={() => onDataTypeChange("today")}>Today</p>
            <p onClick={() => onDataTypeChange("weekly")}>Weekly</p>
            <p onClick={() => onDataTypeChange("monthly")}>Monthly</p>
            <p onClick={() => onDataTypeChange("lastyear")}>Last year</p>
            <div className="category-text-box">
              <p className="category-para">Games</p>
              <p>Users</p>
              <p>Revenue</p>
            </div>
          </div>
          <BarChart chartData={userData} />
        </div>
        <Button />
      </div>
    </>
  );
};

export default GeneralStatistics;
