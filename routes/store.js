import express from "express";



const storeRouter=express.Router();

storeRouter.get("/",(req,res)=>{
    res.send("store");
})

export default storeRouter;