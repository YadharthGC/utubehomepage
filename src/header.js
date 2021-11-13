import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import "./header.css";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="hleft">
        <MenuSharpIcon />
        <img className="yt" src="./images/yt2.png" />
      </div>
      <div className="hcenter">
        <input
          type="text"
          id="searchbar"
          placeholder="search"
          className="hinput"
        ></input>
        <SearchRoundedIcon className="searchicon" />
      </div>
      <div className="hright">
        <VideoCallSharpIcon className="hicon" />
        <AppsOutlinedIcon className="hicon" />
        <NotificationsRoundedIcon className="hicon" />
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
