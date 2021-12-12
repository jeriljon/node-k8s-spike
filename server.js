const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/devops', (req, res) => {
  res.send('Hello World. This is my server');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);