import React from "react";
import { Bar } from "react-chartjs-2";
// import {Chart as ChartJs} from "chart.js/auto";
// import ApexCharts from 'apexcharts'
import { Chart as ChartJs } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};
export default BarChart;
