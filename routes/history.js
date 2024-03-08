import express from "express";
import { day, tiramisuArray } from "../data/tiramisu.js";

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

historyRouter.get("/tir", (req, res) => {
    const index = req.query.index;
    const selectedTiramisu = tiramisuArray[index];
    
    
    res.render("pages/single-tiramisu.ejs", 
     {
        page: "tiramisu",
        selectedTiramisu, 
        tiramisuArray,
        mainMessage: selectedTiramisu.name,
        dayOfTheWeek: day,
        name: selectedTiramisu.name,
        description: selectedTiramisu.description,
        image: "../"+selectedTiramisu.image,
        price: selectedTiramisu.price,
        calories: selectedTiramisu.calories,
        ing1: selectedTiramisu.ingredient1,
        ing2: selectedTiramisu.ingredient2,
        ing3: selectedTiramisu.ingredient3,
        ing4: selectedTiramisu.ingredient4,
        ing5: selectedTiramisu.ingredient5,
        ing6: selectedTiramisu.ingredient6
     });
 });

export default historyRouter;