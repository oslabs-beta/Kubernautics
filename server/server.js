const express = require('express');
const path = require('path');
const promClient = require('prom-client');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.get('/prometheus', async (req, res, next) => {
  try {
    const response = await axios.get('http://localhost:8080/metrics');
    res.json(response.data);
  } catch (error) {
    return next({Error: 'Failed fetching data'})
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});