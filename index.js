const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like index.html)
app.use(express.static('public'));

// Route handler for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route handler for the form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Handle the submitted data (for example, you can log it)
  console.log('Submitted Name:', name);
  console.log('Submitted Email:', email);

  // Send a response back to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

