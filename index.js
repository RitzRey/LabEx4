// Comp3123 LabEx4, 101358231, Ritchel Etchorre
var express = require('express')

const SERVER_PORT = 8089
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


//http://localhost:8089/
app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Lab Ex4</h1>")
})

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})


//http://localhost:8089/user
//Get Parameter
app.get("/users", (req, res) => {
    res.json(req.query)
    if(req.query.fnm == undefined){
        res.send("Please send fnm as query parameter")
    }
})

//http://localhost:8089/user/pritesh/patel
//Path Parameter
app.post("/user/:firstname/:lastname", (req, res) => {
    const {firstname, lastname} = req.params
    res.send(`Hello ${firstname} ${lastname}`)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running on at http://localhost:${SERVER_PORT}/`)
})