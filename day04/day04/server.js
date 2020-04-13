const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const router=require("./router")
//跨域
app.all("*",function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();  
});
app.use(bodyParser.urlencoded({
    extended: false
}))
app.listen("8080",()=>{
    console.log("欢迎来到8080")
})
app.use("/",router)

