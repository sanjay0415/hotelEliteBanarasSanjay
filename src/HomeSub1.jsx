import React from "react";
import homeSub1Card from "./homeSub1Map";
import homeSub1Data from "./homeSub1Data";
import "./HomeSub1.css";

function HomeSub1() {
  return (
    <>
      <div className="homeSub1">
        <div className="headingTag1">
          <h1>This Weeks Special Breakfast</h1>
          <h1 className="unicode">🍲</h1>
        </div>

        <div className="grid">{homeSub1Data.map(homeSub1Card)}</div>

        {/* <div className="mapping1">{homeSub1Data.map(homeSub1Card)}</div> */}
      </div>
    </>
  );
}

export default HomeSub1;
