import React from "react";
import "./Credit.css";

export default function Credit() {
  return (
    <p className="credit">
      {" "}
      <a
        href="https://github.com/maddylilo/react-weather-app"
        className="credit"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code{" "}
      </a>
      by Madeleine Boyd
    </p>
  );
}