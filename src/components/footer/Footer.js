import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Javier Sebastián Valle Balsells</h1>
            <p>Basado en ejemplos encontrados en internet y ejemplos dados en clase</p>
        </div>

        <div className="footer-contact">
            <h3>sebasvalle17@gmail.com</h3>
            <p>A trabajar</p>
        </div>

        <div className="footer-sns">
            <div className='design-by'>
                Diseñado por: Javier Sebastián Valle Balsells
            </div>

            <div className="sns-links">
                <a href="https://twitter.com/javiervalleb" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter twitter"></i>
                </a>

                <a href="https://www.instagram.com/javiervallebs/?hl=en" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram instagram"></i>
                </a>

                <a href="https://www.facebook.com/sebastian.valle.balsells" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook facebook"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer