const express = require('express') 
const router = express.Router() 
const Menu = require('../models/Menu')



router.post('/',async (req,res)=>{
    try{
        const data = req.body 
        const newMenu = new Menu(data) 
        const response = await newMenu.save() 
        console.log('data saved') 
        res.status(200).json(response) 
    } 
    catch(err){
        console.log(err); 
        res.status(500).json({error:'Internal error'})
    }
})


router.get('/',async (req,res)=>{
    try{
        const data = await Menu.find() 
        console.log('data fetched') 
        res.status(200).json(data)

    } 
    catch(err){
        console.log(err) 
        res.status(500).json({erro:'Internal server error'})
    }
})  

router.get('/:taste',async (req,res)=>{
    try{  

        const tast = req.params.taste; 
        if(tast == "Sour"||tast=="Plain"||tast=="Sweet"||tast=="Spicy"){
        const data = await Menu.find({taste:tast})
        console.log('response fetched') 
        res.status(200).json(data) 
        } 
        else{
            res.status(404).json({error:'Invalid work type'})
 
        } 
    } 
    catch(err){
           console.log(err) 
           res.status(500).json({error:'Internal server error'})
    }
})

module.exports = router


