// to take environment varibale 
require('dotenv').config()


// console.log("chai aur backed");
const express = require('express') // require module syntax
const app = express()
const port = 4000
const githubdata = {
  //my github data
}

// to print the github data whenever i go to /github on localhost
app.get('/github', (req, res) =>{
  console.log("we will get github data here")
  res.json(githubdata) // sendind data in the form of json in response
})
// the above function will give github data in json format

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