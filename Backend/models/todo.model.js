const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: String,
    description:String
})

const todoModel = mongoose.model("todo",todoSchema);

module.exports={
    todoModel
}