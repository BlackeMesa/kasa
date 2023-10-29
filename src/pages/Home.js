import React from 'react'
import data from "../data/data.json";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {


  return (
    <section className="listing">
      <div className="listing-images about position-relative">
        <div className="shadow-cover">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <img src="/img/image-source.png" alt="Image du loft" />
      </div>
      <div className="logement-container d-flex flex-wrap align-items-center justify-content-center gap-5 mt-sm-5">
        {data.logement.map((logement) => (
          <div className="logement-card" key={logement.id}>
            <Link to={`/lodging/${logement.id}`}>
              <div className="shadow-box"></div>
              <img src={logement.cover} alt="logement cover" />
              <p>{logement.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home