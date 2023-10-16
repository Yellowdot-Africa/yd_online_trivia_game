import React from "react";
import "../Styles/ContentPage.css";
import Button from "../Components/Button";
import PieChart from "../Components/PieChart";
import Table from "../utils/Table";
import Search from "../Assets/Icons/search.svg";

const ContentPage = () => {

  const columns = [
    { key: "msidn", header: "MSIDN" },
    { key: "pricepoint", header: "Price point" },
    { key: "category", header: "Category" },
    { key: "winning", header: "Winning" },

  ];



  const tableData = [
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712',pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },

    
  ];

  return (
    <>
      <div className="container">
        <div className="categories">
          <div className="category-que-box">
            <p className="category-que-text">Categories and Questions</p>
            <div className="inputs-container">
              <select name="" id="">
                <option value="">Categories</option>
              </select>
              <div className="input-container"> 
              <input className="input" type="text" placeholder="Search" />
              <img className="searc-icon" src={Search} alt="search" />
              </div>
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
            <Table data={tableData} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
