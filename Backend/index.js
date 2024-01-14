const express=require("express")
const { connection } = require("./db");
const cors = require("cors");
const { userRouter } = require("./Routes/user.route");
const { todoRouter } = require("./Routes/todo.route");

const app=express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

app.use("/user",userRouter);
app.use("/todo",todoRouter)


app.get("/",(req,res)=>{
    res.send("Welcome to Todo Page")
})


app.listen(2024,async(req,res)=>{
    
    try {
      await connection
        console.log("MongoDb Connected");
        console.log('server is running on port 2024');
    } catch (error) {
        console.log(error);
    }
})