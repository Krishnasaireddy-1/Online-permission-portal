// StartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  let navigate = useNavigate();

  const goToHome = () => {
    navigate("/Home"); // Navigate to the root path ("/") instead of "/Home"
  }

  return (
    <div>
      <button onClick={goToHome}>Enter</button>
    </div>
  );
}

export default Start;
