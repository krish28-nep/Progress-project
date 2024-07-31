import React from 'react';
import Logoprogress from './assets/logoProgress.png'
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className='navContainer'>
      <img src={Logoprogress} className='logoProfile'/>
      <ul>
        <li><NavLink className="link" to="/">Home</NavLink> </li>
        <li><NavLink className="link" to="/Contact">Contact</NavLink> </li>
        <li><NavLink className="link" to="/Services">Services</NavLink> </li>
        <li><NavLink  className="link" to="/About">About</NavLink> </li>
        <li><NavLink className="link" to="/Help">Help and support</NavLink> </li>
      </ul>
      <input type='text' placeholder='Search' className='searchBar'/>
    </div>
  );
}

export default NavBar;
