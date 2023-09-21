const express = require('express');
const ejs = require('ejs');
const path = require('path');
require('dotenv/config');

const PORT = process.env.PORT;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Rate limiter
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
app.use(limiter);

const routes = require('./routes/index');

// Compression
const compression = require("compression");
app.use(compression()); // Compress all routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
