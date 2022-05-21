import React from 'react'
import Carousel, { autoplayPlugin, slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Cartas from './cartas.png'
import Laberinto from './laberinto.png'
import Logo from './logo.png'
import './slider.css'
import Slides from './Slides'

const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>Proyectos</h2>
        </div>

 
        <Carousel
            plugins={['rtl', 'arrows', 'infinite']}
            infinite
            slides={Slides}
        />
    </div>
  )
}

export default Slider