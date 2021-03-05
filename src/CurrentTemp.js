import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="col-3 current-temp">
      <span id="temperatureNow">12</span>
      <span>
        {/* <a href="#0" className="celsius" id="celsius">
          °C
        </a>
        <a href="#0" className="fahrenheit inactive" id="fahrenheit">
          F
        </a> */}
        <p className="celsius">°C</p>
        <p className="fahrenheit inactive">F</p>
      </span>
    </div>
  );
}