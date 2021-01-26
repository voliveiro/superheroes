require('dotenv').config()
const express = require ('express')
const app = express()
const ejs = require('ejs');
const superheroData = require('./models/superhero_data.js')
const villainData = require('./models/villain_data.js')
app.use(express.static("public"));

const allcharacters = [superheroData, villainData]

app.get('/index',(req, res) => {
    res.send(allcharacters)
})


app.get('/showall/', (req, res) => {
   //display both heroes and villains
   console.log (allcharacters)
   res.render('showall.ejs', {
       characters: allcharacters
   })
}); 

app.get('/showheroes/', (req, res) => {
     res.render('showheroes.ejs', {
         superheroes: superheroData
     })  
})

app.get('/showvillains/', (req, res) => {
    res.render('showvillains.ejs', {
        villains: villainData
    })
})
app.listen (process.env.PORT, ()=> {
    console.log ("Here to save the day!")
})