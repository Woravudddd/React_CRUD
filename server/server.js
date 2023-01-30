const express = require('express')
const cors = require('cors') //miderware
const bodyParser = require('body-parser')
const morgan = require('morgan')
const connectDB = require('./config/db')

const { readdirSync } = require('fs') //read dir of route auto res

require('dotenv').config();
const app = express()

//middeleware
connectDB()


app.use(morgan('dev'))
app.use(bodyParser.json({limit:'20mb'}))
app.use(cors())  // pull API

//Route form routes/api.js
//http/localhost:3000/api/

//require api type 1
//app.use('/api',require('./routes/api'))


// type 2 readdirSync

readdirSync('./routes').map((read)=>{
   app.use('/api',require('./routes/'+read))
     
})
 

const port = process.env.PORT
app.listen(port,()=>{

     console.log('server is runing on port '+port)  
})