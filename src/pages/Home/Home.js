import React from 'react'
import data from "../../data/data.json";
import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {


  return (
    <section className="listing">
      <div className="listing-images about ">
        <div className="shadow-cover">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <img src="/img/image-source.png" alt="loft" />
      </div>
      <div className="logement-container ">
        {data.logement.map((logement) => (
          <div className="logement-card" key={logement.id}>
            <NavLink to={`/lodging/${logement.id}`}>
              <div className="shadow-box"></div>
              <img src={logement.cover} alt="logement cover" />
              <p>{logement.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home