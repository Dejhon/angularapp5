const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const studentRoute = require('./routes/students-route');
const accountRoute = require('./routes/accounts-route');

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/students')
  .then((x) => {
    console.log(`Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`)
  })
  .catch((err)=>{
    console.error('Error connecting to mongodb', err.reason)
  })

// Express App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// Setting Route Middleware
app.use('/api', studentRoute);
app.use('/account', accountRoute)

// Listening Port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Listening on port ${port}..`))