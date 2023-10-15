import React from "react";
import "../Styles/ContentPage.css";
import Button from "../Components/Button";
import PieChart from "../Components/PieChart";
import Table from "../utils/Table";

const ContentPage = () => {
  const tableData = [
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20000",
    },
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20,000",
    },
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20,000",
    },
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20,000",
    },
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20,000",
    },
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20,000",
    },
    {
      column1: "+2348176855712",
      column2: "200",
      column3: "Music",
      column4: "20,000",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="categories">
          <div className="category-que-box">
            <p>Categories and Questions</p>
            <div className="inputs">
              <select name="" id="">
                <option value="">Categories</option>
              </select>
              <input type="text" placeholder="Search" />
              <img src="" alt="" />
            </div>
            <p>Questions</p>
          </div>

          <Button />
        </div>

        <div className="category-performance">
          <div className="category-box">
            <p className="performanc"> Single Category Performance</p>

            <PieChart />
          </div>
          <div className="winners">
            <div className="winners-details">
              <p className="win">Category Winners</p>
              <p className="date">Date select</p>
            </div>
            <Table data={tableData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
