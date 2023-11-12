import React from "react";
import "./Lodging.css";
import ToggleButton from "../../components/ToggleButton/ToggleButton.js";
import StarRating from "../../components/StarRating/StarRating.js";
import data from "../../data/data.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Lodging() {
  const { id } = useParams();
  const logement = data.logement.find((l) => l.id === id);

  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };
  useEffect(() => {
    if (!logement) {
      navigate("*", { replace: true });
    }
  }, [logement, navigate]);
  if (!logement) {
    return null;
  }

  return (
    <section className="listing">
      <div className="listing-images">
        {logement.pictures.length !== 1 && (
          <button className="left" onClick={prevImage}>
            &lt;
          </button>
        )}
        <img src={logement.pictures[currentImageIndex]} alt="Loft" />
        <div className="image-counter">
          {currentImageIndex + 1}/{logement.pictures.length}
        </div>
        {logement.pictures.length !== 1 && (
          <button className="right" onClick={nextImage}>
            &gt;
          </button>
        )}
      </div>
      <div className="listing-container">
        <div className="listing-details">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="listing-host">
          <div className="listing-host-name">

          <span>{logement.host.name}</span>
          <div className="host-avatar">
            <img src={logement.host.picture} alt="picture-host" />
          </div>
          </div>

          <div className="rating">
            <StarRating rating={parseInt(logement.rating)} />
          </div>
        </div>
      </div>
      <div className="listing-fonction ">
        <ToggleButton text="Description" description={logement.description} />
        <ToggleButton text="Équipements" description={logement.equipments} />
      </div>
    </section>
  );
}

export default Lodging;
