

const express = require('express')
const router = express.Router()
 const Appoint = require('../model/appointModel.js')


 router.post('/',(req,res) =>{

    insertRecords(req,res)
 })


 function insertRecords(req,res){

    var appoint = new Appoint();

    appoint.name = req.body.name;
    appoint.email = req.body.email;
    appoint.phone = req.body.phone;
    appoint.barber = req.body.barber;
    appoint.date = req.body.date;
    appoint.time = req.body.time;
    appoint.service = req.body.service;
    appoint.shop = req.body.shop;

    appoint.save((err,doc)  =>{

        if(!err){
           res.redirect('/appoint')
        }
        else{
            console.log('There is an error')
        }
    });
 }

 module.exports = router;