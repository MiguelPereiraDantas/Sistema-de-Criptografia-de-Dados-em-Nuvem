// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');

  const handleEncrypt = async () => {
    try {
      const response = await axios.post('http://localhost:3001/encrypt', { data });
      setEncryptedData(response.data.encryptedData);
    } catch (error) {
      console.error('Error encrypting data:', error);
    }
  };

  const handleDecrypt = async () => {
    try {
      const response = await axios.post('http://localhost:3001/decrypt', { encryptedData });
      setDecryptedData(response.data.decryptedData);
    } catch (error) {
      console.error('Error decrypting data:', error);
    }
  };

  return (
    <div>
      <h1>Data Encryption and Decryption</h1>
      <label>Data:</label>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleEncrypt}>Encrypt</button>
      <div>
        <label>Encrypted Data:</label>
        <input type="text" value={encryptedData} readOnly />
      </div>
      <button onClick={handleDecrypt}>Decrypt</button>
      <div>
        <label>Decrypted Data:</label>
        <input type="text" value={decryptedData} readOnly />
      </div>
    </div>
  );
}

export default App;
