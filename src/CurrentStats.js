import React from "react";
import CurrentIcon from "./CurrentIcon";
import CurrentTemp from "./CurrentTemp";
import PrecipitationWind from "./PrecipitationWind";

export default function CurrentStats() {
  return (
    <div className="row">
      <CurrentIcon />
      <CurrentTemp />
      <PrecipitationWind />
    </div>
  );
}