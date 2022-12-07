import React from "react";
import HomeSub1Card from "./homeSub1Card";

function HomeSub1Map(val) {
  return (
    <>
      <HomeSub1Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></HomeSub1Card>
    </>
  );
}

export default HomeSub1Map;
