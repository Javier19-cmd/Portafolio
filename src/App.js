// Referencia: https://www.youtube.com/watch?v=lbKs9Yklz7o&t=2s
import React, {useState, useEffect} from 'react'
import './App.css'
import Cover from './components/cover/Cover'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Slider from './components/slider/Slider'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'

function App() {
  //const [scrollHeight, setScrollHeight] = useState(0) // Estado del scroll.

  // Función que controla el scroll.
  const handleScroll = () => {
    const windowPosition = window.pageYOffset
    const {offsetTop, offsetHeight} = document.getElementById('infos')
    const offsetBottom = offsetTop + offsetHeight
    console.log('Hola', windowPosition, offsetTop, offsetBottom)
    if (windowPosition > offsetTop && windowPosition < offsetBottom) {
      document.getElementById('NavBar').style.setProperty('--navbar-color', 'black')
    }else{
      document.getElementById('NavBar').style.setProperty('--navbar-color', 'transparent')
    }
    //setScrollHeight() // Setteando el scroll con respecto a la posición.
  }

  // Cada vez que el scroll cambie, se ejecutará el useEffect.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Pasando la posición del scroll.

  return (
    <div className="App">
      {/*Pasando como parámetro la posición del scroll para que se cambie */}
      <Navbar />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
