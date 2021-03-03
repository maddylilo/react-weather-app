import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="col-3 current-temp">
      <span id="temperatureNow">12</span>
      <span>
        <a href="#" className="celsius" id="celsius">
          °C
        </a>
        <a href="#" className="fahrenheit inactive" id="fahrenheit">
          F
        </a>
      </span>
    </div>
  );
}