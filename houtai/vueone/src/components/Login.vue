<template>
  <div>
    <h1>后台管理系统</h1>
    <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="pass">
        <el-input type="text" v-model="userName" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="pass" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="denglu">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import {logins} from '../api/config.js'
export default {
  name: "login",
  data() {
    return {
      userName: "",
      pass: ""
    }
  },
  methods:{
      denglu(){
         logins({
             userName:this.userName,
             pass:this.pass}).then(res=>{
            //  console.log(res)
            if(res.data.state==0){
                alert(res.data.reason)
            }else{
                alert(res.data.success)
                sessionStorage.setItem("uid",res.data.uid)
                sessionStorage.setItem("token",res.data.token )
                this.$router.push('/home')
            }
         })
      }
  }
};
</script>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
}
.el-form-item {
  width: 50%;
  margin: 100px auto;
}
.el-button {
  width: 100px;
  display: inline-block;
  margin-left: 40%;
  letter-spacing: 3px;
  font-size: 20px;
}
</style>