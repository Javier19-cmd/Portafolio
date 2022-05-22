import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-container'>
        {/*Descripción del programador*/}
        <div className='about-desc'>
            <h3>Información personal</h3>
            <p>Soy un estudiante de tercer año de Ingeniería en Ciencias de la Computación.
               Asimismo, me gusta mucho hacer deporte, oír música y jugar videojuegos. El deporte que actualmente
               hago es equitación y llevo casi diez años practicándolo. Los videojuegos que más me gustan son GTA V,
               Fortnite, Call Of Duty: Warzone y Valorant. También me gusta conocer lugares nuevos, los cuales podrían
               ser lugares campestres o lugares de la ciudad, como centros comerciales, restaurantes, etc. En mis tiempos
               libres veo series y películas de acción como lo son Gotham, Batman, Aquaman, y las películas de Marvel.
               Por otro lado, me gusta mucho aprender cosas nuevas como idiomas, lenguajes de programación, etc. 
            </p>
        </div>

        {/*Apartado de la imagen*/}
        <div className='about-img'>
            <img src="https://lh3.googleusercontent.com/Gsz9jPRkf3UnovC-fZUNcA-_tL0NeHGE9OyQlvRpsSwEa87tMk7Tv92i5MyOLe-_oQ0BbjaoxeW-Aq5K_e2IdKiLE2lzTSOJCEAy5nJWTRJqaK21CYcyIRdXjzBv6J0FUu6eT45UDkiKevHK5WAaG-DZPxWVIQJR9c4M3pCCoqVqJ6s4hgW9HO7ow45PBh3VdmGu5XDfIKSUPOpTiOYkdXQSEYjMrhAxLUdsn1dLje53lvDjpvYOZHe4Hthi_douXR_zX6WW8zfNleQbwPEsNtZyXWEVY1kJIX4--MzAWzsia_QhAYiHi2yVjaOi848OwMDSI0m3vyv_gGZOdC3cbb4-l1nHmtAcDd4AlCg0nrpo-Si4TCDPQ90Q4b5SNEYUta08WjEHCenYiAli4G4UnE79fNA-iOeCr2to_TE9ekomzTQalEaM4-hmaJWGKeqbRX3fUVvLZIFjIP3tWoamECZTxQ6bnWeAKd9FcpOOnfOdt5V4s01G-oRh6jtS88Fd4vuvUqiQCiX1hFS4sfLt-8nffEcq1WpK11QMUXtWDTeMNCOaBpEi-qi79cYHwyjGQGUtp3qr_itu-LASIIgA6S4bQXPEx-88FO3UNiDpeAVUbyGEBndD3weVu_-cAd-1hRzev-tZNNfwZ6MD4rErnzeiuQwJOl-jtxZU7Bwjztwl-3uyyor3QwIvcCTClsPJetq45I7wIBhIBxC1rEoW7eKHVdhyiMp-SqQzNNM3iljiQx15Wr4fDi9xMtGczsCc4pixRS0DoqLpFzsq2-D5nLOj6vWOjLNBQrHodOLgCH-wm3y-nMGxYmmXKrKs8SU=w600-h1200-no?authuser=0" alt="Imagen" />
        </div>
    </div>
  )
}

export default About
