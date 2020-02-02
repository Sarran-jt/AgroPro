const express = require('express');
const connectDB = require('./config/db');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  limit: "100mb",
  extended: false
}));
app.use(bodyParser.json({limit: "100mb"}));

// Connect Database
const conn = connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin,X-auth-token, X-Requested-With, Content-Type, Accept");
  next();
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/plants',require('./routes/plants'));
app.use('/api/forum',require('./routes/forumPost'));
app.use('/api/adds',require('./routes/adds'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
