// require('dotenv').config({path: './env'}) 
// import 'dotenv/config'
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config (
  {path: "./env"}
)

connectDB()

//* ____________________________________________________________________________________________________________
//^ Method 1: How to connect database

// import express from "express"
// const app = express()

//     (async () => {

//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("Error:", error)
//                 throw error
//             })

//               app.listen(process.env.PORT, () => {
//                 console.log("App is listening on Port ${process.env.PORT}`")
//               }
//               )

//         } catch (error) {
//             console.log("Error Occured")
//             throw error
//         }

//     })()
//* ____________________________________________________________________________________________________________
