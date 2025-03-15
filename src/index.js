//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
//import mongoose from "mongoose"
//import { DB_NAME } from "./constants"
import connectDB  from "./db/index.js"

// commented things can use in approach 1

dotenv.config({
    path: './env'
});
connectDB()


/*
APPROACH 1
import express from "express"
const app = express()

(async () => {
    try {
     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     app.on("error",(e) =>{
        console.log("ERROR: ",e);
        throw e 
     })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listining on port ${process.env.PORT}`)
     })
    } catch (error) {
        console.error("ERROR: ",error)
        throw error 
    }
})()
    */