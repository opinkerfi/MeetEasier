import React, { Component } from "react";
import * as config from "../../config/singleRoom.config.js";
import wifiqr from "../../imgs/wifiqrcode.png";

class Wifi extends Component {
  render() {
    return (
      <div id="single-room__wifi">
        <div id="single-room__wifi-title">{config.wifiTitle}</div>
        <img id="single-room__wifi-image" src={wifiqr} alt="Wifi Code" />
        <div id="single-room__wifi-text">
          <p>Wifi: OpinKerfi-Guest</p>
          <p>Password: opinkerfi2019</p>
        </div>
      </div>
    );
  }
}
export default Wifi;
