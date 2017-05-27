const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      db = require('./config/db'),
      credentials = require('../resources/credentials');

const app = express(),
      router = require('./config/router');

app.set('port', process.env.PORT || 7700);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', router);

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}...`));
