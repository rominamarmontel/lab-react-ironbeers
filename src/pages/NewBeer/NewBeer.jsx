import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./NewBeer.css"
// import { v4 as uuid } from 'uuid'

const AddBeer = () => {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_brewed] = useState('')
  const [brewers_tips, setBrewers_tips] = useState('')
  const [attenuation_level, setAttenuation_level] = useState(0)
  const [contributed_by, setContributed_by] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const beerToCreate = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    }
    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        beerToCreate
      )

      navigate('/beers')
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <section>
    <form onSubmit={handleSubmit} id='newbeer'>
        <div className='input-form'>
          <label htmlFor="name">Name</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            name="name"
          />
        </div>
        <div className='input-form'>
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={(event) => setTagline(event.target.value)}
            value={tagline}
            type="text"
            name="tagline"
          />
        </div>
        <div className='description'>
          <label htmlFor="description">Description</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type="text"
            name="description"
          />
        </div>
        <div className='input-form'>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            onChange={(event) => setFirst_brewed(event.target.value)}
            value={first_brewed}
            type="text"
            name="first_brewed"
          />
        </div>
        <div className='input-form'>
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            onChange={(event) => setBrewers_tips(event.target.value)}
            value={brewers_tips}
            type="text"
            name="brewers_tips"
          />
        </div>
        <div className='input-form'>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            onChange={(event) => setAttenuation_level(event.target.value)}
            value={attenuation_level}
            type="number"
            name="attenuation_level"
          />
        </div>
        <div className='input-form'>
          <label htmlFor="price">Contributed By</label>
          <input
            onChange={(event) => setContributed_by(event.target.value)}
            value={contributed_by}
            type="text"
            name="contributed_by"
          />
        </div>
        <button>ADD NEW</button>
    </form>
      </section>
  )
}
export default AddBeer