<template>
  <div class="my">
    <div id="header">
      个人中心
    </div>
    <!-- 头部 -->
    <div class="one">
      <dl>  
        <dt>
          <img src="../assets/wode.png" alt />
        </dt>
        <dd>
          <p>昵称</p>
          <p>我的积分:0</p>
        </dd>
      </dl>
    </div>
    <!-- 订单进入接口 -->
    <div class="two">
      <van-cell title="全部订单" is-link value="查看全部订单" />
    </div>
    <!-- 收货中心 -->
    <ul class="three">
      <li>
        <van-icon name="balance-pay" />
        <p>待支付</p>
      </li>
      <li>
        <van-icon name="logistics" />   
        <p>待收货</p>
      </li>
      <li>
        <van-icon name="flower-o" />
        <p>待评价</p>
      </li>
    </ul> 
    <!-- 灰色背景 -->
    <div class="hei"></div> 
    <!-- 中心内容 -->
    <div class="four">
        <van-cell title="个人资料" is-link to="#" />
        <van-cell title="收货地址" is-link to="#" />
        <van-cell title="绑定手机" is-link to="#" />
        <van-cell title="修改密码" is-link to="#" />
        <van-cell title="我的收藏" is-link to="#" />
    </div> 
    <!-- <van-button type="primary" block></van-button> -->
    <van-button type="danger" block to="/login">登录 / 注册</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}

html,body{
   overflow-x: hidden !important;}
#header {
  width: 100%;
  text-align: center;
  position: fixed;
  top:0;
  left:0;
  /* border:1px solid #f00; */
  line-height: 40px;
  border-bottom:1px solid #eee;
  letter-spacing: 0.5px; 
  z-index: 100;
  background: #fff;
}
.one {
  width: 100%;
  /* border: 1px solid #000; */
  margin-top:40px; 
  width: 100%;
  height: 150px;
  background: url("../assets/mybg.7627611d.png") no-repeat;
  background-size: cover;
  position: relative;
}
.one dl {
  /* border: 1px solid #f00; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 20px;
}
.one dl img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.one dd {
  margin-left: 20px;
  line-height: 30px;
}
.one dl p {
  font-size: 12px;
  color: #fff;
}
.two {
  padding: 8px 10px;
  border-bottom: 1px solid #ccc;
}
.van-cell__value span {
  font-size: 12px;
  color: #333;
}
.van-icon-arrow:before {
  font-size: 12px;
  margin-top: -1px;
}
.three{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 10px 0px;
}
.three li {
    width: 30%;
}
.van-icon-balance-pay:before,.van-icon-logistics:before,.van-icon-flower-o:before{
    font-size:30px; 
    color: #f00;
}
.three p{
    font-size:12px; 
}
.hei{
    width: 100%;
    height: 15px;
    background: #ddd;
}
.four{
  padding: 0px 15px;
}
.four .van-cell--clickable{
    margin: 20px 0px;
}
.four .van-cell--clickable span{
    /* padding: 5px 10px; */
    line-height: 30px;
    font-size:16px; 
}
.van-button::before{
  margin-bottom:60px; 
  color: #f00
}
</style>