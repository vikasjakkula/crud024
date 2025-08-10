const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Backend server is running on port 5000!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 