import React from "react";
import './Items.css'
import ItemSub1 from "./ItemSub1";
import ItemSub2 from "./ItemSub2";
import ItemSub3 from "./ItemSub3";
import ItemSub4 from './ItemSub4';
import ItemSub5 from "./ItemSub5";

function Items() {
  return (
    <>
      <p className="menuHeading">Today's Menu</p>
      <ItemSub1></ItemSub1>
      <ItemSub2></ItemSub2>
      <ItemSub3></ItemSub3>
      <ItemSub4></ItemSub4>
      <ItemSub5></ItemSub5>
    </>
  );
}

export default Items;
