import React from "react";
import "./About.css";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import data from "../../data/data.json";

function About() {
  return (
    <section className="listing">
      <div className="listing-images about">
        <img src="/img/image-montagne.png" alt="Loft" />
      </div>
      <div className="listing-fonction">
        {data.about.map((about, index) => (
          <ToggleButton text={about.title} description={about.description} key={index} />
        ))}
      </div>
    </section>
  );
}

export default About;
