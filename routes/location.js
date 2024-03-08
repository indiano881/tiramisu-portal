import express from "express";
import { day } from "../data/tiramisu.js";

const locationRouter=express.Router();

locationRouter.get("/",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "location",
        mainMessage: "Where",
        dayOfTheWeek: day
    })
})

export default locationRouter;