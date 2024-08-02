// to take environment varibale 
require('dotenv').config()


// console.log("chai aur backed");
const express = require('express') // require module syntax
const app = express()
const port = 4000
const githubdata = {
  //my github data
    "login": "Som-115",
    "id": 140943639,
    "node_id": "U_kgDOCGahFw",
    "avatar_url": "https://avatars.githubusercontent.com/u/140943639?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Som-115",
    "html_url": "https://github.com/Som-115",
    "followers_url": "https://api.github.com/users/Som-115/followers",
    "following_url": "https://api.github.com/users/Som-115/following{/other_user}",
    "gists_url": "https://api.github.com/users/Som-115/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Som-115/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Som-115/subscriptions",
    "organizations_url": "https://api.github.com/users/Som-115/orgs",
    "repos_url": "https://api.github.com/users/Som-115/repos",
    "events_url": "https://api.github.com/users/Som-115/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Som-115/received_events",
    "type": "User",
    "site_admin": false,
    "name": "vaishnavi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2023-07-30T08:28:55Z",
    "updated_at": "2024-07-23T11:15:36Z"
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