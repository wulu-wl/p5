<template>
  <div>
    <!-- 详情页面 -->
    <!-- 头部导航 -->
    <div class="top">
      <router-link to="/">&lt;</router-link>
      <van-tabs v-model="active">
        <van-tab title="商品"></van-tab>
        <van-tab title="详情"></van-tab>
        <van-tab title="评价"></van-tab>
      </van-tabs>
      <router-link to="/car">
        <van-icon name="cart-o" />
      </router-link>
    </div>
    <!-- 轮播图 -->
    <div :class="active==0?'lunbo show':'noshow'">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播详情 -->
    <div :class="active==0?'jieshao show':'noshow'">
      <p>{{data.title}}</p>
      <span>￥{{data.price}}</span>
      <p>
        <i>运费{{data.freight}}</i>
        <i>月销量{{data.sales}}件</i>
      </p>
    </div>
    <!-- 中间背景 -->
    <div :class="active==0?'hei show':'noshow'"></div>
    <!-- 商品评价 -->
    <div :class="active==2||active==0?'pingjia show':'noshow'">
      <p>商品评价(22)</p>
      <ul>
        <li v-for="(item,index) in  pl" :key="index">
          <p>
            <img :src="item.head" alt />
            <span>{{item.nickname}}</span>
          </p>
          <p>{{item.content}}</p>
          <p>{{item.times}}</p>
          <!-- 2018-10-15 14:29:29 -->
          <!-- <p>{{time|myTime("-",":")}}</p> -->
        </li>
      </ul>
      <van-button plain type="primary" @click="jzgd">加载更多评论</van-button>
    </div>
    <!-- 商品详情 -->
    <div :class="active==1?'bodys show':'noshow'">
      <div v-html="this.bodys"></div>
    </div>
    <!-- 商品规格 -->
    <div class="gg" v-show="xianshi">
      <!-- X点击取消 -->
        <p class="qx" @click="qx">×</p>
        <!-- 商品信息 -->
        <dl>
          <dt><img :src="images[0]" alt=""></dt>
          <dd>
            <p>{{data.title}}</p>
            <p><span>￥{{data.price}}</span> <span>商品编码:{{data.gid}}</span></p> 
          </dd>
        </dl>
        <!-- 颜色 尺寸-->
        <div class="yanse" >
          <p>{{spgg1.title}}</p>
          <ul>
            <li  
            ref="yanse"
             v-for="(item1,index1) in spgg1.values"
             :key="index1"
             @click="tabcolor11(index1)"
             :class="tabcolor1==index1?'ggcolor':''"
             >{{item1.value}}</li>
          </ul>
        </div>
        <div class="yanse" >
          <p>{{spgg2.title}}</p>
          <ul>
            <li  
              ref="chima"
             v-for="(item,index) in spgg2.values"
             :key="index"
             @click="tabcolor22(index)"
             :class="tabcolor2==index?'ggcolor':''"
             >{{item.value}}</li>
          </ul>
        </div>
        <div class="num" >
            <p>购买数量</p>
            <div>
             <span @click="jian">-</span>
              <span>|</span>
              <span ref="num1">0</span>
              <span>|</span>
              <span  @click="jia">+</span>
            </div>
        </div>
        <div class="fotter">
          <router-link to="/car11">
            <van-button type="danger" @click="add1">确定</van-button>
          </router-link>
        </div>
    </div>
    <!-- 底部 收藏 加入购物车 -->
    <div class="bottom">
      <van-button type="default">收藏</van-button>
      <van-button type="danger" @click="add">加入购物车</van-button>
    </div>
  </div>
</template>

<script>
import moment from "moment"; //引入时间格式
import { xq, xq_gg, pl,addp } from "../api/index";

