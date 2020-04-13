<template>
  <div>
    <div class="top">
      <router-link to="/my">&lt;</router-link>
      <p>登录页面</p>
    </div>
    <van-cell-group>
      <van-field
        v-model="cellphone"
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
        required
      />
      <van-field
        v-model="password"
        :type="checked?'':'password'"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-switch v-model="checked" />
    </van-cell-group>
    <van-button type="primary" block @click="login">登录</van-button>
  </div>
</template>

<script>
import {Login} from '../api/index'
export default {
  data() {
    return {
      cellphone: "",
      password: "",
      checked: false
    };
  },
  methods: {
    login(){
      // console.log(this.cellphone)
      // console.log(this.password)
      Login({
        cellphone:this.cellphone,
        password:this.password
      }).then(res=>{
        console.log(res.data)
        localStorage.setItem("token",res.data.data.auth_token)
        localStorage.setItem("uid",res.data.data.uid)
      })
    }
  },
  
};
// 18435176818
</script>

<style scoped>
.top {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
.top a {
  font-size: 20px;
  font-family: "黑体";
  font-weight: bold;
  width: 10%;
}
.top p {
  width: 70%;
  text-align: center;
}
.van-hairline--top-bottom {
  margin-top: 50px;
  position: relative;
}
.van-hairline--top-bottomdiv {
  width: 100%;
  height: 50px;
}
.van-switch {
  position: absolute;
  right: 10px;
  bottom: 5px;
}

.van-button--primary{
  background: #f00;
  width: 80%;
  margin: 10px auto;
}
</style>