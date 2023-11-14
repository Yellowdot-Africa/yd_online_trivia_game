import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../Styles/PieChart.css";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",

      data: {
        datasets: [
          {
            data: [50, 50, 300],
            backgroundColor: ["#FFEC83", "#FF90B3", "#8B8BFF"],
            borderWidth: 8,
          },
        ],

        labels: ["Music", "Current affairs", "Football"],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 15,
              boxHeight: 15,
              borderRadius: 15,
            },
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div>
        <canvas
          className="canvas-pie"
          ref={chartRef}
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </>
  );
};
export default PieChart;
