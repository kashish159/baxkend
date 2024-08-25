const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  const userId = 'kashish_mehrotra_15092003';
  const email = 'kashmehrotra2003@gmail.com';
  const roll_number = '21BRS1355';

  const numbers = [];
  const alphabets = [];

  data.forEach((curr) => {
    if (isNaN(curr)) {
      alphabets.push(curr);
    } else {
      numbers.push(curr);
    }
  });

  const highest_lowercase_alphabet = alphabets.filter((alpha) => alpha >= 'a' && alpha <= 'z').sort()[0];

  const response = {
    is_success: true,
    user_id: userId,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
  };

  res.json(response);
});

// GET
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operationCode: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is UP on port ${PORT}`);
});