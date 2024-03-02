import express from "express";
import bodyParser from "body-parser";
import storeRouter from "./routes/store.js";
import recepiesRouter from "./routes/recepies.js";
import about_contactRouter from "./routes/about_contact.js";
import historyRouter from "./routes/history.js";
import companyRouter from "./routes/company.js";
import locationRouter from "./routes/location.js";
import { day, tiramisuArray } from "./data/tiramisu.js";

import * as path from "path";



const app=express();
const port= process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));//check again this
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
/*
app.use((req, res, next) => {
  res.locals.url = req.url;
  next();
});

*/

app.get("/", (req,res)=> {
    res.render("pages/home.ejs",
    {
        page: "main",
        mainMessage: "...for the Tiramisu´s Dreamers...",
        dayOfTheWeek: day,
        url: req.url
        
    })
    
})

app.get("/tir", (req, res) => {
   const index = req.query.index;
   const selectedTiramisu = tiramisuArray[index];
   
   console.log(selectedTiramisu);
   res.render("pages/single-tiramisu.ejs", 
    {
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
    });
});




app.listen(port, ()=>console.log("SERVER CONNECTED"))

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/tiramisu", storeRouter)
app.use("/recepies", recepiesRouter)
app.use("/about_us", about_contactRouter)
app.use("/history", historyRouter)
app.use("/company", companyRouter)
app.use("/location", locationRouter)
app.use("/store", storeRouter)
/*
Instructions
For this assignment you are required to build a complete website using Node, Express and EJS. Your knowledge of routing, templates, modular development and project organization will be examined. The choice of subject matter is up to you, but your site  must consist of

A home page and routes to at least 2 other top level pages.
The 2 top level pages should each have at least 2 routes to sub pages
Eg: sub pages should be accessible with a url such as: mysite/page1/subpage1

That is a minimum of 7 accessible routes.

To achieve a Godkänt grade:

Set up an Express server correctly: OK
At least 2 routers OK
Routers should be imported into index.js OK

Set a view engine: OK
correct directory structure OK

Use of templates:
All pages should be templates OK
Templates should be practical OK
Sub pages for each main page should use the same template OK
It's possible all subpages use the same template - this means a minimum of 3 page templates CHECK THIS?
Partials for all common element OK
Header, footer, navigation etc OK
Any reused elements should be partials OK
Responsive styling OK
static files stored in appropriate location OK
at least one img element OK
at least one background-image element OK
Only the home page is allowed hardcoded content. CHECK THIS
Data passed to templates using the locals object OK

To achieve a Välgodkänt grade:
Data organization OK
Data to be stored and imported from an appropriate directory OK
Data passed to templates correctly OK
Conditional Logic OK
File Organization OK
Consistent and correct coding style. OK

*/