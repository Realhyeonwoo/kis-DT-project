import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FcSearch } from "react-icons/fc";
import { BsFillPieChartFill } from "react-icons/bs";
import { AiOutlineDotChart, AiOutlineLineChart } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";

function Header() {
  console.log(window.location.pathname);
  if (
    !(window.location.pathname === "/tab01") &&
    !(window.location.pathname === "/tab02") &&
    !(window.location.pathname === "/tab03")
  ) {
    return null;
  } else {
    
    return (
      <>
        <div id="navBar" className="parent">
          <a className="tagA child" href="/">
            <FcSearch size="20" />
          </a>
          <Link className="tagA child01" to="/tab01">
            <BsFillPieChartFill/>&nbsp;Portfolio
          </Link>
          <Link className="tagA child02" to="/tab02">
            <AiOutlineLineChart/>&nbsp;Backtesting
          </Link>
          <Link className="tagA child03" to="/tab03">
          <AiOutlineDotChart/>&nbsp;Markowitz
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
