import React, { useState, useEffect } from 'react'
import BeerCard from '../../components/BeerCard/BeerCard'
import Search from '../../components/Search/Search';
import { Divider, Row } from 'antd';

const Beers = () => {
  const [beers, setBeers] = useState(null)
  const [searchKeyword, updateSearchKeyword] = useState('');

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/search?q={query}')
    .then((rawResponse) => rawResponse.json())
    .then((reponse) => {
      updateSearchKeyword(reponse)
    })
  }, [])

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

  // const handleInputChange = (event) => {
  //   updateSearchKeyword(event.target.value);
  // };
  // const filteredList = beers.filter((item) => {
  //   return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
  // });

  return (
    <>
      <div>
        {/* <Search handleInputChange={handleInputChange} />
        <Divider>Search</Divider>

        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {filteredList.map((beer) => {
            return <BeerCard beer={beer} />;
          })}
        </Row> */}
      </div>
      <div>
        {beers.map((beer) => {
          return <BeerCard key={beer._id} beer={beer} />
        })}
      </div>
  </>
  )
}

export default Beers