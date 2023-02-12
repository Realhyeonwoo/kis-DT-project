import { useState } from "react";
import { useCookies } from "react-cookie";
import "./Search.css";
import Button from "react-bootstrap/Button";
import { FcSearch } from "react-icons/fc";
import data from "./searchData.js";
import data2 from "./searchData2.js";
import {AiFillHome} from "react-icons/ai";

function Main() {
  const [cookies, setCookie, removeCookie] = useCookies(["information"]);
  const [keyword, setKeyword] = useState();
  const [results, setResult] = useState([]);
  const [flag, setFlag] = useState(false);
  const [year, setYear] = useState("");
  const [salary, setSalary] = useState("");
  const [rank, setRank] = useState("");

  const updateField = (field, value, update = true) => {
    if (update) {
      var results = data.filter((item) => true === matchName(item.name, value));
      setResult({ results });
    }

    if (field === "keyword") {
      setKeyword(value);
    }

    if (field === "results") {
      setResult(value);
    }
  };

  const matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword === "") return false;
    return name === keyword.toString().toLowerCase();
  };

  const updateText = (name, year, salary, rank) => {
    console.log(name, year, salary);
    updateField("keyword", name, false);
    updateField("results", []);
    setYear(year);
    setSalary(salary);
    console.log((salary/year/100).toFixed(3));
    setRank((salary/year/100).toFixed(3));
  };

  const onSearchCompany = () => {
    if (keyword === undefined || keyword.trim().length === 0) {
      alert("기업명을 입력하세요");
      return;
    }
    if (year === "" || salary === "") {
      alert(
        "Dart정보에 없는 기업입니다. 근속연수와 임금상승률을 입력해주세요!"
      );
    }
    setFlag((prev) => !prev);
  };

  const onKeywordReset = () => {
    if (keyword !== undefined && keyword !== "") {
      setFlag(false);
      setYear("");
      setSalary("");
      updateText("", "", "", "");
    }
  };

  const movePage = () => {
    if(year === "" || salary === "") {
      alert("근속연수와 임금상승률을 입력하세요")
      return;
    }
    removeCookie("information", {});
    setCookie("name", keyword);
    setCookie("year", year);
    setCookie("salary", salary);
    if(rank >= 0.255) {
      setCookie("section", 50);
      setCookie("ror", 8.27);
      window.location.replace("http://" + window.location.host + "/sub")
    }

    data2.map((v, idx) => {
      if((idx+1) === data2.length) return;
      if((rank >= v.rank) && (rank < data2[idx+1].rank)) {
        setCookie("section", v.section);
        setCookie("ror", (v.ror+3.27).toFixed(2));
        return false;
      }
    })
    window.location.replace("http://" + window.location.host + "/sub")
  };

  var renderResults;
  const arr = results["results"];
  if (arr) {
    renderResults = arr.map((item) => {
      return (
        <SearchView
          updateText={updateText}
          name={item.name}
          year={item.year}
          salary={item.salary}
          rank={item.rank}
          key={item.name}
        />
      );
    });
  }
  const moveStartPage = () => {
    window.location.replace("http://"+window.location.host);
  }  

  return (
    <div className="main-wrapper">
      {/* <div className="main-logo">
        <img src="#" alt="image"/>
      </div> */}
      <div className="main-content">
        <h1><AiFillHome onClick={moveStartPage}/> OCIO 퇴직연금 최적 포트폴리오 검색</h1>
        <div className="keyword_search">
          <div className="search_wrapper">
            <input
              className="search_bar"
              value={keyword || ""}
              onChange={(e) => updateField("keyword", e.target.value)}
              onClick={onKeywordReset}
              type="text"
              id="user_name"
              autoComplete="off"
              required
            />
            <label className="search_bar_label" htmlFor="user_name">
              <span>기업명을 입력하세요</span>
            </label>
          </div>

          <Button
            className="search_btn"
            onClick={onSearchCompany}
            variant="outline-dark"
            size="sm"
          >
            <FcSearch size="30" />
          </Button>
          <div className="search-results">{renderResults}</div>
        </div>
        {flag ? (
          <div className="info_search">
            <strong>근속연수(년)는&nbsp;</strong>
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="info_input"
              type="number"
            />
            <strong>임금상승률(%)</strong>은&nbsp;
            <input
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="info_input"
              type="number"
            />
            <div className="moveDiv">
              <span className="moveBtn" onClick={movePage}>
                분석
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
 
}

const SearchView = ({ name, year, salary, rank, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name, year, salary, rank)}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      <span className="search-keyword">{name}</span>
    </div>
  );
};

export default Main;
