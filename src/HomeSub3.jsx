import React from "react";
import homeSub3Card from "./homeSub3Map";
import homeSub3Data from "./homeSub3Data";
import "./HomeSub3.css";

function HomeSub3() {
  return (
    <>
      <div className="homeSub2">
        <div className="headingTag1">
          <h1>This Weeks Special Dinner</h1>
          <h1 className="unicode">🍛</h1>
        </div>

        <div className="mapping1">{homeSub3Data.map(homeSub3Card)}</div>
      </div>
    </>
  );
}

export default HomeSub3;
