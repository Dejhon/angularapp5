const express = require('express');
const account = require('../models/accounts')
const { create } = require('../models/accounts');
const app = express();

// Mongoose Model
let Account = require('../models/accounts');
let accountRoute = express.Router();

// Account route for mongo get
accountRoute.get('/', (req, res) => {
    Account.find((error, data)=>{
        if(error){
            console.error(error);
            res.status(500).json({
                message: error
            })
        }else{
            if(account){
                res.json(data)
                res.status(200).json(account)
            }else{
                res.status(404).json({
                status: "404",
                message: "No Data Found"
              })
            }
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