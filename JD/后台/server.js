var express=require("express");
var app=express();
var bodyParser=require("body-parser")
var js_md5=require('js-md5')
var api=require('./router/api')
var admin=require('./router/admin')
app.all('*', function(req, res, next) {             //设置跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static("./"))
//  app.use('/upload',express.static('upload'))
 //开放路由
 app.use('/api',api)
 //权限路由
 app.use('/admin',admin)
//  console.log(js_md5('123456'))  //md5密码加密    密码12345
 app.listen("4000",function () { 
     console.log("hi  4000 JD ")
})
