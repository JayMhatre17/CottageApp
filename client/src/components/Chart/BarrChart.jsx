import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BarChart = () => {
  const [book, setBook] = useState([]);
  const [dataSet, SetDataSet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/book")
      .then((booking) => setBook(booking.data))
      .catch((err) => console.log(err));
  });

  const newDatasets = book.map((item) => {
    return {
      label: item.arrtime,
      data: item.noa,
      backgroundColor: "rgba(75, 192, 192, 0.4)",
    };
  });

  SetDataSet(newDatasets);
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu"],
    datasets: dataSet,
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <div className="p-10 border-red-200 top-10">
      <div>This is bar chart</div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;
