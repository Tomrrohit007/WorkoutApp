require("dotenv").config()

// PORT NO
const express = require("express")
const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const workoutRoutes = require("./workout/workoutRoutes")
const app = express()
app.use(express.json())


const portNo = process.env.PORT


// MIDDLEWARE FUNCTION
app.use((req, res, next)=>{
    next()
})

app.use("/workouts", workoutRoutes)

mongoose.connect(process.env.MONG_URI)
.then(()=>{
    app.listen(portNo, ()=>{
        console.log("Connecting to DB & Listening on port", portNo)
    })
})
.catch((error)=>{
    console.log(error)
})
