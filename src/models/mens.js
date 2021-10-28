const express = require("express")
const mongoose = require("mongoose")

const menSchema = new mongoose.Schema({
raking:{
    type:Number,
    required:true,
    unique:true
},
name:{
    type:String,
    required:true,
    trim:true
}
})
const Mensraking = new mongoose.model("MenRaking",menSchema)
module.exports= Mensraking ;