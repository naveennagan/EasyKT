const express = require('express');
const { connectToServer } = require('./utils/mongoClient');
const path = require('path');
const Cors = require('cors')
const bodyParser = require('body-parser');

const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Cors());

app.use(express.static(path.join(__dirname, '../public/')));

app.set( 'port',  (process.env.PORT || 3031));

app.listen(app.get('port'), () => {
   connectToServer((db) => {
       console.log('App is listening on : ', app.get('port') );
   });
})