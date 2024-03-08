import express from "express";
import bodyParser from "body-parser";
import storeRouter from "./routes/store.js";
import historyRouter from "./routes/history.js";
import companyRouter from "./routes/company.js";
import locationRouter from "./routes/location.js";
import { day, tiramisuArray } from "./data/tiramisu.js";
import * as path from "path";



const app=express();
const port= process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res)=> {
    res.render("pages/home.ejs",
    {
        page: "main",
        mainMessage: "...for the Tiramisu´s Dreamers...",
        dayOfTheWeek: day
        
    })
})

app.get("/tir", (req, res) => {
   const index = req.query.index;
   const selectedTiramisu = tiramisuArray[index];
   
   res.render("pages/single-tiramisu.ejs", 
    {
        page: "tir",
        selectedTiramisu, 
        tiramisuArray,
        mainMessage: selectedTiramisu.name,
        dayOfTheWeek: day,
        name: selectedTiramisu.name,
        description: selectedTiramisu.description,
        image: selectedTiramisu.image,
        price: selectedTiramisu.price,
        calories: selectedTiramisu.calories,
        ing1: selectedTiramisu.ingredient1,
        ing2: selectedTiramisu.ingredient2,
        ing3: selectedTiramisu.ingredient3,
        ing4: selectedTiramisu.ingredient4,
        ing5: selectedTiramisu.ingredient5,
        ing6: selectedTiramisu.ingredient6
    })
})

app.listen(port, ()=>console.log(`SERVER CONNECTED PORT: ${port}`))

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/history", historyRouter)
app.use("/company", companyRouter)
app.use("/location", locationRouter)
app.use("/store", storeRouter)
app.use("/store/order", storeRouter)
app.use("/store/catalog", storeRouter)
