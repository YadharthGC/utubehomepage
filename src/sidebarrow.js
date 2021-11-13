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

function Sidebarrow({ selected, Icon, title }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon className="sicons" />
      <span className="stitle">{title}</span>
    </div>
  );
}

export default Sidebarrow;
