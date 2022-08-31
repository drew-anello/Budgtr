const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
  res.send('working in port ' + port);
});

app.listen(port, () => {
  console.log('port is working');
});
