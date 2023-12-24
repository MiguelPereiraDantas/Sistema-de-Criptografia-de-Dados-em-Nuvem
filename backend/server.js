// backend/server.js
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Chave de criptografia (em um ambiente real, isso seria gerenciado de maneira mais segura)
const encryptionKey = 'chave_de_criptografia_super_secreta';

// Rota para criptografar dados
app.post('/encrypt', (req, res) => {
  const { data } = req.body;
  const cipher = crypto.createCipher('aes-256-ctr', encryptionKey);
  const encryptedData = cipher.update(data, 'utf-8', 'hex') + cipher.final('hex');
  res.json({ encryptedData });
});

// Rota para descriptografar dados
app.post('/decrypt', (req, res) => {
  const { encryptedData } = req.body;
  const decipher = crypto.createDecipher('aes-256-ctr', encryptionKey);
  const decryptedData = decipher.update(encryptedData, 'hex', 'utf-8') + decipher.final('utf-8');
  res.json({ decryptedData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
