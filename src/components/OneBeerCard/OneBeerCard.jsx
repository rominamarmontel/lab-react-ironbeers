import React from 'react'
import './OneBeerCard.css'
const OneBeerCard = (props) => {
  const beer = props.beer
  console.log('beer: ', beer)
  return (
    <div className="OneBeerCard">
      <div className='container'>
        <picture>
          <img width={100} src={beer.image_url} alt={beer.name} />
        </picture>
        <div className='first'>
          <h1>
            {beer.name}
          </h1>
          <p className='attenuation_level'>{beer.attenuation_level}</p>
        </div>
        <div className='second'>
          <p className='tagline'>{beer.tagline}</p>
          <p className='first_brewed'>{beer.first_brewed}</p>
        </div>
        <p className='description'>{beer.description}</p>
        <p className='contributed_by'>{beer.contributed_by}</p>
      </div>
    </div>
  )
}

export default OneBeerCard
