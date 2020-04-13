<template>
    <div class="login">
        <header>
            <h2>登录页面</h2>
        </header>
        <div class="con">
            用户名: <input type="text"  placeholder="用户名" v-model="pname"> <br>
            密&nbsp;&nbsp;&nbsp;码: <input type="text"  placeholder="密码" v-model="password"> <br>
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                msg: "登录页面",
                pname:"",
                password:'',
            }
        },
        methods:{
            login(){
                   this.shopid= this.$route.params.id;
                    let params=new URLSearchParams();
                    params.append("pname",this.pname)
                    params.append("password",this.password)
                axios({
                    method:'post',
                    url:"http://localhost:8000/login",
                    data:params
                }).then((res)=>{
                    // console.log(res.data.state)
                    if(res.data.state==0){
                        alert(res.data.reson)
                    }else{
                        alert(res.data.success)
                        sessionStorage.setItem('uid',res.data.uid)
                        sessionStorage.setItem("token",res.data.token)
                        //登录成功之后进行跳转页面
                        this.$router.push({ path: "/my" });
                    }
                })
            }
        }
    }
</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #FFCF00;
    text-align: center;
    color: aliceblue;
    line-height: 50px;
}
.con{
    width: 100%;
    margin-top:50px;
    padding: 20px 10px;
    text-align: center; 

}
.con input{
    margin: 10px;
    width: 150px;
    /* height: 30px; */
    vertical-align: middle;
    border-radius:10px;
    padding:5px 10px;
    border: 1px solid #ccc;
    outline: none;
}
.con  button{
    width: 50px;
    height: 30px;
    border: none;
    background: #FFCF00;
    color: #fff;
    border-radius:10px; 
    outline: none;
}
</style>