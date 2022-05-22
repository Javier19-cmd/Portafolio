import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4"

export default function Cover() {
  return (
    <div className='cover-container'>
        <video className="video" src={coverVideo} autoPlay loop muted />
        <h1>Javier Sebastián Valle Balsells</h1>
        <p>Programador de páginas web</p>
    </div>
  )
}
