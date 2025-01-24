// Menu.js
import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import hmpg from './Studentdash.jpg';
//        <li><Link to="/Settings">Settings</Link></li>

const Menu = () => {
  return (
    <div className="himenu">
      <div className="Menutext">
      <h2>Student Dashboard</h2>
      <ul>
        <li><Link to="/Home"><p class="one">Home</p></Link></li>
        <li><Link to="/Attendance"><p class="one">Attendance</p></Link></li>
        <li><Link to="/Permission"><p class="one">Permission</p></Link></li>
        <li><Link to="/Sevents"><p class="one">Events</p></Link></li>

      </ul>
      </div>
    </div>
  );
}

export default Menu;
