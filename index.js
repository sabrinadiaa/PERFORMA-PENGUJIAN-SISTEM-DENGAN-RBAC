const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:5500',
  credentials: true
}));

// BODY PARSER
app.use(express.json());

// SESSION
app.use(session({
  secret: 'rbac-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax'
  }
}));


app.use(express.static(path.join(__dirname, 'frontend')));

// ROUTES API
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});