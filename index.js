const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const api = require('./api')
let port = process.env.PORT || '3000';

const app = express();

if(process.env.NODE_ENV == 'test') {
  port = 0
}

app.use(bodyParser.json());

app.use('/', routes);
app.use('/api/', api)

app.listen(port, () => {
  // console.log(`Server started on port ${port}`);
});

module.exports = app