import React, { useState } from "react";
import BarChart from "../Components/BarChart";
// import ReactApexChart from 'react-apexcharts';

// import ApexChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import Button from "../Components/Button";
import { UserData } from "../utils/Data";
import Table from "../utils/Table";

import "../Styles/HomePage.css";

const HomePage = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Revenue",
        data: UserData.map((data) =>  data.Revenue),
        backgroundColor: [" #8B8BFF"],
        barThickness: 39,
        maxBarThickness: 28,
        barPercentage: 0.5,
        minBarLength: 5,
        borderRadius: 9,
      },
    
      
    ],
  });

 

  const tableData = [
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20000" },
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },

    
  ];

  return (
    <>
      <div className="container">
        <div className="gen-stats">
          <div className="box">
            <p>General Statistics</p>
            <div className="stats-text">
              <p>Today</p>
              <p>Weekly</p>
              <p>Monthly</p>
              <p>Last year</p>
              <div className="category-text-box">
                <p className="category-para">Categories</p>
                <p>Users</p>
                <p>Revenue</p>
              </div>
            </div>
            {/* <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        /> */}
            <BarChart  chartData={userData}  />
            {/* <BarChart chartData={userData} chartOptions={chartOptions} /> */}
          </div>
          <Button/>
        </div>

        <div className="category-performance">
          <div className="category-box">
            <p className="performance">Category Performance</p>
          <PieChart  />

          </div>
          <div className="winners">
            <div className="winners-details">
              <p className="win">Winners</p>
              <p className="date">Date select</p>
            </div>
          <Table data={tableData} />

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
