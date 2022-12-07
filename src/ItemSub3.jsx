import React from "react";
import ItemSub3Card from "./ItemSub3Card";
import ItemSub3aData from './ItemSub3aData';
// import ItemSub3bData from './ItemSub3bData';
// import ItemSub3cData from "./ItemSub3cData";
// import ItemSub3dData from "./ItemSub3dData";
import "./ItemSub3.css";

function ItemSub3() {
  return (
    <>
      <div className="homeSub1">
        <div className="headingTag">
          <h1>Today's Snacks</h1>
          <h1 className="unicode">🍲</h1>
        </div>

        <div className="grid1">{ItemSub3aData.map(ItemSub3Card)}</div>
        {/* <div className="mapping">{ItemSub3bData.map(ItemSub3Card)}</div>
        <div className="mapping">{ItemSub3cData.map(ItemSub3Card)}</div>
        <div className="mapping">{ItemSub3dData.map(ItemSub3Card)}</div> */}
      </div>
    </>
  );
}

export default ItemSub3;
