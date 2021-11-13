import React from "react";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./sidebar.css";
import Sidebarrow from "./sidebarrow";

function Sidebar() {
  return (
    <div className="sidebar">
      <Sidebarrow selected Icon={HomeSharpIcon} title="Home" />
      <Sidebarrow Icon={WhatshotIcon} title="Trending" />
      <Sidebarrow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <Sidebarrow Icon={LibraryAddIcon} title="Library" />
      <Sidebarrow Icon={HistoryIcon} title="History" />
      <Sidebarrow Icon={OndemandVideoIcon} title="Your videos" />
      <Sidebarrow Icon={WatchLaterIcon} title="Watch Later" />
      <Sidebarrow Icon={ThumbUpAltIcon} title="Liked videos" />
      <Sidebarrow Icon={KeyboardArrowDownIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
