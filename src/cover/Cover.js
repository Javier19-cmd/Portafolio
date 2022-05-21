import React from 'react'
import "./Cover.css"
import coverVideo from "../Media/CoverVideo.mp4"

export default function Cover() {
  return (
    <div className='cover-container'>
        <video className="video" src={coverVideo} autoplay loop muted />
        <h1>Javier Sebastián Valle Balsells</h1>
        <p>Programador de páginas web</p>
    </div>
  )
}
