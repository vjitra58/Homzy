import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from './components/Hero/Hero.jsx';
import SearchByAddress from "./components/SearchByAddress/SearchByAddress.jsx";
import About from './components/About/About.jsx';
import {motion} from "framer-motion";

function App() {

  return (
    <>
      
      <div className='app'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/search" element={<SearchByAddress/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
        
      </div>

    </>
  )
}

export default App
