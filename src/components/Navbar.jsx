import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  
  return (
    <div>
      <nav className='navbar' id='navbar'>
      <ul>
          <li className='nav-links'><a  href="#hero"> Home</a></li>
          <li className='nav-links'><a  href="#about"> About</a></li>
          <li className='nav-links'><a  href="#projects"> Project</a></li>
          <li className='nav-links'><a  href="#contact"> Contact</a></li>
        </ul>    
      </nav>
    </div>
  )
}

export default Navbar
