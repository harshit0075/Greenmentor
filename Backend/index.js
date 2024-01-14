const express=require("express")
const { connection } = require("./db");

const app=express();

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