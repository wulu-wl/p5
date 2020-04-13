const express = require('express');
const router = express.Router();
const jwt = require('./jsonwebtoken')
const db = require('./db');
const dbase = new db('cookbook');
//注册接口
router.post("/login", (req, res) => {
    dbase.find("userList", { query: { tel: req.body.tel } }, (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            dbase.insertOne("userList", req.body, (err, data) => {
                if (err) throw err;
                res.send({
                    state: 1,
                    reason: "注册成功"
                })
            })
        } else {
            res.send({
                state: 0,
                reason: "该手机号已被注册，请登录"
            })
        }
    })
})
//登录
router.post("/loginIn", (req, res) => {
    // console.log(req.body)
    dbase.find("userList", {query:{tel: req.body.tel } } , (err, data) => {
        // console.log(data)
        if (err) throw err;
        if (data.length == 0) {
            res.send({
                state: 0,
                reason: "无此用户，请先注册"
            })
        } else {
            dbase.find("userList", {query:{tel: req.body.tel ,pass:req.body.pass} }, (err1, data1) => {
                if (err1) throw err1;
                if (data1.length == 0) {
                    res.send({
                        state: 2,
                        reason: "密码错误"
                    })
                } else {
                    let id=data[0]._id.toString();
                    let token=jwt.sign({id},'7d')
                    res.send({
                        state: 1,
                        reason: "登录成功",
                        uid:id,
                        token:token
                    })
                }
            })
        }
    })

})
//发送验证码接口
router.get("/veri", (req, res) => {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var code = '';
    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * arr.length)
        code += arr[index]
    }
    res.send(code)
})
//确认修改
router.post("/sureupd", (req, res) => {
    console.log(req.body)
    dbase.find("userList", { query: { tel: req.body.tel } }, (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            // console.log(1)
            res.send({
                state: 0,
                reason: "修改错误,请确认手机号码是否正确"
            })
        } else {
            // console.log(2)
            dbase.updateById("userList", data[0]._id, { pass: req.body.pass }, (err, data) => {
                if (err) throw err;
                res.send({
                    state: 1,
                    reason: "修改成功"
                })
            })
        }
    })
})
//首页轮播
router.get("/homeswiper",(req,res)=>{
    dbase.find("home_swiper",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//首页分类接口
router.get("/homefoodlist",(req,res)=>{
    dbase.find("home_foodlist",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//每日三餐
router.get("/getthree",(req,res)=>{
    dbase.find("weekthree",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//大家都在做
router.get("/geteverydo",(req,res)=>{
    dbase.find("everydo",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//我的菜单
router.get("/getminemennu",(req,res)=>{
    dbase.find("minemenu",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})

//视频
router.get("/getvideo",(req,res)=>{
    dbase.find("video",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//底部分类
router.get("/gettypes",(req,res)=>{
    dbase.find("types",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//底部路由左侧点击对应的分类
router.post("/getcid1",(req,res)=>{
    // console.log(req.body)
    dbase.find("types",{query:req.body},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//首页分类
router.get("/getfood",(req,res)=>{
    dbase.find("home_foodlist",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})

//首页分类左侧点击对应的分类
router.post("/getaa",(req,res)=>{
    // console.log(req.body)
    dbase.find("home_foodlist",{query:req.body},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//我的菜单
router.get("/getmenu",(req,res)=>{
    dbase.find("minemenu",{},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
//点击我的菜单对应的菜单
router.post("/getmidmenu",(req,res)=>{
    dbase.find("minemenu",{query:req.body},(err,data)=>{
        if(err) throw err;
        res.send(data) 
    })
})
module.exports = router;