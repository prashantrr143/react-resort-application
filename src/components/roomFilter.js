import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    minPrice,
    maxPrice,
    capacity,
    minSize,
    maxSize,
    breakfast,
    pets,
    price
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* Select Type*/}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end Select Type*/}
        {/* Guests Type*/}
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*end Guests Type*/}
        {/* Room Price Type*/}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            name="price"
            type="range"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/*end Price Type*/}
        {/* Room Size Type*/}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/*end Room Size Type*/}
        {/* Extras Type*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
              className="size-input"
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
              className="size-input"
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>

        {/*end Extras Type*/}
      </form>
    </section>
  );
}
