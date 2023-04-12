const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('dotenv')
config.config({path:"./config/config.env"})

const URI = process.env.URI

app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(URI)
mongoose.connection.on('connected',()=>{
    console.log("Successfully connected to the database")
})

require('./schema/userData')
app.use(require('./router/myRoute'))




app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
})



