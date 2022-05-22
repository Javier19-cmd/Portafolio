import React from 'react';

const slidesInfo = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png",
        alt: "Logo",
        desc: "Copiando Logo",
        link: "https://github.com/Javier19-cmd/WEB/tree/main/Lab4"
    },

    {
        src: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/08/28/150828112355_laberintos_1_624x351_adrianfisherdesigns_nocredit.jpg",
        alt: "Juego de Laberinto",
        desc: "Juego de laberinto",
        link: "https://github.com/Javier19-cmd/OtrosEjemplos_React.git"
    },

    {
        src: "https://anagarciaazcarate.files.wordpress.com/2012/05/imagencartas.jpg",
        alt: "Juego de cartas",
        desc: "Juego de cartas",
        link: "https://github.com/Javier19-cmd/Lab6.git"
    }
]

/*Creando componentes que luego se exportan al slider*/
const Slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <a href={slide.link}>
        <img src={slide.src} alt={slide.alt} />
        </a>
        <div className='slide-desc'>
            <span>{slide.desc}</span> {/*Descripción de la imagen*/}
        </div>
    </div>
))

export default Slides