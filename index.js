import express from "express";
import tiramisuRouter from "./routes/tiramisu.js";

const app=express();
const port= 3000;

app.get("/", (req,res)=> {
    res.send("connected")
})

app.listen(port, ()=>console.log("SERVER CONNECTED"))

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/tiramisu", tiramisuRouter)