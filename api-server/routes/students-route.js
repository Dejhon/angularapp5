let express = require('express');
const { create } = require('../models/students');
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
});


// Mongoose Functions
// create()
// findById()
// findByIdAndUpdate()
// findOneAndRemove()

studentRoute.route('/create').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

studentRoute.route('/find/:id').get((req, res, next) => {
    Student.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

studentRoute.route('/update/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// studentRoute.route('/remove/:id').delete((req, res, next) => {
//     Student.findByIdAndDelete(req.params.id, (error, data)=>{
//         if(error){
//             return next(error)
//         }else{
//             res.json(data)
//         }
//     })
// })

studentRoute.get('/remove/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})


module.exports = studentRoute;