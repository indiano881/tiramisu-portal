import express from "express";
import { day } from "../data/tiramisu.js";



const historyRouter=express.Router();

historyRouter.get("/",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "history",
        mainMessage: "History of Tiramisu",
        dayOfTheWeek: day
        
    })
})

export default historyRouter;