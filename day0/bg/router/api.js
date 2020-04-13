const express=require('express');
const router=express.Router();
// const jwt=require('json-web-token')
const jwt=require('./jsonwebtoken')
const db=require('./db');
const dbase=new db('12-11');
// const url=require('url')
const Formidable=require('formidable')
//登录接口
router.post('/login',(req,res)=>{
    // console.log('欢迎登录')
    // console.log(req.body)
    dbase.find('userList',{query:req.body},(err,data)=>{
        if(err) throw err;
        // console.log(data)
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


//添加商品
router.post('/addshop',(req,res)=>{
    dbase.insertOne("shopList",req.body,(err,data)=>{
        if(err) throw err;
        res.send({
            success:"添加成功"
        })
    })
})
//获取商品信息
router.post('/getshop',(req,res)=>{
    dbase.find("shopList",{},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

//添加用户信息
router.post('/adduser',(req,res)=>{
    // console.log(111)
    // console.log(req.body)
    dbase.insertOne("uList",req.body,(err,data)=>{
        if(err) throw err;
        res.send({
            success:"添加成功"
        })
    })
})

//获取商品信息
router.post('/getu',(req,res)=>{
    // console.log(req.body)
    dbase.find("uList",{},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})

//获取商品信息
router.post('/usearch',(req,res)=>{
    // console.log(req.body)
    dbase.find("uList",{query:req.body},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})
//获取用户分析
router.post('/getyhfx',(req,res)=>{
    // console.log(req.body)
    dbase.find("yonghufenxi",{},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})

//获取订单分析
router.post('/getding',(req,res)=>{
    // console.log(req.body)
    dbase.find("dingdanfenxi",{},(err,data)=>{
        if(err) throw err;
        // console.log(data)
        res.send(data)
    })
})
module.exports=router;