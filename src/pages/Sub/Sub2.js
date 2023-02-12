import { useState } from "react";
import { useCookies } from "react-cookie";
import "./Sub.css";
import subData from "./sub2Data.js";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { AiFillHome } from "react-icons/ai";

function Sub2() {
  const [cookies, setCookie, removeCookie] = useCookies();
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
    setCookie("sub2_list", checkList);
    window.location.replace(`http://${window.location.host}/res2`);
  };
  return (
    <div className="sub-all">
      <div className="sub-nav">
        <AiFillHome size={30}
          onClick={() =>
            window.location.replace("http://" + window.location.host)
          }
        />
        <span className="sub-nav-title">OCIO 여유자금 최적 포트폴리오 검색</span>
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
              <td>{cookies.sub2_name}</td>
            </tr>
            <tr>
              <td>사업자번호</td>
              <td>{cookies.sub2_bizNum.substr(0,3)}-{cookies.sub2_bizNum.substr(3,2)}-{cookies.sub2_bizNum.substr(5)}</td>
            </tr>
            <tr>
              <td>법인등록번호</td>
              <td>{cookies.sub2_corpNum.substr(0, 6)}-{cookies.sub2_corpNum.substr(6)}</td>
            </tr>
            <tr>
              <td>현금 및 현금성자산</td>
              <td>{cookies.sub2_cash}억</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#D9EFFF" }}>요구수익률</td>
              <td style={{ backgroundColor: "#D9EFFF", color: "red" }}>
                {cookies.sub2_ror}%
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
        <div>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{data[4].type}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {data[4].asset.map((v) => {
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
              <Accordion.Header>{data[5].type}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {data[5].asset.map((v) => {
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
              <Accordion.Header>{data[6].type}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {data[6].asset.map((v) => {
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

export default Sub2;
