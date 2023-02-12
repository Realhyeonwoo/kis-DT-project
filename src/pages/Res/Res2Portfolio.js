import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Res2Portfolio.css"

ChartJS.register(ArcElement, Tooltip, Legend);

function Sub2Portfolio({ infoData }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [pieData, setPieData] = useState([]);
  console.log(cookies);
  useEffect(() => {
    setPieData([]);
    if(window.location.pathname === "/res") {
      console.log("res");
      cookies.list.map((v) => {
        setPieData(prev => [...prev, (infoData.pieData[v[1]][infoData.index] * 100).toFixed(1)])
      });
    } else {
      console.log("res2");
      cookies.sub2_list.map((v) => {
        setPieData(prev => [...prev, (infoData.pieData[v][infoData.index] * 100).toFixed(1)])
      });
    }
  },[]);
  const res_labels = [];
  cookies.list.map(v => res_labels.push(v[0]));
  const data = {
    labels: (window.location.pathname === "/res" ?  res_labels : cookies.sub2_list),
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

export default Sub2Portfolio;
