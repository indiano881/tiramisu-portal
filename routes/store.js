import express from "express";
import { day, tiramisuArray } from "../data/tiramisu.js";



const storeRouter=express.Router();

storeRouter.get("/",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "store",
        mainMessage: "Our products",
        dayOfTheWeek: day,
        url: req.url,
        products: tiramisuArray
        
    })
})
export {tiramisuArray};
export default storeRouter;