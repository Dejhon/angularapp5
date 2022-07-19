let express = require('express');
const app = express();

// Mongoose Model
let Student = require('../models/students');
let studentRoute = express.Router();

// Student route for mongo get
studentRoute.route('/').get((req, res) => {
    Student.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = studentRoute;