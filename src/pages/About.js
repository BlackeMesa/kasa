import React from "react";
import "./About.css";
import ToggleButton from "../components/ToggleButton";
import data from "../data/data.json";

function About() {
  return (
    <section className="listing">
      <div className="listing-images about">
        <img src="/img/image-montagne.png" alt="Loft" />
      </div>
      <div className="listing-fonction d-flex flex-column align-items-center gap-4 mt-5">
        {data.about.map((about, index) => (
          <ToggleButton text={about.title} description={about.description} key={index} />
        ))}
      </div>
    </section>
  );
}

export default About;
