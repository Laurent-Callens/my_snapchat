import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./components/home.component.js";
import Login from "./components/login.component.js";
import Register from "./components/register.component.js";
import SendSnap from "./components/SendSnap.component.js";
import MySnaps from "./components/MySnaps.component.js";


function App() {
  return (
    <Router>
      <div className='container'>
      <Home />
      <br/>
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/send" exact component={SendSnap} />
      <Route path="/snaps" exact component={MySnaps} />
      </div>
    </Router>
  );
}

export default App;
