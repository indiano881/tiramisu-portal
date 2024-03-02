import express from "express";
import storeRouter from "./routes/store.js";
import recepiesRouter from "./routes/recepies.js";
import about_contactRouter from "./routes/about_contact.js";
import historyRouter from "./routes/history.js";
import companyRouter from "./routes/company.js";
import { day } from "./data/tiramisu.js";

import * as path from "path";



const app=express();
const port= process.env.PORT || 3000;
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
/* BOLLEN GROUP SYSTEM
app.get("/ReadMore", (req, res) => {
   const index = req.query.index;
   const selectedAnimal = arrayOfAnimals[index];
   console.log(selectedAnimal);
   res.render("pages/readmore.ejs", {selectedAnimal, Animal, arrayOfAnimals});
});


*/

app.listen(port, ()=>console.log("SERVER CONNECTED"))

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/tiramisu", storeRouter)
app.use("/recepies", recepiesRouter)
app.use("/about_us", about_contactRouter)
app.use("/history", historyRouter)
app.use("/company", companyRouter)

/*
Instructions
For this assignment you are required to build a complete website using Node, Express and EJS. Your knowledge of routing, templates, modular development and project organization will be examined. The choice of subject matter is up to you, but your site  must consist of

A home page and routes to at least 2 other top level pages.
The 2 top level pages should each have at least 2 routes to sub pages
Eg: sub pages should be accessible with a url such as: mysite/page1/subpage1

That is a minimum of 7 accessible routes.

To achieve a Godkänt grade:

Set up an Express server correctly:
At least 2 routers
Routers should be imported into index.js

Set a view engine:
correct directory structure

Use of templates:
All pages should be templates
Templates should be practical
Sub pages for each main page should use the same template 
It's possible all subpages use the same template - this means a minimum of 3 page templates
Partials for all common element
Header, footer, navigation etc
Any reused elements should be partials
Responsive styling
static files stored in appropriate location
at least one img element
at least one background-image element
Only the home page is allowed hardcoded content.
Data passed to templates using the locals object

To achieve a Välgodkänt grade:
Data organization
Data to be stored and imported from an appropriate directory
Data passed to templates correctly
Conditional Logic
File Organization
Consistent and correct coding style.

*/