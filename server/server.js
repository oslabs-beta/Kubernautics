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

app.post('/pull', async (req, res) => {
  try {
    const response = await fetch('http://localhost:9090/api/v1/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'query=container_cpu_usage_seconds_total{namespace="default"}[20m]',
    });
    const metric = await response.json(); 
    console.log('Pulled Data:', metric);
    res.status(200).json({ metric });
  } catch (error) {
    res.status(500).json({ error: 'Failed pulling data, check POST request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});