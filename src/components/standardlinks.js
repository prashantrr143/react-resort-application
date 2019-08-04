import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StandardLinks extends Component {
  constructor(props) {
    super(props);
    this.links = [
      { text: "Home", path: "/" },
      { text: "Rooms", path: "rooms/" }
    ];
  }

  createLinks() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    );
  }

  render() {
    return <></>
  } 
}
