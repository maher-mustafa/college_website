// src/components/FlowChart.js
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FlowChart = () => {
  const [info, setInfo] = useState([]);

  const data = {
    labels: [
      "Students",
      "Instructors",
      "Courses",
      "Departments",
      "Applications",
    ],
    datasets: [
      {
        label: "معلومات عامة",
        data:[5,6,3,4,8],

        backgroundColor: "rgba(75, 192, 200, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    
    },
  };
 
  return (
    <>
      <h2 className="drived-page-title">معلومات النظام</h2>
      <Bar data={data} options={options} />
    </>
  );
};

export default FlowChart;
