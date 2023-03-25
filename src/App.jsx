
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact'
import About from './components/About';
import ToTopbtn from './components/ToTopBtn';
function App() {


  return (
    <div className="app">
      <ToTopbtn />
      <Navbar />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
