import React, { Component } from "react";

import LoadingGif from "./loading";
import Room from "./room";
import Title from "./title";

import { RoomContext } from "../context";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms } = this.context;
    let rooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <LoadingGif /> : rooms}
        </div>
      </section>
    );
  }
}
