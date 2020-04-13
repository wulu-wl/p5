const express = require('express');
const router = express.Router();
// const jwt=require('json-web-token')
const jwt = require('./jsonwebtoken')
const db = require('./db');
const dbase = new db('1907');

router.post("/addp",(req,res)=>{
    // console.log(1)
    // console.log(req.body)
    req.body.checked=Boolean(!req.body.checked)
    // console.log(req.body.checked)
    //先查找购物车中是否存在该条数据   如果存在修改数量   如果不存在增加数据
    dbase.find("JD",{query:{gid:req.body.gid}},(err,data)=>{
        // console.log(data)
        if(err) throw err;
        if(data.length==0){
            // console.log(2)
            dbase.insertOne("JD",req.body,(err,data)=>{
                if(err) throw err;
                res.send(data)
            })
        }else if(data.length==1){
            // console.log(3)
            let num=Number(data[0].num) 
            // console.log(num)
            dbase.find("JD",{query:{gid:req.body.gid,yanse:req.body.yanse,chima:req.body.chima}},(err,data)=>{
                //颜色 尺码 id 均相等的数据
                if(data.length==0){
                    console.log(4)
                    dbase.insertOne("JD",req.body,(err,data)=>{
                        if(err) throw err;
                        // console.log(data)
                        res.send(data)
                    })
                }else if(data.length==1){
                    console.log(5)
                    let dataid=data[0]._id
                    // console.log(dataid)
                    dbase.updateById("JD",dataid,{num:String(Number(req.body.num)+num)},(err,data)=>{
                            // console.log(data.result)
                            if(err) throw err;
                            // console.log(data)
                            res.send(data)
                        })
                }

            })
        }
    })
   
})
//购物车页面渲染
router.post("/hqp",(req,res)=>{
    // console.log(req.body)
    dbase.find("JD",{},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})
//删除
router.post("/delid",(req,res)=>{
    // console.log(req.body)
    dbase.deleteById("JD",req.body.id,(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//加
router.post("/jiaid",(req,res)=>{
    // console.log(req.body)
    dbase.updateById("JD",req.body.id,{num:req.body.num},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//减
router.post("/jianid",(req,res)=>{
    // console.log(req.body)
    dbase.updateById("JD",req.body.id,{num:req.body.num,zj:req.body.zj},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//全选
router.post("/jianid",(req,res)=>{
    // console.log(req.body)
    dbase.update("JD",req.body.id,{num:req.body.num,zj:req.body.zj},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//单选总价
router.post("/danzj",(req,res)=>{
    // console.log(req.body)
    dbase.updateById("JD",req.body.id,{zj:req.body.zj},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//确认订单
router.post("/sureorder",(req,res)=>{
    // console.log(req.body)
    dbase.updateById("JD",req.body.id,{zj:req.body.zj},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

//地址页面获取
router.post("/getdizhi",(req,res)=>{
    // console.log(req.body)
    dbase.find("dizhi",{},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//地址添加

router.post("/adddz",(req,res)=>{
    // console.log(req.body)
    dbase.insertOne("dizhi",req.body,(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
//删除地址
router.post("/deldz",(req,res)=>{
    // console.log(req.body)
    dbase.deleteById("dizhi",req.body.id,(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})
module.exports = router;