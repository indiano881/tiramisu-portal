import express from "express";
import { day, tiramisuArray } from "../data/tiramisu.js";



const storeRouter=express.Router();

storeRouter.get("/",(req,res)=>{
    res.render("pages/store.ejs",
    {
        page: "store",
        mainMessage: "Our products",
        dayOfTheWeek: day,
        url: req.url,
        products: tiramisuArray
        
    })
})

storeRouter.get("/order",(req,res)=>{
    res.render("pages/store.ejs",
    {
        page: "store/order",
        mainMessage: "Make an order here",
        dayOfTheWeek: day,
        url: req.url,
        products: tiramisuArray
        
    })
})

storeRouter.get("/catalog",(req,res)=>{
    res.render("pages/store.ejs",
    {
            page: "store/catalog",
            mainMessage: "Catalog",
            dayOfTheWeek: day,
            url: req.url,
            products: tiramisuArray
            
    })
})

storeRouter.get("/tir", (req, res) => {
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

export default storeRouter;