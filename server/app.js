const express=require ('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const mongoose= require('mongoose')


//db
mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log('MongoDB Connected'))
        .catch((err)=>console('MongoDB Error', err))
const port= process.env.PORT || 8000


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})

