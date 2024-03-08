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
historyRouter.get("/treviso",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "treviso",
        mainMessage: "About Treviso",
        dayOfTheWeek: day
        
    })
})
historyRouter.get("/savoiardi",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "savoiardi",
        mainMessage: "Savoiardi",
        dayOfTheWeek: day
        
    })
})
historyRouter.get("/mascarpone",(req,res)=>{
    res.render("pages/home.ejs",
    {
        page: "mascarpone",
        mainMessage: "Mascarpone",
        dayOfTheWeek: day
        
    })
})

export default historyRouter;