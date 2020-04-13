const jwt =require("jsonwebtoken");
const key="今天心情好不好?"
module.exports={
    //签发token
    sign(payload,time){
        return jwt.sign(payload,key,{expiresIn:time});
    },
    //验证token
    verify(token,callback){
        jwt.verify(token,key,callback);
    }
}
