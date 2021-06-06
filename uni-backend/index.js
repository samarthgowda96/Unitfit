import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from './routes/users.js'


const app=express()
dotenv.config()
app.use(cors())
app.use(express.json({limit:'100mb'}))
app.use(bodyParser.json({limit:"100mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"100mb",extended:true}))


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
})
.then(()=>{
    console.log("Mongo Connected to Unitfit collection")
})
.catch((e)=>{
    console.log(e)
    
})

app.use('/',users)
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT} `)
})
