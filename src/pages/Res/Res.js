import "./Res.css";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import { AiFillHome } from "react-icons/ai";
import PieChartSeongwoo from "./Res2Portfolio";
import PieChart from "./ResPortfolio";
import Backtest from "./ResBacktest";
import axios from "axios";

function Res() {
  axios.defaults.withCredentials = true;
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  const [infoData, setInfoData] = useState();
  const ticker_arr = [];
  cookies.list.map(v => ticker_arr.push(v[1]));
  console.log(ticker_arr);
  useEffect(() => {
    // const url = "http://172.30.1.19:5000/gun";
    const url = "http://127.0.0.1:5000/gun";
    // const url = "http://43.207.52.62:5000/gun";
    
    const data = JSON.stringify({
      stock_list: cookies.list,
      tickers: ticker_arr,
      ror: cookies.ror,
    });
    console.log(cookies);
    console.log(`res : ${url}`);
    axios
      .post(url, data, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setInfoData(response.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {!loading ? (
        <div className="loading-main">
          <div className="loading-content">
            <Spinner animation="border" variant="primary" />
            <br />
            <br />
            <h4>자산 비중을 계산하는 중입니다...</h4>
          </div>
        </div>
      ) : (
        <div className="res-wrapper">
          <div className="sub-nav">
            <AiFillHome
              size={30}
              onClick={() =>
                window.location.replace("http://" + window.location.host)
              }
            />
            <span className="sub-nav-title">
              OCIO 퇴직연금 최적 포트폴리오 검색
            </span>
          </div>
          <div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  요구수익률 달성 최우선 자산비중
                </Accordion.Header>
                <Accordion.Body>
                <PieChartSeongwoo infoData={infoData}/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>위험 최소화 최우선 자산비중</Accordion.Header>
                <Accordion.Body>
                  <PieChart infoData={infoData} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>백테스트 결과</Accordion.Header>
                <Accordion.Body>
                  <Backtest infoData={infoData} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}

export default Res;
