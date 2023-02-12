import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "./TabCommon.css";
import Header_test from "../../layout/Header_test";

ChartJS.register(ArcElement, Tooltip, Legend);

function Tab01() {
  let arr = [];
  let backData = [];
  axios.defaults.withCredentials = true;
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const data = {
    labels: cookies.list,
    datasets: [
      {
        label: "Weights(%):",
        data: value,
        backgroundColor: [
          "#AAE3E2",
          "#D61355",
          "#F94A29",
          "#D9ACF5",
          "#FCE22A",
          "#FFCEFE",
          "#30E3DF",
          "#FF8787",
          "#B1B2FF",
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
  useEffect(() => {
    const url = "http://127.0.0.1:5000/test";
    const data = JSON.stringify({
      tickers: cookies.list,
      ror: cookies.ror,
    });
    axios
      .post(url, data, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        const index = response.data[0].index + "";
        cookies.list.map((v) =>
          arr.push((response.data[1][v][index] * 100).toFixed(1))
        );
        setCookie("portFolio", arr);
        response.data[2].backTest.map((v) => backData.push(v));
      })
      .then(() => {
        setValue(arr);
        setLoading(true);
        console.log(backData);
        setCookie("backTest", [...backData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {!loading ? (
        <div className="loading-main">
          <div className="loading-content">
            <Spinner animation="border" variant="primary" />
            <h4>자산 비중을 계산하는 중입니다...</h4>
          </div>
        </div>
      ) : (
        <>
          <Header_test nav={1} />
          <div className="main">
            <div>
              <div className="sub-title">
                <h1> {cookies.name} </h1>
              </div>
            </div>
            <div className="chart-div">
              <Pie className="chart" data={data} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Tab01;
