import React from "react";
import "./homeSub1Card.css";

function HomeSub1Card(props) {
  return (
    <>
      <div id="card">
        <div className="image">
            <img src={props.Bimg} alt="" />
        </div>
        <div className="content">
          <p className="name">{props.BName}</p>
          <p className="price">{props.BPrice}</p>
        </div>
      </div>
    </>
  );
}

export default HomeSub1Card;
