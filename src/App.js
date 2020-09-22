import React from "react";

import Aside from "./components/aside";
import Header from "./components/header";
import Body from "./components/body";

import './style.css'

function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Body />
    </div>
  );
}

export default App;
