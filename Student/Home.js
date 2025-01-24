import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Header.css';

function Home({ username }) {
  console.log(username);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Names`);
        const userData = response.data;
        const user = userData.find(user => user.username === username);
        if (user) {
          setUserDetails(user);
        } else {
          setUserDetails(null);
        }
      } catch (error) {
        console.error('Error fetching user details:', error.message);
        // Handle error, maybe show an error message in the UI
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <div className="Home">
      
      {userDetails ? (
        <div>
          
          <img src={userDetails.profile}  />
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default Home;
