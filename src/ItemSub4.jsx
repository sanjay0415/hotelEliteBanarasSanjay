import React from "react";
import ItemSub4Card from "./ItemSub4Card";
import ItemSub4aData from './ItemSub4aData';
// import ItemSub4bData from './ItemSub4bData';
// import ItemSub4cData from "./ItemSub4cData";
// import ItemSub4dData from "./ItemSub4dData";
import "./ItemSub4.css";

function ItemSub4() {
  return (
    <>
      <div className="homeSub1">
        <div className="headingTag">
          <h1>Today's Dinner</h1>
          <h1 className="unicode">🍲</h1>
        </div>

        <div className="grid1">{ItemSub4aData.map(ItemSub4Card)}</div>
        {/* <div className="mapping">{ItemSub4bData.map(ItemSub4Card)}</div>
        <div className="mapping">{ItemSub4cData.map(ItemSub4Card)}</div>
        <div className="mapping">{ItemSub4dData.map(ItemSub4Card)}</div> */}
      </div>
    </>
  );
}

export default ItemSub4;
