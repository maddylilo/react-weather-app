import React from "react";
import "./Credit.css";

export default function Credit() {
  return (
    <p className="credit">
      {" "}
      <a
        href="https://github.com/maddylilo/weather-app-project"
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