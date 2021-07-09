const mongoose=require("mongoose"); 
 const express=require("express"); 
 const router01=express.Router();
 const Sch=require("../model/blogSchema");

router01.get('/home',  async (req, res)=> {

    try {
        const posts = await Sch.find();
        console.log(posts);
        // res.send(posts);
        res.json(posts);
        
       
      } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
      }
    
    });

module.exports=router01;