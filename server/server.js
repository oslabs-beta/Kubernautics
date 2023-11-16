const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const dataRoutes = require('./routers/dataRoutes')

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.use(cors());
app.use(express.json());



app.use('/api', dataRoutes)


app.use('/', (req, res) => {
  console.log(req)
  res.sendFile(path.join(__dirname, '../src/index.html'));
})



app.listen(PORT, () => {
  console.log(`Kubernautics listening on http://localhost:${PORT}`);
});

module.exports = app