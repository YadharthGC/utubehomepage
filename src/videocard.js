import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./rvideos.css";
import Avatar from "@mui/material/Avatar";

function Videocard({ image, avatar, channel, title, views, timestamp }) {
  return (
    <div className="videocard">
      <img src={image} className="cardimage"></img>
      <div className="info">
        <Avatar className="avatar" src={avatar} />
        <div className="text">
          <div>
            <b>{title}</b>
          </div>
          <span className="second">
            <div className="channel">{channel}</div>
            <div>
              {views}
              <span style={{ marginLeft: "2px" }}>&bull;</span>
              <span style={{ marginLeft: "5px" }}>{timestamp}</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
