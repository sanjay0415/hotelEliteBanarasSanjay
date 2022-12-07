import React from "react";
import ItemSub1Card from "./ItemSub1Card";

function ItemSub1Map(val) {
  return (
    <>
      <ItemSub1Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></ItemSub1Card>
    </>
  );
}

export default ItemSub1Map;
