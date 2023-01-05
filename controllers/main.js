const {badRequestError} = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req,res) => {
    const { userName, password } = req.body;
    if(!userName || !password){
        throw new badRequestError("Please provide user name and password")
    }
    const id = new Date().getTime().toString();
    const token = jwt.sign({id,userName},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).send({
        msg: `user created`,
        token
    })
}

const Dashboard = async (req,res) => {
    const userData = Math.floor(Math.random()*100);
    console.log(req.user)
    res.status(200).send({
        msg: `Hello ${req.user.userName}`,
        secret: `here is your data ${userData}`
    })
}

module.exports = {
    login,Dashboard
}