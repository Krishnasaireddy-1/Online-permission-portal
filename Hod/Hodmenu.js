import React from 'react';
import { Link } from 'react-router-dom';
import './Hod.css'

const Hodmenu = () => {
  return (
    <div className="Hodmenu">
      <div className="Hodtext">
      <h2 class="two"><pre>     HOD Menu</pre></h2>
      <ul>
        <li><Link to="/Permreq"><p class="two">Permission Requests</p></Link></li>
        <li><Link to="/Events"><p class="two">Events</p></Link></li>
      </ul>
      </div>
    </div>
  );
};

export default Hodmenu;
