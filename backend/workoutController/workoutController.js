const Workout = require("../workout/workoutModel")
const mongoose = require("mongoose")

//GET ALL WORKOUT
const getWorkouts = async(req, res)=>{
    try{
        const mongoQuery = await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(mongoQuery)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//GET SINGLE WORKOUT
const getWorkout = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    
    const mongoQuery = await Workout.findById(id)

    if(!mongoQuery){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(mongoQuery)
}


// CREATE A WORKOUT
const createWorkout = async(req, res)=>{
    const {title, weight, reps} = req.body
    try{
        const mongoQuery = await Workout.create({title, weight, reps})
        res.status(200).json("Workout created successfully")
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


//UPDATE A WORKOUT
const updateWorkout = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const mongoQuery = await Workout.findOneAndUpdate({_id:id}, {...req.body})

    if(!mongoQuery){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json("Workout updated successfully")
}


//DELETE A WORKOUTfindOneAndDelete
const deleteWorkout = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const mongoQuery = await Workout.findByIdAndDelete(id)

    if(!mongoQuery){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json("Workout deleted successfully")
}

module.exports = {getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout}