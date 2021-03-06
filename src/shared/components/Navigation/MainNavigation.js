import React from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation_menu-btn">
        <BsList />
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation_title">
        <Link to="/">Home</Link>
      </h1>
      {/* <nav>...</nav> */}
    </MainHeader>
  );
};

export default MainNavigation;
