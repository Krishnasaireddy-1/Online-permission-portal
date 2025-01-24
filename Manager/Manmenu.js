// Menu.js
import './Man.css'
import React from 'react';
import { Link } from 'react-router-dom';
//import hmpg from './Homepage.jpg';

const Menu = () => {
  return (
    <div className="Manmenu">
      <h2>Security dashboard</h2>
      <ul>
        
        <li><Link to="/Participants">Permissions</Link></li>
        

      </ul>
    </div>
  );
}

export default Menu;
