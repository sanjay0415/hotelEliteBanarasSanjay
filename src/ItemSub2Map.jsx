import React from "react";
import ItemSub2Card from "./ItemSub2Card";

function ItemSub2Map(val) {
  return (
    <>
      <ItemSub2Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></ItemSub2Card>
    </>
  );
}

export default ItemSub2Map;
