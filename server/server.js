const express = require('express');
const path = require('path');
const cors = require('cors');
const dataRoutes = require('./routers/dataRoutes');

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

// baseline middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// application routes
app.use('/api', dataRoutes);

app.get('/', (req, res) => {
  res.status(200).sendFile('/index.html');
});

app.listen(PORT, () => {
  console.log(`Kubernautics listening on http://localhost:${PORT}`);
});

module.exports = app;
