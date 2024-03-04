import express from "express";



const recepiesRouter=express.Router();

recepiesRouter.get("/",(req,res)=>{
    res.send("recepies");
})

export default recepiesRouter;