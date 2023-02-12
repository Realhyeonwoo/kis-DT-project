import "./Res2.css";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import { AiFillHome } from "react-icons/ai";
import PieChart from "./Res2Portfolio";
import Backtest from "./Res2Backtest";
import axios from "axios";

function Res2() {
  axios.defaults.withCredentials = true;
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  const [infoData, setInfoData] = useState();
  useEffect(() => {
    // const url = "http://172.30.1.19:5000/seoungwoo";
    const url = "http://127.0.0.1:5000/seoungwoo";
    // const url = "http://43.207.52.62:5000/seoungwoo";
    const data = JSON.stringify({
      tickers: cookies.sub2_list,
      ror: cookies.sub2_ror,
    });
    console.log(`res2 : ${url}`);
    axios
      .post(url, data, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
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
            <h4>선택 값을 입력하는 중입니다...</h4>
          </div>
        </div>
      ) : (
        <div className="res2-wrapper">
          <div className="sub-nav">
            <AiFillHome
              size={30}
              onClick={() =>
                window.location.replace("http://" + window.location.host)
              }
            />
            <span className="sub-nav-title">OCIO 여유자금 최적 포트폴리오 검색</span>
          </div>
          <div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>요구수익률 달성 최우선 모델</Accordion.Header>
                <Accordion.Body>
                    <PieChart infoData={infoData}/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>백테스트 결과</Accordion.Header>
                <Accordion.Body>
                    <Backtest infoData={infoData}/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}

export default Res2;
