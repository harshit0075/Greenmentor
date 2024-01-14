const jwt  = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {Router} = require("express");
const {UserModel} = require("../models/user.model")

require("dotenv").config();


const userRouter = Router();



userRouter.post("/register",(req,res)=>{
    const {firstName,lastName,email,pass,phone} = req.body;


    bcrypt.hash(pass, 5, async function(err, hash) {
     
        if(err){
            res.status(500).send(err)
        }

        const user = new UserModel({
            firstName,
            lastName,
            email,
            phone,
            pass: hash
        })

        try {
            await user.save();
            res.status(200).send("User Registerd !!!!");
        } catch (error) {
            console.log(error);
            res.status(400).send("Registration Fail Please check it again!!!")
        }
    });
})

    userRouter.post("/login",async (req,res)=>{
        const{email,pass}=req.body;

        const user = await UserModel.findOne({email});

        if(!user){
            res.status(200).send("You are not registered!!!");
            return;
        }

        const hash = user.pass;

        bcrypt.compare(pass, hash, function(err, result) {
          if(err){
            res.status(500).send(err)
          }

          if(result){
            const token = jwt.sign({userID: user._id }, "Task");
            res.status(200).send({message: "Login Successful!!!",token: token})
          }
          else{
            res.status(400).send("NOt Registered!!!")
          }
        }) 
    })

    userRouter.get("/userID", async (req,res)=>{
        try {
            const userIDData = await UserModel.find();
            res.status(200).send(userIDData);
        } catch (error) {
            console.log(error);
            res.status(400).send("Wrong Credentials!!!")
        }
    })


module.exports={
    userRouter
}