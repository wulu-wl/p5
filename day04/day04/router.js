const express=require("express")
const db=require("./db.js")
const dbmodel=new db("test")
let router=express.Router()
//接口文档
//展示页面接口
router.get("/show",(req,res)=>{
    dbmodel.find("vue",{},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
module.exports=router