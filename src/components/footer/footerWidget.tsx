import React from "react";
import "./footerWidget.less";
function FooterWidget() {
  return (
    <div className="footerWidget">
      <p>@Lambert</p>
      <div className="fr">
        <img src={require("./img/discord.png")} alt="discord" />
        <img src={require("./img/twitter.png")} alt="twitter" />
      </div>
    </div>
  );
}
export default FooterWidget;
