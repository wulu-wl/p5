const express=require("express")
const db=require("./db.js")
const dbmodel=new db("1907")
let router=express.Router()
const jwt=require('./jsonwebtoken')
//接口文档
//展示页面接口nav
router.get("/show",(req,res)=>{
    dbmodel.find("navList",{},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})
//展示页面接口shop
router.post("/shopshow",(req,res)=>{
    dbmodel.find("shopList",{},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})
//详情页面接口
router.post("/xq",(req,res)=>{
    // console.log(req.body)
    dbmodel.findById("shopList",req.body._id,(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})
//商品添加

//在添加时  
//先查找根据id 是否存在数据  存在 updata num+1 
//不存在添加数据  
//前台传shopid   
router.post("/shopadd",(req,res)=>{
    // // console.log(req.body)
    // dbmodel.insertOne("shopcar",req.body,(err,data)=>{
    //     if(err) throw err;
    //     // console.log(data)
    //     res.send(data)
    // })
    dbmodel.find("shopcar",{query:{shopid:req.body.shopid}},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        if(data.length==1){
            let num1=Number(data[0].num)+1;
            // console.log(num1)
            dbmodel.updateOne("shopcar",{shopid:req.body.shopid},{num:num1},(err,data)=>{
                // console.log(req.body.shopid)
                    if(err) throw err;
                    // console.log(data)
                    res.send(data)
                })
        }else if(data.length==0){

             dbmodel.insertOne("shopcar",req.body,(err,data)=>{
                    if(err) throw err;
                    // console.log(data)
                    res.send(data)
                })
        }
    })



})
//购物车商品获取
router.post("/getshop",(req,res)=>{
    // console.log(req.body)
    dbmodel.find("shopcar",{query:req.body},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//减
router.post("/jian",(req,res)=>{
    // console.log(req.body)
    dbmodel.updateOne("shopcar",{shopid:req.body.shopid},{num:req.body.num,zj:req.body.zj},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//加
router.post("/jia",(req,res)=>{
    // console.log(req.body)
    // console.log(req.body.zj)
    dbmodel.updateOne("shopcar",{shopid:req.body.shopid},{num:req.body.num,zj:req.body.zj},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//订单页面获取数据
router.post("/order",(req,res)=>{
    // console.log(req.body)
    dbmodel.find("shopcar",{},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//登录
router.post("/login",(req,res)=>{
    // console.log(req.body)
    dbmodel.find("userList",{query:req.body},(err,data)=>{
        if(err) throw err;
        if(data.length==0){
            res.send({
                state:0,
                reson:"无此人"
            })
        }else{
            let id=data[0]._id.toString();
            // console.log(id)
            let token=jwt.sign({id},'7d')
            // console.log(token)
            res.send({
                state:1,
                success:"登录成功",
                uid:id,
                token:token
            })
        }
        
    })
})
module.exports=router