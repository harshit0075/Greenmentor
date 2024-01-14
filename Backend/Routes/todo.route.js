const {Router} = require("express");
const {TodoModel} = require("../models/todo.model");
const todoRouter = Router();


todoRouter.get("/todo",async(req,res)=>{
   try {
    const todos = await TodoModel.find();
    res.status(200).send(todos);
   } catch (error) {
    console.log(error);
    res.status(400).send("Try again!!!");
   }
})

todoRouter.post("/todo/add", async (req,res)=>{
    try {
        const todoData = req.body;
        await TodoModel.insertMany(todoData);
        res.status(200).send("todo Added")
    } catch (error) {
        console.log(error);
        res.status(400).send("Try again!!!");
    }
})

todoRouter.update("/todo/:ID",async(req,res)=>{
    try {
        const id = req.params.ID;
        const data=req.body.data;
        await TodoModel.findByIdAndUpdate(id,data);
        res.status(200).send("Updated!!!");
    } catch (error) {
        console.log(error);
        res.status(400).send("Try again!!!");
    }
})

todoRouter.delete("/todo/:ID",async (req,res)=>{
    try {
        await TodoModel.findByIdAndDelete(req.params.ID);
        res.status(200).send("Deleted!!!");
    } catch (error) {
        console.log(error);
        console.log("Try again!!!");
    }
})

module.exports={
    todoRouter
}