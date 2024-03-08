import express from "express";
import { day } from "../data/tiramisu.js";



const historyRouter=express.Router();

historyRouter.get("/",(req,res)=>{
    res.render("pages/history.ejs",
    {
        page: "history",
        mainMessage: "History of Tiramisu",
        dayOfTheWeek: day
        
    })
})
historyRouter.get("/treviso",(req,res)=>{
    res.render("pages/history.ejs",
    {
        page: "history/treviso",
        mainMessage: "About Treviso",
        dayOfTheWeek: day
        
    })
})
historyRouter.get("/savoiardi",(req,res)=>{
    res.render("pages/history.ejs",
    {
        page: "history/savoiardi",
        mainMessage: "Savoiardi",
        dayOfTheWeek: day
        
    })
})
historyRouter.get("/mascarpone",(req,res)=>{
    res.render("pages/history.ejs",
    {
        page: "history/mascarpone",
        mainMessage: "Mascarpone",
        dayOfTheWeek: day
        
    })
})

export default historyRouter;