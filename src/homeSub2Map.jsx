import React from "react";
import HomeSub2Card from "./homeSub2Card";

function HomeSub2Map(val) {
  return (
    <>
      <HomeSub2Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></HomeSub2Card>
    </>
  );
}

export default HomeSub2Map;
