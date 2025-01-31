const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./router/routes');
const api = require('./router/api')
const swaggerDocs = require('./documentation/swagger')
let port = process.env.PORT || '3000';

const app = express();

// if(process.env.NODE_ENV == 'test') {
//   port = 0
// }

app.use(bodyParser.json());

app.use('/', routes);
app.use('/api/', api)

swaggerDocs(app, port)

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app, server }