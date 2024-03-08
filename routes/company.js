import express from "express";
import { day } from "../data/tiramisu.js";

const companyRouter=express.Router();

companyRouter.get("/",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "company",
        mainMessage: "The company",
        dayOfTheWeek: day
    })
})

export default companyRouter;