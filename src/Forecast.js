import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col day">
        <p className="day-titles">Sun</p> <br />
        <i className="fas fa-cloud-sun small-icon"></i>
        <br />
        <p>13° / 8°</p>
      </div>
      <div className="col day">
        <p className="day-titles">Mon</p> <br />
        <i className="fas fa-cloud-showers-heavy small-icon"></i>
        <br />
        <p>13° / 8°</p>
      </div>
      <div className="col day">
        <p className="day-titles">Tue</p> <br />
        <i className="fas fa-cloud small-icon"></i>
        <br />
        <p>13° / 9°</p>
      </div>
      <div className="col day">
        <p className="day-titles">Wed</p> <br />
        <i className="fas fa-cloud-sun small-icon"></i>
        <br />
        <p>13° / 9°</p>
      </div>
      <div className="col day">
        <p className="day-titles">Thu</p> <br />
        <i className="fas fa-cloud-showers-heavy small-icon"></i>
        <br />
        <p>16° / 14°</p>
      </div>
    </div>
  );
}
