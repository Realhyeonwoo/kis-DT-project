import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Res2Backtest.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Res2Backtest({ infoData }) {
  const options = {
    pointStyle: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = [];
  const yData = [];
  infoData.backTest.map((v) => {
    labels.push(v.x);
    yData.push(v.y);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "누적수익률(%)",
        data: yData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="res2-backtest-div">
      <Line options={options} data={data} />
    </div>
  );
}

export default Res2Backtest;
