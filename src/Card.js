import React from "react";
import "./Card.css";
import Search from "./Search";
import Location from "./Location";
import CurrentStats from "./CurrentStats";
import Forecast from "./Forecast";

export default function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <Search />
        <Location />
        <div className="row">
          <CurrentStats />
        </div>
        <hr />
        <Forecast />
      </div>
    </div>
  );
}