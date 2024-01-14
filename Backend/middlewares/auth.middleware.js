const jwt = require("jsonwebtoken");
require("dotenv").config()

const auth = (req,res,next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "Token is Missing!!!" });
      }
    

    try {
        const decoded = jwt.verify(token,"Todo");
        req.user  = decoded.user;
        console.log("Token Authorized!!!");
        next();
    } catch (error) {
        console.log("Not a Token",error.message)
        res.status(404).send("Try Again Token is not Valid...!!!")
    }
}

module.exports = {auth};