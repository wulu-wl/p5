<template>
  <div>
    <div class="header">
      <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
      <p class="placeholder1">通过手机号码修改密码</p>
    </div>
    <div class="login">
      <van-cell-group>
        <van-field v-model="tel" label="手机号" placeholder="请输入手机号" required />
        <van-field v-model="code " label="验证码" placeholder="请输入验证码 " required />
        <span class="code2" @click="code3">{{code1}}</span>
        <van-field
          v-model="pass"
          :type="checked?'':'password'"
          label="新密码"
          placeholder="请输入新密码"
          required
        />
        <van-switch v-model="checked" />
      </van-cell-group>
      <van-button type="primary" block @click="sureUpd">确认修改</van-button>
    </div>
  </div>
</template>

<script>
import { Veri, sureupd } from "../api/api_router";
import md5 from "md5";
export default {
  data() {
    return {
      msg: "修改密码",
      tel: "",
      pass: "",
      checked: false,
      //验证码
      code: "",
      code1: ""
    };
  },
  methods: {
    //返回登录页面
    onClickLeft() {
      this.$router.push("/loginIn");
    },
    //确认修改
    sureUpd() {
      let code2 = sessionStorage.getItem("code1");
      //   console.log(code2);
      //   console.log(this.code);
      //   console.log(code2 == this.code);
      if (code2 == this.code) {
        sureupd({
          tel: this.tel,
          pass: md5(this.pass)
        }).then(res => {
          if (res.data.state == 0) {
            alert(res.data.reason);
          } else if (res.data.state == 1) {
            alert(res.data.reason);
            this.$router.push("/loginIn");
          }
        });
      } else {
        alert("验证码错误,请区分大小写");
        Veri().then(res => {
          // console.log(res)
          this.code1 = res.data;
          sessionStorage.setItem("code1", res.data);
        });
      }
    },
    code3() {
      Veri().then(res => {
        // console.log(res)
        this.code1 = res.data;
        sessionStorage.setItem("code1", res.data);
      });
    }
  },
  mounted() {
    Veri().then(res => {
      // console.log(res)
      this.code1 = res.data;
      sessionStorage.setItem("code1", res.data);
    });
  }
};
</script>

<style  scoped>
* {
  box-sizing: border-box;
}
.van-nav-bar__text {
  color: #ff7474;
}
.van-icon-arrow-left:before {
  content: "\F008";
  color: #ff7474;
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
.van-button--primary {
  background: #ff7474;
  width: 80%;
  margin: 15px auto;
  border: none;
}
.placeholder1 {
  width: 100%;
  padding: 5px 15px;
  font-size: 12px;
}
.van-hairline--top-bottom > div:nth-child(2) {
  width: 60%;
  /* border: 1px solid #f00; */
}
.code2 {
  float: right;
  margin-top: -45px;
  margin-right: 10px;
  width: 100px;
  height: 44px;
  border: 1px solid #f0f;
  text-align: center;
  line-height: 44px;
  letter-spacing: 5px;
  font-size: 24px;
}
</style>