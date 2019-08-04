import React from "react";
import Room from "./room";
export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room, index) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}
