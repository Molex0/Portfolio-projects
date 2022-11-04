import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import './Card.css'


const Card = ({id, image, title, link}) => {
  return (
    <Parallax scale={[0.8,1]}>
      <div className='card__container'>
          <div className={`${'p'+id}`}>
              <a href={link} target="_blank" rel="noreferrer noopener">
                  <img className='project__image' src={image} alt="project" />
              </a>
          </div>
          <h2 className='project__title'>{title}</h2>
      </div>
    </Parallax>
  )
}

export default Card