export default {
  data() {
    return {
      xianshi: false,
      msg: "详情页面",
      active: 0,
      images: [],
      data: {},
      time: "",
      pl: [],
      bodys: "",
      spgg1: [],
      spgg2: [],
      tabcolor1:null,
      tabcolor2:null,
      shopcar:[],
      obj:{},
      num1:1
    };
  },
  mounted() {
    
    //路由传值  对应商品传过来的gid
    // console.log(this.$route.params.id)
    sessionStorage.setItem("gid", this.$route.params.id),
      //获取商品详情
      xq().then(res => {
        // console.log(res)
        this.images = res.data.data.images;
        // console.log(this.images)
        this.data = res.data.data;
        // console.log(this.data)
        // 商品详细信息
        this.bodys = res.data.data.bodys;
        // console.log(this.bodys )
      }),
      pl().then(res => {
        // console.log(res)
        this.pl = res.data.data;
        // console.log(this.pl)
      });
      // console.log(this.$refs)
  },
  methods: {
    //加载更多
    jzgd() {
      this.active = 2;
    },
    //加入购物车事件
    add() {
      // 判断token 是否登录
      let token=localStorage.getItem("token")
      if(!token){
        alert("请先登录")
        this.$router.push({path:"/login"})
      }
      let gid = sessionStorage.getItem("gid");
      // console.log(gid);
      this.xianshi=true;
     
      xq_gg().then(res => {
        // console.log(res)
        this.spgg1=res.data.data[0];
        this.spgg2=res.data.data[1];
        // console.log(this.spgg)
      })
    },
    //点击X取消
    qx(){
       this.xianshi=false
    },
    //点击切换颜色
    tabcolor11(index1){
      // console.log(index1)
      this.tabcolor1=index1
      // console.log(this.$refs.yanse)
      let yanse=this.$refs.yanse;
      for(var i=0;i<yanse.length;i++){
        if(i==index1){
          // console.log(yanse[i].innerHTML)
          this.obj.yanse=yanse[i].innerHTML
        }
      }
      // console.log(this.obj)
    },
    tabcolor22(index){
      // console.log(index1)
      this.tabcolor2=index
      let chima=this.$refs.chima;
      for(var i=0;i<chima.length;i++){
        if(i==index){
          // console.log(yanse[i].innerHTML)
          this.obj.chima=chima[i].innerHTML
        }
      }
      // console.log(this.obj)
      // console.log(this.shopcar)
    },
    //加
    jia(e){
      this.$refs.num1.innerHTML=Number(this.$refs.num1.innerHTML)+1
      // console.log(this.$refs.num1.innerHTML)
      this.obj.num=this.$refs.num1.innerHTML
      // console.log(this.shopcar)
    },
    //减
    jian(e){
      if(Number(this.$refs.num1.innerHTML)==1){
        return this.$refs.num1.innerHTML=1
      }else{
        this.$refs.num1.innerHTML=Number(this.$refs.num1.innerHTML)-1
      }
      //  console.log(this.$refs.num1.innerHTML)
      this.obj.num=this.$refs.num1.innerHTML
    },
    //确定加入购物车
    add1(){
      
        this.obj.gid=this.data.gid
        this.obj.title=this.data.title
        this.obj.price=this.data.price
        this.obj.freight=this.data.freight
        this.obj.images=this.data.images[0]
        this.obj.checked=false
        this.obj.zj=''
        // console.log(this.obj)
        addp(this.obj).then(res=>{
          // console.log(res)
        })
    }

  }
};
</script>

<style  scoped>
/* 显示 */
.show {
  display: block;
}

/* 隐藏 */
.noshow {
  display: none;
}
/* 加入购物车时选择规格的颜色 */
.yanse ul .ggcolor{
  background: #fcb40a;
  color: #fff;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.top {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 10px;
}

.van-tabs--line {
  width: 70%;
  /* border: 1px solid #f00; */
}
.van-tabs__nav--line {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.top a {
  width: 10%;
  font-family: "黑体";
  font-weight: bold;
  font-size: 40px;
  color: #000;
}
.top a .van-icon-cart-o:before {
  font-size: 30px;
  margin-left: 20px;
}
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bottom button {
  width: 50%;
}
.van-button--default {
  background: #fcb40a;
  color: #fff;
}
.lunbo {
  margin-top: 50px;
  width: 100%;
}
.lunbo img {
  width: 100%;
}
.jieshao {
  width: 100%;
  background: #fff;
  padding: 10px 20px;
}
.jieshao > p {
  font-size: 14px;
  padding: 3px 0px;
}
.jieshao span {
  color: #f00;
  display: inline-block;
  padding: 10px 0px;
}
.jieshao p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 3px;
}
.jieshao i {
  font-style: normal;
  font-size: 10px;
  color: #ccc;
  line-height: 20px;
}
.hei {
  width: 100%;
  height: 30px;
  background: #efefef;
}
.box {
  height: 500px;
}
.pingjia {
  padding: 10px 20px;
}
.pingjia ul {
  margin-top: 20px;
}
.pingjia > p {
  color: #dedede;
  font-size: 16px;
}
.pingjia li p {
  font-size: 14px;
  line-height: 30px;
}
.pingjia li {
  margin: 15px 0px;
}
.pingjia li img {
  width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 50%;
  vertical-align: middle;
}
.pingjia li p:last-child {
  color: #ccc;
}
.van-button--plain.van-button--primary {
  margin: 10px;
  margin-left: 120px;
  padding: 0px 10px;
  color: #333;
  margin-bottom: 70px;
}
.bodys {
  margin-top: 50px;
  margin-bottom: 70px;
}
.gg{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-radius:10px 10px 0px 0px;
  border-top:1px solid #ccc;  
  z-index: 100;
}
.gg .qx{
  float: right;
  font-size: 20px;
  font-weight: bold;
  font-family:"黑体";
  padding: 3px 5px; 
}
.gg dl{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  border-bottom:1px solid #ccc; 
}
.gg dl dt{
  margin-right:20px; 
}
.gg dl img{
  width: 70px;
  height: 70px;
}
.gg dl dd{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}
.gg dl dd p{
  width: 100%;
}
.gg dl dd p:first-child{
  font-size: 12px;
}
.gg dl dd p:last-child{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.gg dl dd p:last-child span:first-child{
  color: #f00;
  font-size: 14px;
}
.gg dl dd p:last-child span:last-child{
  color: #ccc;
  font-size: 12px;
}
.yanse{
  width: 100%;
  padding: 10px;

}
.yanse ul{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top:10px;

}
.yanse ul li{
  min-width: 15%;
  background: #efefef;
  font-size: 12px;
  color: #333;
  border-radius: 8px;
  margin-right:10px; 
  padding: 3px 10px;
}
.num{
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}
.num div{
  border: 1px solid #ddd;
  padding: 3px 5px;
  border-radius:10px; 
}
.fotter {
  width: 100%;
  /* height: 100px; */
  border: 1px solid #f00;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.fotter button {
  width: 100%;
}
.fotter .van-button--default {
  background: #fcb40a;
  color: #fff;
}
</style>