require('dotenv').config()
const express = require ('express')
const app = express()
const ejs = require('ejs');
const data = require('./models/data.js')
app.use(express.static("public"));

app.get('/index/', (req, res) => {
    res.send(data)
})
app.listen (process.env.PORT, ()=> {
    console.log ("Here to save the day!")
})