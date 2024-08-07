require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

app.use(cors());
app.use(express.json());

// In-memory user storage (replace this with a database in a real application)
const users = [
  { id: 1, email: 'admin@gmail.com', password: 'admin' }
];

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(400).json({ message: 'Invalid email or password' });
  }
});

// Google OAuth login route
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID
    });
    const { email, sub: googleId } = ticket.getPayload();

    // In a real app, you'd check if the user exists and create them if not
    // For this example, we'll just create a token for any valid Google sign-in
    const jwtToken = jwt.sign({ email, googleId }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: jwtToken });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));