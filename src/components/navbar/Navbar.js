import React from 'react'
import "./Navbar.css"

const Navbar = () => {

  // Función que regresa el scroll hasta arriba
  const toTheTop = () =>{
      window.scrollTo({top: 0, left: 0, behavior:"smooth"})
  }

  return (
    // El scroll se inicializa en cero. Cuando esté arriba de los 20px, entonces se le cambia el nombre de la clase a scrolling. Si el scroll es menor a cero,
    // entonces se le regresa al navbar las propiedades que ya tenía antes.
    <nav id='NavBar' className={'navbar'}>
        <div className="navbar-logo" onClick={toTheTop}>Javier Sebastián Valle Balsells</div>
    </nav>
  )
}

export default Navbar;
