const express = require("express")
const bodyParser = require("body-parser");
const {getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout} = require("../workoutController/workoutController")
const router = express.Router()
router.use(bodyParser.json())

// GET ALL WORKOUT
router.get("/", getWorkouts)

// GET A SINGLE WORKOUT
router.get("/:id", getWorkout)

// DELETE A WORKOUT
router.delete("/:id", deleteWorkout)

// CREATE A WORKOUT
router.post("/", createWorkout)

//UPDATE A WORKOUT
router.put("/:id", updateWorkout)

module.exports = router