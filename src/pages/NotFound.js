import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound d-flex flex-column align-items-center'>
      <h1>404</h1>
      <p className='mt-5'>Oups! La page que vous demandez n'existe pas.</p>
      <Link  to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound