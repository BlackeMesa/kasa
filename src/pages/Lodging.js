import React from "react";
import "./Lodging.css";
import ToggleButton from "../components/ToggleButton";
import data from "../data/data.json";
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
      <div className="d-sm-flex">
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
          <span>{logement.host.name}</span>
          <div className="host-avatar">
            <img src={logement.host.picture} alt="picture-host" />
          </div>
          {/* Placeholder pour l'avatar de l'hôte */}
          <div className="rating">{/* Ici, vous pouvez ajouter des étoiles pour la notation */}</div>
        </div>
      </div>
      <div className="listing-fonction d-sm-flex justify-content-between gap-5">
        <ToggleButton text="Description" description={logement.description} />
        <ToggleButton text="Équipements" description={logement.equipments} />
      </div>
    </section>
  );
}

export default Lodging;
