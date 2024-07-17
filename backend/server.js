const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route to render the form
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, number, password } = req.body;
  console.log(number)
  res.send(`<h1>Thank you for filling the form. Here is what we received</h1> Name: ${name}<br> Email: ${email}<br> Number: ${number}<br> Password:${password}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
