const app = require('./server');
const PORT = process.env.EXPRESS_PORT || 3000;

// Server Listening Port
app.listen(PORT, () => {
  console.log(`Kubernautics listening on http://localhost:${PORT}`);
});
