import React from 'react'
import "./Navbar.css"

const Navbar = ({ isScrolling }) => {
  return (
    // El scroll se inicializa en cero. Cuando esté arriba de los 20px, entonces se le cambia el nombre de la clase a scrolling. Si el scroll es menor a cero,
    // entonces se le regresa al navbar las propiedades que ya tenía antes.
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo">Javier Sebastián Valle Balsells</div>
    </nav>
  )
}

export default Navbar;
