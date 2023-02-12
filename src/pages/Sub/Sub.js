import { useState } from "react";
import { useCookies } from "react-cookie";
import "./Sub.css";
import subData from "./subData.js";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { AiFillHome } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";

function Sub() {
  const [cookies, setCookie] = useCookies();
  const [checkList, setCheckList] = useState([]);
  const [data, setData] = useState(subData);

  const checked = (e) => {
    if (e.target.checked) {
      setCheckList((prev) => [...prev, e.target.value]);
    } else {
      setCheckList(checkList.filter((v) => v !== e.target.value));
    }
  };
  const movePage = () => {
    if (checkList.length !== 9) {
      alert(`9개의 자산군을 선택해주세요.(선택된 수 : ${checkList.length}개)`);
      return;
    }
    let arr = [];
    subData.map(v => {
      v.asset.map(asset => {
        const ticker = asset.ticker
        checkList.map(value => {
          if(value === ticker) {
            arr.push([asset.name, ticker]);
          }
        })
      })
    })
    // console.log(arr);
    setCookie("list", arr);
    window.location.replace(`http://${window.location.host}/res`);
  };
  return (
    <div className="sub-all">
      <div className="sub-nav">
        <AiFillHome size={40}
          onClick={() =>
            window.location.replace("http://" + window.location.host)
          }
        />
        <span className="sub-nav-title">OCIO 퇴직연금 최적 포트폴리오 검색</span>
      </div>
      <div className="sub-title">기업 정보</div>
      <div className="sub-info">
        <Table responsive bordered hover>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>기업명</td>
              <td>{cookies.name}</td>
            </tr>
            <tr>
              <td>근속연수</td>
              <td>{cookies.year}년</td>
            </tr>
            <tr>
              <td>임금상승률</td>
              <td>{cookies.salary}%</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#D9EFFF" }}>요구수익률</td>
              <td style={{ backgroundColor: "#D9EFFF", color: "red" }}>
                {cookies.ror}%
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="sub-asset-title">자산군 선택</div>

      <div className="sub-asset">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{data[0].type}</Accordion.Header>
            <Accordion.Body>
              <div>
                <ul>
                  {data[0].asset.map((v) => {
                    return (
                      <li key={v.name}>
                        <OverlayTrigger
                          key={v.name}
                          placement={"right"}
                          overlay={
                            <Tooltip id={`tooltip-${v.name}`}>
                              {v.explain}
                            </Tooltip>
                          }
                        >
                          <label htmlFor={v.name}>
                            <input
                              onChange={checked}
                              type="checkbox"
                              name={v.name}
                              value={v.ticker}
                              id={v.name}
                            />
                            &nbsp;{v.name}
                          </label>
                        </OverlayTrigger>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{data[1].type}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {data[1].asset.map((v) => {
                    return (
                      <li key={v.name}>
                        <OverlayTrigger
                          key={v.name}
                          placement={"right"}
                          overlay={
                            <Tooltip id={`tooltip-${v.name}`}>
                              {v.explain}
                            </Tooltip>
                          }
                        >
                          <label htmlFor={v.name}>
                            <input
                              onChange={checked}
                              type="checkbox"
                              name={v.name}
                              value={v.ticker}
                              id={v.name}
                            />
                            &nbsp;{v.name}
                          </label>
                        </OverlayTrigger>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{data[2].type}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {data[2].asset.map((v) => {
                    return (
                      <li key={v.name}>
                        <OverlayTrigger
                          key={v.name}
                          placement={"right"}
                          overlay={
                            <Tooltip id={`tooltip-${v.name}`}>
                              {v.explain}
                            </Tooltip>
                          }
                        >
                          <label htmlFor={v.name}>
                            <input
                              onChange={checked}
                              type="checkbox"
                              name={v.name}
                              value={v.ticker}
                              id={v.name}
                            />
                            &nbsp;{v.name}
                          </label>
                        </OverlayTrigger>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{data[3].type}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {data[3].asset.map((v) => {
                    return (
                      <li key={v.name}>
                        <OverlayTrigger
                          key={v.name}
                          placement={"right"}
                          overlay={
                            <Tooltip id={`tooltip-${v.name}`}>
                              {v.explain}
                            </Tooltip>
                          }
                        >
                          <label htmlFor={v.name}>
                            <input
                              onChange={checked}
                              type="checkbox"
                              name={v.name}
                              value={v.ticker}
                              id={v.name}
                            />
                            &nbsp;{v.name}
                          </label>
                        </OverlayTrigger>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="sub-move-btn">
        <Button onClick={movePage} variant="success" size="lg">
          선택완료
        </Button>
      </div>
    </div>
  );
}

export default Sub;
