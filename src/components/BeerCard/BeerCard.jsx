import React from 'react';
import { Link } from 'react-router-dom'
import "./BeerCard.css"

const BeerCard = (props) => {
  const beer = props.beer
  
  return (     
      <div className="BeerCard">
        <div className='container'>
          <picture>
            <img width={100} src={beer.image_url} alt={beer.name} />
          </picture>
          <div className='first'>
              <h1>
                <Link to={'/beer/' + beer._id}>{beer.name}</Link>
              </h1>
              <p className='tagline'>{beer.tagline}</p>
              <p className='contributed_by'><span>Created by:</span> {beer.contributed_by}</p>
          </div>
        </div>
      </div>
  )
}

export default BeerCard