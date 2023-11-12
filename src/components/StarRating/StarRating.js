import React from 'react'
import './StarRating.css'

function StarRating({ rating }) {
  const totalStars = 5;
  let stars = [];

  // Ajouter des étoiles pleines
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={`full-${i}`} src="/img/filled-star.png" alt="filled star" />);
  }

  // Ajouter des étoiles vides si nécessaire
  for (let i = rating; i < totalStars; i++) {
    stars.push(<img key={`empty-${i}`} src="/img/empty-star.png" alt="empty star" />);
  }
   return <div className='stars'>{stars}</div>;
}

export default StarRating