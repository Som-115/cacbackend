// to take environment varibale 
require('dotenv').config()


// console.log("chai aur backed");
const express = require('express') // require module syntax
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('vaishnavidotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>pleases login at chai aur code </h1>')
})

app.get('/youtube', (req,res) => {
  res.send('<h2>subscribe to my channel</h2>')
})

// for listning 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})