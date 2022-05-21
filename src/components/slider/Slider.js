import React from 'react'
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './slider.css'
import Slides from './Slides'

const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>Proyectos</h2>
        </div>
         
        <Carousel
            plugins={[
                'rtl', 
                'arrows', 
                'infinite',
                {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 2000,
                    }
                },
                ]}
            infinite
            slides={Slides}
            breakpoints={{
                640: {
                plugins: [
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1
                    }
                },
                ]
                },
                900: {
                plugins: [
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 2
                    }
                },
                ]
                }
            }}
        />
    </div>
  )
}

export default Slider