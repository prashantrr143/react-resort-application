import React, { Component } from "react";

import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    // use this to fetch data
    let rooms = this.formatData(items);
    // console.log({ rooms });

    let featuredRooms = rooms.filter(e => e.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      featuredRooms: featuredRooms,
      rooms: rooms,
      sortedRooms: rooms,
      price: maxPrice,
      maxPrice: maxPrice,
      size: maxSize,
      maxSize: maxSize
    });
  }

  getRoom = slug => {
    // Create a new copy of the rooms
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log(`${target}  ${name}  ${value} `);
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPirce,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    // Filter by Type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // Filter by price
    price = parseFloat(price);
    tempRooms = tempRooms.filter(room => room.price <= price);

    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size < maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms
    });
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images: images, id: id };
      return room;
    });

    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function consumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
