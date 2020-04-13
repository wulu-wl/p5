<template>
  <div>
    <div class="header">
      <van-nav-bar
        title="注册美食杰"
        left-text="返回"
        right-text="登录"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="title">手机号注册</div>
    <div class="login">
 <van-cell-group>
      <van-field
            v-model="tel"
            label="手机号"
            placeholder="请输入手机号"
            required
        />
      <van-field
        v-model="pass"
        :type="checked?'':'password'"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-switch v-model="checked" />
    </van-cell-group>
    <van-button type="primary" block @click="login">注册</van-button>
    </div>
   
  </div>
</template>

<script>
import {Login} from '../api/api_router'
import md5 from 'md5'
export default {
  data() {
    return {
      msg: "登录页面",
      tel:"",
      pass:"",
      checked:false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/sc");
    },
    onClickRight() {
      this.$router.push("/loginIn");
    },
    login(){
        let reg=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        if(!this.tel==''||!this.pass==''){
            if(reg.test(this.tel)){
                Login({
                  tel:this.tel,
                  pass:md5(this.pass) 
                }).then(res=>{
                  // console.log(res)
                  if(res.data.n==1&&res.data.ok==1){
                    alert(res.data.reason)
                   this.$router.push("/loginIn");
                  }else{
                    alert(res.data.reason)
                    this.$router.push("/loginIn");
                  }
                })
                return true
            }else{
                // console.log(4)
                alert("请输入正确手机号")
                return false
            }
        }else{
            //  console.log(2)
            alert("手机号或者密码不为空")
        }
    }
  }
};
</script>

<style  scoped>
.van-nav-bar__text {
  color: #ff7474;
}
.van-icon-arrow-left:before {
  content: "\F008";
  color: #ff7474;
}
*{
    box-sizing: border-box;
}

.title {
  width: 95%;
  color: #fff;
  background: #ff7474;
  text-align: center;
  margin: 10px 10px;
  padding: 5px 0px;
  letter-spacing: 2px;
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
  background: #ff7474;
  width: 80%;
  margin: 15px auto;
  border: none;
}
</style>