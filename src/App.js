import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import Sidebar from "./sidebar";
import Rvideos from "./rvideos";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="first">
        <Sidebar />
        <Rvideos />
      </div>
    </div>
  );

  // header
  // sidebar
  // recommendations
}

export default App;
