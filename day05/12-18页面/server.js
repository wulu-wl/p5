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
app.use(express.static("./"))
app.listen("8000",()=>{
    console.log("欢迎来到8000")
})
app.use("/",router)

