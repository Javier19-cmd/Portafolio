// Referencia: https://www.youtube.com/watch?v=ilw_g_rxtVc&t=3s
import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0) // Estado del scroll.

  // Función que controla el scroll.
  const handleScroll = () => {
    const position = Window.pageYOffset;
    setScrollHeight(position) // Setteando el scroll con respecto a la posición.
  }

  // Cada vez que el scroll cambie, se ejecutará el useEffect.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]) // Pasando la posición del scroll.

  return (
    <div className="App">
      {/*Pasando como parámetro la posición del scroll para que se cambie */}
      <Navbar isScolling={scrollHeight} />
      <Cover />
      <About />
    </div>
  );
}

export default App;
