import React from "react";
import { genres } from "../data";

export default function Filtersection() {
  return (
    <div className="filter-header">
      <h3>Filter by:</h3>
      <div className="filter-options">
        <select className="dropdown" id="genredropdown">
          <option value="">All Genres</option>
          <option value="podcast1">{genres.title}</option>
        </select>

        <select className="dropdown" id="updateddropdown">
          <option value="">Recently Updated</option>
          <option value="1"></option>
        </select>
      </div>
    </div>
  );
}
