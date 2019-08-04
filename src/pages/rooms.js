import React from "react";
import Banner from "../components/banner";
import Hero from "../components/hero";
import { Link } from "react-router-dom";
import RoomsContainer from '../components/roomsContainer';
export default function Rooms() {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer/>
    </>
  );
}
