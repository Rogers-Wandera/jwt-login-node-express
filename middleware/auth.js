const { unAuthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const authenticcationMiddleWare = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new unAuthenticatedError("No token provided");
    }
    const token = authHeader.split(" ")[1]; 
    try {
        const decoded =  jwt.verify(token,process.env.JWT_SECRET);
        const {userName,id} = decoded;
        req.user = {userName,id}
        next();
    } catch (error) {
        throw new unAuthenticatedError("No authorized to access this route")
    }
}

module.exports = authenticcationMiddleWare;