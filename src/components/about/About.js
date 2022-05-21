import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-container'>
        {/*Descripción del programador*/}
        <div className='about-desc'>
            <h3>Contando cosas</h3>
            <p>Lorem 30</p>
        </div>

        {/*Apartado de la imagen*/}
        <div className='about-img'>
            <img src="https://image.shutterstock.com/image-photo/software-developer-programming-code-on-260nw-323944736.jpg" alt="Imagen" />
        </div>
    </div>
  )
}

export default About
