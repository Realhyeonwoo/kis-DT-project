import { useState } from "react";
import { useCookies } from "react-cookie";
import "./Search2.css";
import data from "./search2Data.js";
import {AiFillHome} from "react-icons/ai";

function Main2() {
  const [cookies, setCookie, removeCookie] = useCookies(["sub2"]);
  const [keyword, setKeyword] = useState();
  const [keyword2, setKeyword2] = useState();
  const [results, setResult] = useState([]);
  const [name, setName] = useState("");
  const [bizNum, setBizNum] = useState("");
  const [corpNum, setCorpNum] = useState();
  const [cash, setCash] = useState("");

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

  const updateText = (name, bizNum, corpNum, cash) => {
    // console.log(name, bizNum, corpNum);
    updateField("keyword", name, false);
    updateField("results", []);
    setBizNum(bizNum);
    setCorpNum(Math.round(corpNum));
    setCash(Math.round(cash));
  };

  const onKeywordReset = (num) => {
    // console.log(num === "1");
    // if (num === "1") {
    //   if (keyword !== undefined && keyword !== "") {
    //     updateText("", "", "", "");
    //   }
    // } else {
    //   if (keyword2 !== undefined && keyword2 !== "") {
    //     setKeyword2("");
    //   }
    // }
  };

  const onChange2 = (e) => {
    setKeyword2(e.target.value);
  };

  const movePage = () => {
    if (keyword === undefined || keyword2 === undefined || keyword === "" || keyword2 === "") {
      alert("기업명과 요구수익률(%)을 입력하세요");
      return;
    }

    data.map((v, idx) => {
      if(v.name === keyword) {
        console.log(v.name);
        setCookie("sub2_name", keyword);
        setCookie("sub2_ror", keyword2);
        setCookie("sub2_bizNum", v.biznum);
        setCookie("sub2_corpNum", v.corpnum);
        setCookie("sub2_cash", v.cash);
        return false;
      }
    });

    window.location.replace("http://" + window.location.host + "/sub2");
  };

  var renderResults;
  const arr = results["results"];
  if (arr) {
    renderResults = arr.map((item) => {
      return (
        <SearchView
          updateText={updateText}
          name={item.name}
          bizNum={item.bizNum}
          corpNum={item.corpNum}
          cash={item.cash}
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
        <h1><AiFillHome onClick={moveStartPage}/>OCIO 여유자금 최적 포트폴리오 검색</h1>
        <div className="keyword_search">
          <div className="search_wrapper">
            <input
              className="search_bar"
              value={keyword || ""}
              onChange={(e) => updateField("keyword", e.target.value)}
              onClick={onKeywordReset(1)}
              type="text"
              id="user_name"
              autoComplete="off"
              required
            />
            <label className="search_bar_label" htmlFor="user_name">
              <span>기업명을 입력하세요</span>
            </label>
          </div>
          <div className="search-results">{renderResults}</div>
          <div className="search_wrapper">
            <input
              className="search_bar"
              value={keyword2 || ""}
              onClick={onKeywordReset(2)}
              onChange={onChange2}
              type="number"
              id="ror"
              autoComplete="off"
              required
            />
            <label className="search_bar_label" htmlFor="ror">
              <span>요구수익률(%)을 입력하세요</span>
            </label>
          </div>
          <div className="moveDiv">
            <span className="moveBtn" onClick={movePage}>
              분석
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchView = ({ name, bizNum, corpNum, cash, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name, bizNum, corpNum, cash)}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      <span className="search-keyword">{name}</span>
    </div>
  );
};

export default Main2;
