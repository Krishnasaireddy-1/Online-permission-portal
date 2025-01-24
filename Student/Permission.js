/*
  import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code'; // Import QRCode component
import './Header.css';

export default function Permission({ username }) {
  const [data, setData] = useState('');
  const [permissionStatus, setPermissionStatus] = useState('');
  const [qrVisible, setQrVisible] = useState(false); // Initially hide QR code

  useEffect(() => {
    fetchPermissionStatus();
  }, []);

  const fetchPermissionStatus = async () => {
    try {
      const response = await axios.get('http://localhost:4000/data');
      console.log('Response data:', response.data); // Log the response data

      const entry = response.data.find(entry => entry.user && entry.user.username === username);

      const isPermitted = entry ? entry.permitted : false;

      setPermissionStatus(isPermitted ? 'Permission Granted' : 'Permission Pending');
      setQrVisible(isPermitted); // Show QR code if permission is granted
    } catch (error) {
      console.error('Error fetching permission status:', error);
      setPermissionStatus('Error fetching permission status');
    }
  };

  const handleSendData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/data?username=${username}`);
      const existingData = response.data.data;

      if (existingData && existingData.length > 0) {
        // If data exists, update the first entry found
        const existingEntry = existingData[0];
        await axios.put(`http://localhost:4000/data/${existingEntry.id}`, {
          ...existingEntry,
          data: data,
          permitted: false,
        });
        console.log('Existing data updated successfully');
      } else {
        // If data does not exist, create a new entry
        await axios.post('http://localhost:4000/data', {
          data: data,
          user: { username },
          permitted: false,
        });
        console.log('New data added successfully');
      }

      // After updating or adding data, update permission status
      setPermissionStatus('Permission Pending');
      updateScannedField(username); // Update scanned field in the database
      setQrVisible(false); // Hide QR code after sending permission request
    } catch (error) {
      console.error('Error sending permission request:', error);
    }
  };

  const handleRemoveQR = () => {
    updateScannedField(username); // Update scanned field in the database
    setQrVisible(false); // Hide QR code
  };

  const updateScannedField = async (username) => {
    try {
      const response = await axios.get('http://localhost:4000/data');
      const entry = response.data.find(entry => entry.user && entry.user.username === username);
      if (entry) {
        //await axios.put(`http://localhost:4000/data/${entry.id}`, {
        //  ...entry,
        //  scanned: true, // Set scanned field to true
        //});
        await axios.delete(`http://localhost:4000/data/${entry.id}`);

      }
    } catch (error) {
      console.error('Error updating scanned field:', error);
    }
  };

  return (
    <div className="Permission">
      <p>Permission status: {permissionStatus}</p>
      {qrVisible && <QRCode value={username} />}
      {qrVisible && (
        <button onClick={handleRemoveQR}>Remove QR Code</button>
      )}
      <input
        type="text"
        value={data}
        onChange={e => setData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={handleSendData}>Send Permission Request</button>
    </div>
  );
}
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code'; // Import QRCode component
import './Header.css';

export default function Permission({ username }) {
  const [data, setData] = useState('');
  const [permissionStatus, setPermissionStatus] = useState('');
  const [qrVisible, setQrVisible] = useState(false); // Initially hide QR code

  useEffect(() => {
    fetchPermissionStatus();
  }, []);

  const fetchPermissionStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3400/data');
      console.log('Response data:', response.data); // Log the response data

      const entry = response.data.find(entry => entry.user && entry.user.username === username);

      const isPermitted = entry ? entry.permitted : false;

      setPermissionStatus(isPermitted ? 'Permission Granted' : 'Permission Pending');
      setQrVisible(isPermitted); // Show QR code if permission is granted
    } catch (error) {
      console.error('Error fetching permission status:', error);
      setPermissionStatus('Error fetching permission status');
    }
  };

  const handleSendData = async () => {
    try {
      const response = await axios.get(`http://localhost:3400/data?username=${username}`);
      const existingData = response.data.data;

      if (existingData && existingData.length > 0) {
        // If data exists, update the first entry found
        const existingEntry = existingData[0];
        await axios.put(`http://localhost:3400/data/${existingEntry.id}`, {
          ...existingEntry,
          data: data,
          permitted: false,
        });
        console.log('Existing data updated successfully');
      } else {
        // If data does not exist, create a new entry
        await axios.post('http://localhost:3400/data', {
          data: data,
          user: { username },
          permitted: false,
        });
        console.log('New data added successfully');
      }

      // After updating or adding data, update permission status
      setPermissionStatus('Permission Pending');
      updateScannedField(username); // Update scanned field in the database
      setQrVisible(false); // Hide QR code after sending permission request
    } catch (error) {
      console.error('Error sending permission request:', error);
    }
  };

  const handleRemoveQR = () => {
    updateScannedField(username); // Update scanned field in the database
    setQrVisible(false); // Hide QR code
  };

  const updateScannedField = async (username) => {
    try {
      const response = await axios.get('http://localhost:3400/data');
      const entry = response.data.find(entry => entry.user && entry.user.username === username);
      if (entry) {
        //await axios.put(`http://localhost:4000/data/${entry.id}`, {
        //  ...entry,
        //  scanned: true, // Set scanned field to true
        //});
        await axios.delete(`http://localhost:3400/data/${entry.id}`);

      }
    } catch (error) {
      console.error('Error updating scanned field:', error);
    }
  };

  return (
    <div className="Permission">
      <p>Permission status: {permissionStatus}</p>
      {qrVisible && <QRCode value={username} />}
      {qrVisible && (
        <button onClick={handleRemoveQR}>Remove QR Code</button>
      )}
      <input
        type="text"
        value={data}
        onChange={e => setData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={handleSendData}>Send Permission Request</button>
    </div>
  );
}
