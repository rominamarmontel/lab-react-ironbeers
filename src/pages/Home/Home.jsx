import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import bgImage from '../../assets/beers.png'
import bgImage2 from '../../assets/random-beer.png'
import bgImage3 from '../../assets/new-beer.png'

const Home = () => {
  return (
    <div>
      <div className='service-box'>
        <img src={bgImage} alt="beers" width={450}/>
        <Link to="/beers"><h1>All Beers</h1></Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime porro architecto accusamus voluptatem, fuga nostrum sapiente repellat! Fugiat quis dolor eligendi itaque laboriosam, deleniti sint sequi quibusdam beatae praesentium eaque!</p>
      </div>
      <div className='service-box'>
        <img src={bgImage2} alt="beers" width={450}/>
        <Link to="/random-beer"><h1>Random Beer</h1></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam voluptatum? Porro nihil veritatis optio, magnam dolorum animi cupiditate error temporibus dolor sed! Quo, dicta sunt expedita ut quibusdam pariatur.</p>
      </div>
      <div className='service-box'>
        <img src={bgImage3} alt="beers" width={450}/>
        <Link to="/new-beer"><h1>New Beer</h1></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia repellat reiciendis amet nesciunt, itaque veritatis optio, magni nam assumenda repudiandae quia harum fugiat qui modi. Natus ipsa vel consequatur?</p>
      </div>
    </div>
  )
}

export default Home