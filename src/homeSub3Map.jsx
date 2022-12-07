import React from "react";
import HomeSub3Card from "./homeSub3Card";

function HomeSub3Map(val) {
  return (
    <>
      <HomeSub3Card
      key = {val.id}
      Bimg = {val.Bimg}
      BName = {val.BName}
      BPrice = {val.BPrice}
      ></HomeSub3Card>
    </>
  );
}

export default HomeSub3Map;
