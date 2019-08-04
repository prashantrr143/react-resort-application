import React from "react";
import "./App.css";

import Home from "./pages/home";
import SingleRoom from "./pages/singleroom";
import Rooms from "./pages/rooms";
import Error from "./pages/error";

import NavBar from './components/navbar';

import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home} />
       <Route exact path='/rooms/' component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
