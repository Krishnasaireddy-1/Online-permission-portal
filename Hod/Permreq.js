/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hod.css';

export default function Permreq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePermit = async (id) => {
    try {
      // Update the backend to mark the request as permitted
      await axios.put(`http://localhost:4000/data/${id}`, { permitted: true });
      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error permitting request:', error);
    }
  };

  const handleDeny = async (id) => {
    try {
      // Update the backend to mark the request as denied
      await axios.put(`http://localhost:4000/data/${id}`, { permitted: false });
      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error denying request:', error);
    }
  };

  return (
    <div className="Permreq">
      <h2>Permission Requests</h2>
      <div>
        {data.map(item => (
          <div key={item.id}>
            <p>ID: {typeof item.id === 'object' ? item.id.username : item.id}</p>
            <p>Data: {item.data}</p>
            {!item.permitted && (
              <div>
                <button onClick={() => handlePermit(item.id)}>Permit</button>
                <button onClick={() => handleDeny(item.id)}>Deny</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hod.css';

export default function Permreq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
const handlePermit = async (id) => {
  try {
    // Fetch the existing item
    const existingItem = data.find(item => item.id === id);

    if (!existingItem) {
      console.error('Item not found.');
      return;
    }

    // Update the permitted field
    existingItem.permitted = true;

    // Send the updated item to the server
    await axios.put(`http://localhost:4000/data/${id}`, existingItem);

    // Fetch updated data
    fetchData();
  } catch (error) {
    console.error('Error permitting request:', error);
  }
};


const handleDeny = async (id) => {
  try {
    // Send a delete request to remove the entry with the specified ID
    await axios.delete(`http://localhost:4000/data/${id}`);
    
    // Fetch updated data
    fetchData();
  } catch (error) {
    console.error('Error denying request:', error);
  }
};

  
  

  // Filter out items that are already permitted
  const filteredData = data.filter(item => !item.permitted);

  return (
    <div className="Permreq">
      <h2>Permission Requests</h2>
      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Username: {item.user.username}</p>
            <p>Data: {item.data}</p>
            {!item.permitted && (
              <div>
                <button onClick={() => handlePermit(item.id)}>Permit</button>
                <button onClick={() => handleDeny(item.id)}>Deny</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hod.css';

export default function Permreq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePermit = async (item) => {
    try {
      // Ensure the item has a valid id
      if (!item || !item.id) {
        console.error('Invalid item:', item);
        return;
      }

      const { id, user } = item;
      // Update the backend to mark the request as permitted
      await axios.put(`http://localhost:4000/data/${id}`, { id, user, permitted: true });
      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error permitting request:', error);
    }
  };

  const handleDeny = async (id) => {
    try {
      // Update the backend to mark the request as denied
      await axios.put(`http://localhost:4000/data/${id}`, { permitted: false });
      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error denying request:', error);
    }
  };

  // Filter out items that are already permitted
  const filteredData = data.filter(item => !item.permitted);

  return (
    <div className="Permreq">
      <h2>Permission Requests</h2>
      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Username: {item.user.username}</p>
            <p>Data: {item.data}</p>
            {!item.permitted && (
              <div>
                <button onClick={() => handlePermit(item)}>Permit</button>
                <button onClick={() => handleDeny(item.id)}>Deny</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}*/
