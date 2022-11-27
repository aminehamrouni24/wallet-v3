const express = require('express')
const db = require('./config/Db')
const app = express()
require('dotenv').config()



const PORT = process.env.PORT || 6000

// middlewares

app.use(express.json())
app.use('/api' , require('./routes/authRoutes'))
app.use('/api/user' , require('./routes/userRoutes'))

// database

db()

// Server

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})