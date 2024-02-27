import express from "express";



const tiramisuRouter=express.Router();

tiramisuRouter.get("/",(req,res)=>{
    res.send("tiramisu");
})

export default tiramisuRouter;