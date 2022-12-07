import React from "react";
import "./homeSub2Card.css";

function HomeSub2Card(props) {
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

export default HomeSub2Card;
