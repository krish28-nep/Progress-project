import React from 'react';
import Logoprogress from './assets/logoProgress.png'

const NavBar: React.FC = () => {
  return (
    <div className='navContainer'>
      <img src={Logoprogress} className='logoProfile'/>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Help and support</li>
      </ul>
      <input type='text' placeholder='Search' className='searchBar'/>
    </div>
  );
}

export default NavBar;
