import React, { useState, useEffect } from 'react'
import BeerCard from '../../components/BeerCard/BeerCard'
import { useParams } from 'react-router-dom'
import Search from '../../components/Search/Search';

const Beers = () => {
  const [beers, setBeers] = useState(null)
  const [searchKeyword, updateSearchKeyword] = useState('');
  const { q } = useParams()
  const url = 'https://ih-beers-api2.herokuapp.com/beers/search'

  useEffect(() => {
    fetch(`${url}${q}`)
    .then((rawResponse) => rawResponse.json())
    .then((reponse) => {
      updateSearchKeyword(reponse)
    })
    .catch((error) => console.log(error))
  }, [q, url])

  // if (!searchKeyword) {
  //   return <div className='Loading'>Loading...</div>
  // }

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setBeers(response)
      })
      .catch((e) => console.error(e))
  }, [])

  if (!beers) {
    return <div className="Loading">Loading...</div>
  }

  const handleInputChange = (event) => {
    updateSearchKeyword(event.target.value);
  };
  const filteredList = beers.filter((item) => {
    return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  return (
    <>
      <div>
        <Search handleInputChange={handleInputChange} />
          {filteredList.map((beer) => {
            return <BeerCard key={beer._id} beer={beer} />;
          })}
      </div>

  </>
  )
}

export default Beers