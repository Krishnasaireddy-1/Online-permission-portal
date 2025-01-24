/*
import React, { useState } from 'react';
import './App.css';
import Home from './Student/Home';
import Attendance from './Student/Attendance';
import Menu from './Student/Menu';
import Permission from './Student/Permission';
import Sevents from './Student/Sevents';
import Settings from './Student/Settings';
import Permreq from './Hod/Permreq';
import Events from './Hod/Events';
import Hodmenu from './Hod/Hodmenu';
import Manhelp from './Manager/Manhelp';
import Manevents from './Manager/Manevents';
import Manmenu from './Manager/Manmenu';
import Manprofile from './Manager/Manprofile';
import Mansettings from './Manager/Mansettings';
import Participants from './Manager/Participants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import imag from './WhatsApp Image 2024-04-13 at 18.26.26_8c8fd52b.jpg';
import hpmg from './Homepage.jpg';

const App = () => {
  const [isLogged, setLogged] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLogged(true);
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEnter = () => {
    if (selectedRole === 'student' && username === 'krishna' && password === '') {
      setLogged(true);
    } else if (selectedRole === 'teacher' && username === '' && password === '') {
      setLogged(true);
    } else if (selectedRole === 'event_organizer' && username === '' && password === '') {
      setLogged(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <div className="">
        {isLogged && selectedRole === 'teacher' ? (
          <div className="">
            <Hodmenu />
          </div>
        ) : isLogged && selectedRole === 'student' ? (
          <div className="">
            <Menu />
          </div>
        ) : isLogged && selectedRole === 'event_organizer' ? (
          <div className="">
            <Manmenu />
          </div>
        ) : null}
        <div className=''>
          {isLogged ? (
            <Routes>
              {selectedRole === 'student' && (
                <>
                  <Route path="/Home" element={<Home username={username} />} />
                  <Route path="/Attendance" element={<Attendance username={username} />} />
                  <Route path="/Permission" element={<Permission username={username} />} />
                  <Route path="/Sevents" element={<Sevents username={username} />} />
                  <Route path="/Settings" element={<Settings username={username} />} />
                </>
              )}
              {selectedRole === 'teacher' && (
                <>
                  <Route path="/Permreq" element={<Permreq username={username} />} />
                  <Route path="/Events" element={<Events username={username} />} />
                </>
              )}
              {selectedRole === 'event_organizer' && (
                <>
                  <Route path="/Manhelp" element={<Manhelp username={username} />} />
                  <Route path="/Manevents" element={<Manevents username={username} />} />
                  <Route path="/Manprofile" element={<Manprofile username={username} />} />
                  <Route path="/Mansettings" element={<Mansettings username={username} />} />
                  <Route path="/Participants" element={<Participants username={username} />} />
                </>
              )}
            </Routes>
          ) : (
            <Start
              onLogin={handleLogin}
              onRoleChange={handleRoleChange}
              onUsernameChange={handleUsernameChange}
              onPasswordChange={handlePasswordChange}
              onSubmit={handleEnter}
            />
          )}
        </div>
      </div>
    </Router>
  );
};

const Start = ({ onLogin, onRoleChange, onUsernameChange, onPasswordChange, onSubmit }) => {
  return (
    <div className="start-container">
      <img src={imag} alt="Entry Image" className="background-image" />
      <div className="content">
        <div className="input-group">
          <select onChange={(e) => onRoleChange(e.target.value)} className="text-select">
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="event_organizer">Event Organizer</option>
          </select>
          <input
            type="text"
            onChange={onUsernameChange}
            placeholder="User-name"
            className="text-input"
          />
          <input
            type="password"
            onChange={onPasswordChange}
            placeholder="Password"
            className="text-input "
          />
        </div>
        <button onClick={onSubmit} className="enter-button">
          Log in
        </button>
      </div>
    </div>
  );
};

export default App;
*/

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Student/Home';
import Attendance from './Student/Attendance';
import Menu from './Student/Menu';
import Permission from './Student/Permission';
import Sevents from './Student/Sevents';
//import Settings from './Student/Settings';
import Permreq from './Hod/Permreq';
import Events from './Hod/Events';
import Hodmenu from './Hod/Hodmenu';
import Manhelp from './Manager/Manhelp';
import Manevents from './Manager/Manevents';
import Manmenu from './Manager/Manmenu';
import Manprofile from './Manager/Manprofile';
import Mansettings from './Manager/Mansettings';
import Participants from './Manager/Participants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import imag from './WhatsApp Image 2024-04-13 at 18.26.26_8c8fd52b.jpg';

const App = () => {
  const [isLogged, setLogged] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEnter = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Names');
      const userData = response.data;

      if (!userData || !Array.isArray(userData)) {
        throw new Error('Invalid response data');
      }

      const user = userData.find(user => user.username === username);
      if (user && user.pass === password) {
        setLogged(true);
        //setSelectedRole(user.role);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching users.json:', error);
    }
  };
  

  const handleLogin = () => {
    setLogged(true);
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Router>
      <div className="">
        {isLogged && selectedRole === 'teacher' ? (
          <div className="">
            <Hodmenu />
          </div>
        ) : isLogged && selectedRole === 'student' ? (
          <div className="">
            <Menu />
          </div>
        ) : isLogged && selectedRole === 'event_organizer' ? (
          <div className="">
            <Manmenu />
          </div>
        ) : null}
        <div className=''>
          {isLogged ? (
            <Routes>
              {selectedRole === 'student' && (
                <>
                  <Route path="/Home" element={<Home username={username} />} />
                  <Route path="/Attendance" element={<Attendance username={username} />} />
                  <Route path="/Permission" element={<Permission username={username} />} />
                  <Route path="/Sevents" element={<Sevents username={username} />} />
                </>
              )}
              {selectedRole === 'teacher' && (
                <>
                  <Route path="/Permreq" element={<Permreq username={username} />} />
                  <Route path="/Events" element={<Events username={username} />} />
                </>
              )}
              {selectedRole === 'event_organizer' && (
                <>
                  <Route path="/Manhelp" element={<Manhelp username={username} />} />
                  <Route path="/Manevents" element={<Manevents username={username} />} />
                  <Route path="/Manprofile" element={<Manprofile username={username} />} />
                  <Route path="/Mansettings" element={<Mansettings username={username} />} />
                  <Route path="/Participants" element={<Participants username={username} />} />
                </>
              )}
            </Routes>
          ) : (
            <Start
              onLogin={handleLogin}
              onRoleChange={handleRoleChange}
              onUsernameChange={handleUsernameChange}
              onPasswordChange={handlePasswordChange}
              onSubmit={handleEnter} // Pass handleEnter here
            />
          )}
        </div>
      </div>
    </Router>
  );
};

const Start = ({ onLogin, onRoleChange, onUsernameChange, onPasswordChange, onSubmit }) => {
  return (
    <div className="start-container">
      <img src={imag} alt="Entry Image" className="background-image" />
      <div className="content">
        <div className="input-group">
          <select onChange={(e) => onRoleChange(e.target.value)} className="text-select">
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Faculty</option>
            <option value="event_organizer">Security</option>
          </select>
          <input
            type="text"
            onChange={onUsernameChange}
            placeholder="User-name"
            className="text-input"
          />
          <input
            type="password"
            onChange={onPasswordChange}
            placeholder="Password"
            className="text-input "
          />
        </div>
        <button onClick={onSubmit} className="enter-button">
          Log in
        </button>
      </div>
    </div>
  );
};

export default App;
