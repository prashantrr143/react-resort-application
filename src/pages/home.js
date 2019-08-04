import React from "react";

import Hero from "../components/hero";
import Banner from "../components/banner";
import Services from  '../components/services'
import { Link } from "react-router-dom";
import { FeaturedRooms} from '../components/featuredrooms';

export default function Home() {
  return (
      <React.Fragment>
    <Hero>
      <Banner title="Luxorious Rooms" subtitle="Deluxe rooms starting at $199">
        <Link to="/" className="btn-primary"> Go to Home</Link>
      </Banner>
    </Hero>
     <Services></Services>
     <FeaturedRooms/>
    </React.Fragment>
  );
}
