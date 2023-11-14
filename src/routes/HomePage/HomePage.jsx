import React, { useState } from "react";
import GeneralStatistics from "../../Components/GeneralStatistics/GeneralStatistics";
import CategoryPerformance from "../../Components/CategoryPerformance/CategoryPerformance";
import WinnersDetails from "../../Components/WinnersDetails";
import { UserData } from "../../utils/Data";
import "../HomePage/HomePage.css";

const HomePage = () => {
  const [selectedDataType, setSelectedDataType] = useState("today");

  const handleDataTypeChange = (dataType) => {
    setSelectedDataType(dataType);
  };

  const getChartData = () => {
    return UserData[selectedDataType];
  };

  const userData = {
    labels: getChartData().map((data) => data.year),
    datasets: [
      {
        label: "Revenue",
        data: getChartData().map((data) => data.Revenue),

        backgroundColor: getChartData().map((data, index, array) => {
          if (selectedDataType === "lastyear") {
            return "#FFEC83";
          } else {
            return "#8B8BFF";
          }
        }),

        barThickness: 39,
        maxBarThickness: 28,
        barPercentage: 0.5,
        minBarLength: 5,
        borderRadius: 9,
        borderWidth: 0,
      },
      {
        label: "User",
        data: getChartData().map((data) => parseInt(data.user)),
        backgroundColor: "#EFEFEF",
        barThickness: 39,
        maxBarThickness: 28,
        barPercentage: 0.5,
        minBarLength: 5,
        borderRadius: 6,
      },
    ],
  };

  const columns = [
    { key: "msidn", header: "MSIDN" },
    { key: "pricepoint", header: "Price point" },
    { key: "category", header: "Category" },
    { key: "winning", header: "Winning" },
  ];

  const tableData = [
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
    {
      msidn: "+2348176855712",
      pricepoint: "200",
      category: "Music",
      winning: "20,000",
    },
  ];

  return (
    <>
      <div className="container">
        <GeneralStatistics
          userData={userData}
          selectedDataType={selectedDataType}
          onDataTypeChange={handleDataTypeChange}
        />
      </div>

      <div className="category-performance">
        <CategoryPerformance />
        <WinnersDetails tableData={tableData} columns={columns} />
      </div>
    </>
  );
};

export default HomePage;
