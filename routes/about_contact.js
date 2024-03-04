import express from "express";



const about_contactRouter=express.Router();

about_contactRouter.get("/",(req,res)=>{
    res.send("about and contact us");
})

export default about_contactRouter;