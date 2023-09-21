const express = require('express');
const ejs = require('ejs');
const path = require('path');
require('dotenv/config');

const PORT = process.env.PORT;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
