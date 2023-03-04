import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Beers from './pages/Beers/Beers'
import RandomBeer from './pages/RandomBeer/RandomBeer'
import NewBeer from './pages/NewBeer/NewBeer'
import Home from './pages/Home/Home'
import OneBeer from './pages/OneBeer/OneBeer'
import Layout from './pages/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
        <Route element={<Layout />} >
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beer/:beerId" element={<OneBeer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
