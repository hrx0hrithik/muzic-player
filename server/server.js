//npm run devStart or npm start

import express from 'express'

//app config
const app = express()
const port = 3000

//DataBase Connection

//api routes
app.get("/",(req, res) => {
    console.log("code running")
    res.send("Hi")
})

//listen
app.listen(port)