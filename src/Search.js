import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for the city"
              className="form-control"
              id="search-text-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary " />
          </div>
        </div>
      </form>
    </div>
  );
}
