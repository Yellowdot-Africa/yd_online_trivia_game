import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData, barColor }) => {
  const formatYAxis = (value) => {
    return value + "K";
  };
  const chartOptions = {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => formatYAxis(value),
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: {
          topRight: 10,
          bottomRight: 10,
        },
      },
    },
  };

  return (
    <>
      <Bar data={chartData} options={chartOptions} barColor={barColor} />
    </>
  );
};
export default BarChart;
