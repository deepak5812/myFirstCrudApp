const express= require("express");
const mongoose=require("mongoose");
const router02=express.Router();
const Sch=require("../model/blogSchema");


router02.delete("/deletepost/:id",async (req,res)=>{
     
    const id01=req.params.id;
    try{
     await Sch.findByIdAndDelete(id01,(req, res, err) => {
        if (!err) {
          console.log("Item deleted");
        } else {
          console.log(err);
        }});
       
    }catch(err){
        res.status(500).send(err);
    console.log(err);
    }
})
module.exports=router02;