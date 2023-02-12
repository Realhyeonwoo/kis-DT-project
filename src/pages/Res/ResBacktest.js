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
import "./ResBacktest.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ResBacktest({ infoData }) {
  const [labels, setLabels] = useState([]);
  const [yData, setYdata] = useState([]);
  const [seongwooData, setSeongwooData] = useState([]);

  useEffect(() => {
    let sortDate = [];
    infoData.backData.time.map((time) =>
      sortDate.push(new Date(time).toISOString().substring(0, 10))
    );
    
    const years = parseInt(sortDate[sortDate.length-1]) - parseInt(sortDate[1].substring(0,4))
    
    setLabels(sortDate);
    infoData.backData.Rp.map((y) =>
      setYdata((prev) => [...prev, (y * 100).toFixed(1)])
    );

    infoData.backTest.map(v => {
      setSeongwooData(prev => [...prev, v.y]);
    })
    
  }, []);

  const options = {
    pointStyle: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Risk Parity(%)",
        data: yData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Markowitz(%)",
        data: seongwooData,
        borderColor: "rgb(0, 99, 132)",
        backgroundColor: "rgba(0, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="res-backtest-div">
      <Line options={options} data={data} />
    </div>
  );
}

export default ResBacktest;
