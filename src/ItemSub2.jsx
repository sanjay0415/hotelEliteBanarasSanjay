import React from "react";
import ItemSub2Card from "./ItemSub2Card";
import ItemSub2aData from './ItemSub2aData';
// import ItemSub2bData from './ItemSub2bData';
// import ItemSub2cData from "./ItemSub2cData";
// import ItemSub2dData from "./ItemSub2dData";
import "./ItemSub2.css";

function ItemSub2() {
  return (
    <>
      <div className="homeSub1">
        <div className="headingTag">
          <h1>Today's Lunch</h1>
          <h1 className="unicode">🍲</h1>
        </div>

        <div className="grid1">{ItemSub2aData.map(ItemSub2Card)}</div>
        {/* <div className="mapping">{ItemSub2bData.map(ItemSub2Card)}</div>
        <div className="mapping">{ItemSub2cData.map(ItemSub2Card)}</div>
        <div className="mapping">{ItemSub2dData.map(ItemSub2Card)}</div> */}
      </div>
    </>
  );
}

export default ItemSub2;
