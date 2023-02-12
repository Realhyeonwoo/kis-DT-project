import { useCookies } from "react-cookie";
import "./TabCommon.css";
import Header_test from "../../layout/Header_test";

function Tab02() {
  const [cookies, setCookie, removeCookie] = useCookies();
  console.log(cookies);
  return (
    <>
      <Header_test nav={2}/>

      <div>
        <h1>Backtesting</h1>
        <div>기업명: {cookies.name}</div>
        <div>근속연수: {cookies.year}</div>
        <div>임금상승율: {cookies.salary}</div>
        <div>구간: {cookies.section}</div>
        <div>요구수익률: {cookies.ror}</div>
        <div>
          선택항목
          <ul>
            {cookies.list.map((name) => {
              return <li key={name}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tab02;
