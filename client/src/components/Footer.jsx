import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <p className="text-center">Síguenos en nuestras redes sociales</p>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
    </footer>
  </div>
  

  )
}

export default Footer