import React from 'react';

const slidesInfo = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png",
        alt: "Logo",
        desc: "Copiando Logo",
        link: "https://github.com/Javier19-cmd/WEB/tree/main/Lab4"
    },

    {
        src: "https://www.soynomada.news/__export/1626119158242/sites/debate/img/2021/07/12/laberinto_1_mexico_crop1626118964776.jpg_759710130.jpg",
        alt: "Juego de Laberinto",
        desc: "Juego de laberinto",
        link: "https://github.com/Javier19-cmd/OtrosEjemplos_React.git"
    },

    {
        src: "https://anagarciaazcarate.files.wordpress.com/2012/05/imagencartas.jpg",
        alt: "Juego de cartas",
        desc: "Juego de cartas",
        link: "https://github.com/Javier19-cmd/Lab6.git"
    },

    {
        src: "https://media.vandal.net/i/1200x630/5-2021/202151117461260_1.jpg",
        alt: "Calculadora Simple",
        desc: "Calculadora",
        link: "https://github.com/Javier19-cmd/Lab_Calculadora"
    },
    
    {
        src: "https://www.explica.me/__export/1632497054087/sites/debate/img/2021/09/24/clima_de_un_lugar__crop1632497053332.png_172596871.png",
        alt: "Aproximador del Clima",
        desc: "Clima",
        link: "https://github.com/Javier19-cmd/clima.git"
    },

    {
        src: "https://assetsnffrgf-a.akamaihd.net/assets/m/102015327/univ/art/102015327_univ_lsr_xl.jpg",
        alt: "Historia de mi vida",
        desc: "Historia de mi vida, escrita en HTML",
        link: "https://github.com/Javier19-cmd/WEB/tree/main/Lab3"
    },

    {
        src: "https://www.deque.com/wp-content/uploads/2022/03/linter.png",
        alt: "Aplicando Linting a Código",
        desc: "Aplicando Linting",
        link: "https://github.com/Javier19-cmd/OtrosEjemplos_React/tree/ESLint"
    },

    {
        src: "https://pbs.twimg.com/media/FB0xmUUWQAgyt6C?format=jpg&name=medium",
        alt: "Clon",
        desc: "Clonando la página de Samsung",
        link: "https://github.com/Javier19-cmd/Proyecto-1.git"
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