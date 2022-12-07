import React from "react";
import homeSub2Card from "./homeSub2Map";
import homeSub2Data from "./homeSub2Data";
import "./HomeSub2.css";

function HomeSub2() {
  return (
    <>
      <div className="homeSub2">
        <div className="headingTag1">
          <h1>This Weeks Special Lunch</h1>
          <h1 className="unicode">🍱</h1>
        </div>

        <div className="mapping1">{homeSub2Data.map(homeSub2Card)}</div>
      </div>
    </>
  );
}

export default HomeSub2;
