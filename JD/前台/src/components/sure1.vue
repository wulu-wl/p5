<template>
  <div>
    <div class="header">
      <router-link to="/car11">&lt;</router-link>
      <van-nav-bar title="订单确认" />
    </div>
    <div class="dizhi" @click="adddizhi">
      <p>您的收货地址，点击添加收货地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p> 
      <div class="xian">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "确认订单"
    };
  },
  methods: {
    adddizhi() {
      this.$router.push("/adddizhi")
    }
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 10px;
  background: #fff;
}
.header a {
  width: 10%;
  font-family: "黑体";
  font-weight: bold;
  font-size: 40px;
  color: #000;
}
.header .van-hairline--bottom {
  width: 90%;
  padding-left: 80px;
}
.dizhi {
  width: 100%;
  min-height: 100px;
  text-align: center;
  line-height: 60px;
  margin-top: 50px;
  font-size: 14px;
  font-family: "宋体";
  position: relative;
}
.dizhi > div {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.dizhi > div > span:nth-child(odd) {
  border-bottom: 4px solid #fdcd4d;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}
.dizhi > div > span:nth-child(even) {
  border-top: 4px solid #84614d;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}
.dizhi span{
  display: inline-block;
    width: 6%;
    margin-left: 1%;
    margin-right: 1%;
}
</style>