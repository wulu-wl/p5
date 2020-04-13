 //权限路由
const express = require('express');
const router = express.Router();
const jwt = require('./jsonwebtoken');
const db = require('./db');
const dbase = new db('12-11');

router.use((req,res,next)=>{
    let obj=JSON.parse(req.headers.authorization) ;
    // console.log(obj)
        jwt.verify(obj.token,(err,data)=>{
            // console.log(obj.token)
            // console.log(data)
            if(err){
                res.status('401')
                res.send()
            }else{
                if(obj.uid==data.id){
                    next()
                }else{
                    res.status('401')
                    res.send()
                }
            }
        })
})


async function _option(id){
    let step1=await new Promise((reslove,reject)=>{
        dbase.find("userInfo",{query:{userId:id}},(err,data)=>{
            if(err){
                reject(err)
            }else{
                reslove(data)
            }
        })
    })
    // return step1;
    let step2=await new Promise((reslove,reject)=>{
        // console.log(step1[0].rankId)
        dbase.findById("rankList",step1[0].rankId,(err,data)=>{
            if(err){
                reject(err)
            }else{
                reslove(data)
            }
        })
    })
    // return step2;
    let step3=await new Promise((reslove,reject)=>{
        // console.log(step2)
        dbase.find("sys",{},(err,data)=>{
            if(err){
                reject(err)
            }else{
                // reslove(data)
                let arr=data.filter((item,index)=>{
                    if(item.children){
                        item.children=item.children.filter((item1,index1)=>{
                            if(item1.children){
                                item1.children=item1.children.filter((item2,index2)=>{
                                    if(step2.roleRank>=item.rankOpen){
                                        return true
                                    }else{
                                        return false
                                    }
                                })
                            }
                            if(step2.roleRank>=item1.rankOpen){
                                return true
                            }else{
                                return false
                            }
                        })
                    }
                    if(step2.roleRank>=item.rankOpen){
                        // console.log(step2.roleRank)
                        return true
                    }else{
                        return false
                    }
                })
                reslove(arr)
            }
        })
    })
    return [step1,step2,step3]

}

router.post("/home",(req,res)=>{
    let obj=JSON.parse(req.headers.authorization)
    // let id=obj.uid;
    // console.log(obj.uid)
    _option(obj.uid).then(data=>{
        res.send(data)
        // console.log(data)
    })
})


module.exports = router;