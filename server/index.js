const app = require('./server');

// Server Listening Port
app.listen(PORT, () => {
  console.log(`Kubernautics listening on http://localhost:${PORT}`);
});
