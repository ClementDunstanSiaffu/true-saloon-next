



const Appoint = require('./model/appointModel')
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080
const dev = process.env.NODE_DEV !== 'production' 
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const db = mongoose.connect('mongodb+srv://Victorius:Cle*1995@cluster0-t78mw.azure.mongodb.net/Appoint?retryWrites=true&w=majority')


nextApp.prepare().then( () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/book',require('./routes/index'));
    app.get('/api/clem', (req, res) => {
        Appoint.find({}, (err, appoints) => {
            res.json(appoints)
        })
    })

    app.get('*', (req,res) => {
        return handle(req,res,) // for all the react stuff
    })

    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })

})