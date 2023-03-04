import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OneBeerCard from '../../components/OneBeerCard/OneBeerCard'

const OneBeer = () => {
  const [beer, setbeer] = useState(null)
  const params = useParams()

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/' + params.beerId)
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setbeer(response)
      })
      .catch((e) => console.error(e))
  }, [params])

  if (!beer) {
    return <div className="Loading">Loading!</div>
  }
  return <OneBeerCard beer={beer} />
}

export default OneBeer