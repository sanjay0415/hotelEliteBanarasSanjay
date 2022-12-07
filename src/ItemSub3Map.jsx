import React from "react";
import ItemSub3Card from "./ItemSub3Card";

function ItemSub3Map(val) {
  return (
    <>
      <ItemSub3Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></ItemSub3Card>
    </>
  );
}

export default ItemSub3Map;
