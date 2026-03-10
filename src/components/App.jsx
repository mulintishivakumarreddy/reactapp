import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'
function App() {
  return(<div>
    <Header/>
    <Hero/>
    <Footer/>
  </div>)
}

export default App
