import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Items from "./Items";
import Booking from "./Booking";
import Menu from "./Menu";
import Heading from "./Heading";

function App() {
  return (
    <>
      <Heading></Heading>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Items" component={Items}></Route>
        <Route path="/Booking" component={Booking}></Route>
      </Switch>
    </>
  );
}

export default App;
