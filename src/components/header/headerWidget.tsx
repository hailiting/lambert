import React from "react";
// import { Link } from "react-router-dom";
import "./headerWidget.less";
function HeaderWidget() {
  return (
    <div className="header">
      <div className="headerWidget">
        <h1>
          <a href="/" title="0xLambert">
            0xLambert
          </a>
        </h1>
        <h2>Unique SOULLY</h2>
        <h3>coming soon</h3>
        <div className="fr">
          <img src={require("./img/discord.png")} alt="discord" />
          <img src={require("./img/twitter.png")} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
export default HeaderWidget;
