import React from "react";
import ItemSub4Card from "./ItemSub4Card";

function ItemSub4Map(val) {
  return (
    <>
      <ItemSub4Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></ItemSub4Card>
    </>
  );
}

export default ItemSub4Map;
