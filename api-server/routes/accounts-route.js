const express = require('express');
const account = require('../models/accounts')
const { create } = require('../models/accounts');
const app = express();

// Mongoose Model
let Account = require('../models/accounts');
let accountRoute = express.Router();

// Account route for mongo get
accountRoute.route('/').get((req, res) => {
    Account.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// Route to add account information
accountRoute.route('/add').post((req, res, next) => {
    Account.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// Route to find account information by id
accountRoute.route('/find/:id').get((req, res, next) => {
    Account.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// Route to update account information
accountRoute.route('/update/:id').put((req, res, next) => {
    Account.findByIdAndUpdate(req.params.id, req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = accountRoute;