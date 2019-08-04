import React, { Component } from "react";
import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          " This is about free cocktails services provied in the hotel selected"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          " This is about free cocktails services provied in the hotel selected"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          " This is about free cocktails services provied in the hotel selected"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          " This is about free cocktails services provied in the hotel selected"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className='services-center'>
            {this.state.services.map( (item,index)=>{
                return <article key ={index}  className="service">
                    <span> {item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            }) }


        </div>
      </section>
    );
  }
}
