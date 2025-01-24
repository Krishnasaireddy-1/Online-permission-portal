// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Click on the links to navigate to the respective pages:</p>
      <ul>
        <li><Link to="/Comp">Comp</Link></li>
        <li><Link to="/Form">Form</Link></li>
      </ul>
    </div>
  );
}

export default Home;
