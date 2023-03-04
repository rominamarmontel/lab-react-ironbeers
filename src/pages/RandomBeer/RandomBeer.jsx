import React, { useState, useEffect } from 'react'
import OneBeerCard from '../../components/OneBeerCard/OneBeerCard'

const RandomBeer = () => {
  const [randombeer, setRandomBeer] = useState(null)

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setRandomBeer(response)
      })
      .catch((e) => console.error(e))
  }, []) 
  

  if (!randombeer) {
    return <div className="Loading">Loading...</div>
  } 
  
  return (
    <div>
      <OneBeerCard beer={randombeer} />
    </div>
  )
}

export default RandomBeer