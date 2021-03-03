import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter city here"
        autoComplete="off"
        autoFocus="on"
        className="search-bar"
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-outline-light px-3 search-button"
      />
    </form>
  );
}