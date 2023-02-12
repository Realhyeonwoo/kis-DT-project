import React from "react";
import "./Header_test.css";

import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { BsFillPieChartFill } from "react-icons/bs";
import { AiOutlineDotChart, AiOutlineLineChart } from "react-icons/ai";

export default class Header_test extends React.Component {
  
  state = {
    content: [
      // { id:1, description:'<ul><li>We can help you build your website.</li><li>Have good connections with your clients.</li><li>Build a strong customers data base.</li></ul>' },
      // { id:2, description:'<h1>Products is here</h1>' },
      // { id:3, description:'<h1>Contact is here</h1>' },
      // { id:4, description:'<h1>About is here</h1>' },
    ],
    listItems: [
      { id: 1, name: "Home", active: false, url: "/" },
      { id: 2, name: "Portfolio", active: false, url: "/tab01" },
      { id: 3, name: "BackTesting", active: false, url: "/tab02" },
      { id: 4, name: "Markowitz", active: false, url: "/tab03" },
    ],

    body: null,
    nav1: false,
    nav2: true,
    nav3: false,
    nav4: false,
  };

  componentDidMount() {
    this.showContentHandler(1);
  }

  showContentHandler = (id) => {
    switch (id) {
      case 2:
        this.setState({ nav2: true, nav3: false, nav4: false });
        break;
      case 3:
        this.setState({ nav2: false, nav3: true, nav4: false });
        break;
      case 4:
        this.setState({ nav2: false, nav3: false, nav4: true });
        break;
    }
    // const body = { ...this.state.body };
    // this.setState;
    // this.state.nav2;
    // this.state.content.map((item) => {
    //   if (item.id == id) {
    //     this.setState({ body: item.description });
    //   }
    // });

    // const listItems = [...this.state.listItems];
    // for (let item of listItems) {
    //   item.active = false;
    // }

    // const listIndex = this.state.listItems.findIndex((item) => {
    //   return item.id === id;
    // });
    // const listItem = {
    //   ...this.state.listItems[listIndex],
    // };
    // listItem.active = true;
    // listItems[listIndex] = listItem;
    // this.setState({ listItems: listItems });
  };

  showSideDrawer = (elename) => {
    let element = document.getElementById(elename);
    element.className === "NavList"
      ? (element.className += " responsive")
      : (element.className = "NavList");
  };

  render() {
    if (
      !(window.location.pathname === "/tab01") &&
      !(window.location.pathname === "/tab02") &&
      !(window.location.pathname === "/tab03")
    ) {
      return null;
    } else {
    return (
      <div>
        <div className="NavList" id="NavBar">
          {/* {this.state.listItems.map(item=>{
            return(
              <a onClick={()=>this.showContentHandler(item.id)} key={item.id} href="#" className={item.active? 'active' : ''}>{item.name}</a>)
          })} */}
          <a className={this.state.nav1 ? "active" : ""} href="/">
            <FcSearch size="20" />
          </a>
          <Link
            onClick={() => this.showContentHandler(2)}
            className={this.state.nav2 ? "active" : ""}
            to="/tab01"
          >
            <BsFillPieChartFill />
            &nbsp;Portfolio
          </Link>
          <Link
            onClick={() => this.showContentHandler(3)}
            className={this.state.nav3 ? "active" : ""}
            to="/tab02"
          >
            <AiOutlineLineChart />
            &nbsp;Backtesting
          </Link>
          <Link
            onClick={() => this.showContentHandler(4)}
            className={this.state.nav4 ? "active" : ""}
            to="/tab03"
          >
            <AiOutlineDotChart />
            &nbsp;Markowitz
          </Link>
          <a
            className="icon"
            onClick={() => this.showSideDrawer("NavBar")}
            href="#"
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <div
          className="contentDivClass"
          dangerouslySetInnerHTML={{ __html: this.state.body }}
        ></div>
      </div>
    );
  }}

}
