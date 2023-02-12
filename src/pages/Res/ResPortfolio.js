import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Res2Portfolio.css"

ChartJS.register(ArcElement, Tooltip, Legend);

function ResPortfolio({ infoData }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [pieData, setPieData] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    setLabels([]);
    setPieData([]);
    cookies.list.map((v) => {
      setPieData(prev => [...prev, (infoData.pieData2.weights[v[0]]*100).toFixed(1)])
      setLabels(prev => [...prev, v[0]]);
    });
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Weights(%):",
        data: pieData,
        backgroundColor: [
          "#FFB6C1",
          "#ADD8E6",
          "#F0E68C",
          "#90EE90",
          "#D3D3D3",
          "#FFA07A",
          "#AFEEEE",
          "#FFC0CB",
          "#F5F5DC"
        ],
        borderColor: [
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="res2-chart-div">
      <Pie className="chart" data={data} />
    </div>
  );
}

export default ResPortfolio;
