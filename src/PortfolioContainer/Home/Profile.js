import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-detailes'>
          <div className='colz'>

            {/*Etiqueta para el logo de facebook*/}
            <a href='#'>
              <i className='fa fa-facebook-square'></i>
            </a>
            {/*Etiqueta para el logo de gmail*/}
            <a href='#'>
              <i className='fa fa-gmail-square'></i>
            </a>

            <a href='#'>
              <i className='fa fa-instagram'></i>
            </a>

            <a href='#'>
              <i className='fa fa-github-square'></i>
            </a>

            <a href='#'>
              <i className='fa fa-twitter-square'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
