import React from "react-dom";
import Mes from "./Component/Component1/meesho";
import Sub from "./Component/Component2/subnav";
import Body from "./Component/Component3/body";
import Card from "./Component/Component4/card";
import "./styles.css";
import { Component } from "react";
function App() {
  return (
    <div className="App">
      <Mes />
      <Sub />
      <Body />
      <Card />
    </div>
  );
}
export default App;
