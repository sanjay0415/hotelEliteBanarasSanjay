import React from "react";
import ItemSub1Card from "./ItemSub1Card";
import ItemSub1aData from './ItemSub1aData';
// import ItemSub1bData from './ItemSub1bData';
// import ItemSub1cData from "./ItemSub1cData";
// import ItemSub1dData from "./ItemSub1dData";
import "./ItemSub1.css";

function ItemSub1() {
  return (
    <>
      <div className="homeSub1">
        <div className="headingTag">
          <h1>Today's Breakfast</h1>
          <h1 className="unicode">🍲</h1>
        </div>

        <div className="grid1">{ItemSub1aData.map(ItemSub1Card)}</div>
        {/* <div className="mapping">{ItemSub1bData.map(ItemSub1Card)}</div>
        <div className="mapping">{ItemSub1cData.map(ItemSub1Card)}</div>
        <div className="mapping">{ItemSub1dData.map(ItemSub1Card)}</div> */}
      </div>
    </>
  );
}

export default ItemSub1;
