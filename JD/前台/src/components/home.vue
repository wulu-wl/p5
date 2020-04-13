<template>
  <div>
    <div class="top">
      <router-link to="/fenlei/492" class="fenlei"></router-link>
      <div class="top_one">
        
        <img src="../assets/search.png" alt />
        <router-link to="/search"><input type="search" placeholder="请输入宝贝名称" /></router-link>
        
      </div>
      <router-link to="/my">
        <van-icon name="contact" />
      </router-link>
    </div>
    <div class="lunbo">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="daohang">
      <ul>
        <li v-for="item in daohang" :key="item.cid" @click="fl(item.cid)">
          <img :src="item.image" />
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <!-- 潮流女装 品牌男装 电脑办公页面 -->
    <div class="context">
        <!-- 潮流女装 -->
      <div class="clnz">
        <div class="clnz_top">
          <div class="x"></div>
          <span>{{clnz.title}}</span>
          <div class="x"></div>
        </div>
        <div class="clnz_center_top">
            <div class="clnz_center_top_left" v-for="item in clnz_item_one" :key="item.gid" @click="xq(item.gid)">
                <h3>{{item.title}}</h3>
                <p>精品打折 <span>{{item.price}}元</span> </p>
                <img :src="item.image">
            </div>
            <div class="clnz_center_top_right">
                <dl v-for="item in clnz_item_two" :key="item.gid" @click="xq(item.gid)">
                    <dd>
                        <p>{{item.title}}</p>
                        <span>品质精挑</span>
                    </dd>
                    <dt>
                        <img :src="item.image" alt="">
                    </dt>
                </dl>
            </div>
        </div>
        <ul class="clnz_center-bottom">
            <li v-for="item in clnz_item_three" :key="item.gid" @click="xq(item.gid)">
                <p>{{item.title}}</p>
                <img :src="item.image" alt="">
                <span>￥{{item.price}}</span>
                <i>￥500</i>
            </li>
        </ul>
      </div>
      <!--  品牌男装-->
      <div class="ppnz">
        <div class="clnz_top">
          <div class="x"></div>
          <span>{{ppnz.title}}</span>
          <div class="x"></div>
        </div>
        <div class="clnz_center_top">
            <div class="clnz_center_top_left" v-for="item in ppnz_item_one" :key="item.gid" @click="xq(item.gid)">
                <h3>{{item.title}}</h3>
                <p>精品打折 <span>{{item.price}}元</span> </p>
                <img :src="item.image">
            </div>
        </div>
        <ul class="clnz_center-bottom">
            <li v-for="item in ppnz_item_two" :key="item.gid" @click="xq(item.gid)">
                <p>{{item.title}}</p>
                <img :src="item.image" alt="">
                <span>￥{{item.price}}</span>
                <i>￥500</i>
            </li>
        </ul>
      </div>
      <!-- 电脑办公 -->
       <div class="dnbg">
        <div class="clnz_top">
          <div class="x"></div>
          <span>{{dnbg.title}}</span>
          <div class="x"></div>
        </div>
        <div class="clnz_center_top">
            <div class="clnz_center_top_left" v-for="item in dnbg_item_one" :key="item.gid" @click="xq(item.gid)">
                <h3>{{item.title}}</h3>
                <p>精品打折 <span>{{item.price}}元</span> </p>
                <img :src="item.image">
            </div>
            <div class="clnz_center_top_right">
                <dl v-for="(item,index) in dnbg_item_two" :key="index" @click="xq(item.gid)">
                    <dd>
                        <p>{{item.title}}</p>
                        <span>品质精挑</span>
                    </dd>
                    <dt>
                        <img :src="item.image" alt="">
                    </dt>
                </dl>
            </div>
        </div>
        <ul class="clnz_center-bottom">
            <li v-for="item in dnbg_item_three" :key="item.gid" @click="xq(item.gid)">
                <p>{{item.title}}</p>
                <img :src="item.image" alt="">
                <span>￥{{item.price}}</span>
                <i>￥500</i>
            </li>
        </ul>
      </div>
      <!-- <div class="box"></div> -->
    </div>
    <!-- 为您推荐 -->
    <div class="tuijian">
        <div class="tuijian_top">
            <div></div>
            <div>
                <img src="../assets/recom.1a6ce729.png" alt="">
                <h3>为您推荐</h3>
            </div>
            <div></div>
        </div>
        <div class="tuijian_con">
            <ul>
                <li v-for="item in wntj" :key="item.gid" @click="xq(item.gid)">
                    <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>￥{{item.price}}</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { Lunbo, daohang, clnz ,ppnz,wntj} from "../api/index";
export default {
  name: "vue-scroll",
  data() {
    return {
      car:[],
      obj:{},
      images: [],
      daohang: [],
      //潮流女装
      clnz: {},
      clnz_item:[],
      clnz_item_one:[],
      clnz_item_two:[],
      clnz_item_three:[],
      //品牌男装
      ppnz: {},
      ppnz_item:[],
      ppnz_item_one:[],
      ppnz_item_two:[],
      //电脑办公
      dnbg:{},
      dnbg_item:[],
      dnbg_item_one:[],
      dnbg_item_two:[],
      dnbg_item_three:[],
      //为您推荐
      wntj:[],
    };
  },
  mounted() {
    //鼠标滚轮事件
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    //轮播图
    Lunbo().then(res => {
      //   console.log(res)
      let arr = res.data.data;
      //   console.log(arr)
      //   console.log(this.lunbo)
      for (var i = 0; i < arr.length; i++) {
        this.images.push(arr[i].image);
      }
      //   console.log(this.images)
    });
    //导航接口
    daohang().then(res => {
      // console.log(res.data)
      this.daohang = res.data.data;
      // console.log(this.daohang)
    }),
      //潮流女装 品牌男装 电脑办公数据获取
      clnz().then(res => {
        // console.log(res)
        //潮流女装
        this.clnz = res.data.data[0];
        // console.log(this.clnz);
        this.clnz_item=res.data.data[0].items
        // console.log(this.clnz_item)
        this.clnz_item_one=this.clnz_item.slice(0,1)
        // console.log(this.clnz_item_one)
        this.clnz_item_two=this.clnz_item.slice(1,3)
        // console.log(this.clnz_item_two)
        this.clnz_item_three=this.clnz_item.slice(3)
        // console.log(this.clnz_item_three)
        //品牌男装
        this.ppnz=res.data.data[1]
         // console.log(this.clnz);
        this.ppnz_item=res.data.data[1].items
        // console.log(this.clnz_item)
        this.ppnz_item_one=this.ppnz_item.slice(0,2)
        // console.log(this.ppnz_item_one)
        this.ppnz_item_two=this.ppnz_item.slice(2)
        // console.log(this.clnz_item_two)
        //电脑办公
        this.dnbg=res.data.data[2]
        // console.log(this.dnbg);
        this.dnbg_item=res.data.data[2].items
        // console.log(this.dnbg_item)
        this.dnbg_item_one=this.dnbg_item.slice(0,1)
        // console.log(this.clnz_item_one)
        this.dnbg_item_two=this.dnbg_item.slice(1,3)
        // console.log(this.clnz_item_two)
        this.dnbg_item_three=this.dnbg_item.slice(3)
        // console.log(this.clnz_item_three)
      });
      //为您推荐
      wntj().then(res=>{
        //   console.log(res)
          this.wntj=res.data.data;
          // console.log( this.wntj)
      })

      
  },
  methods: {
    handleScroll: function() {
      let scrolltop = document.documentElement.scrollTop;
      let top = document.querySelector(".top");
      if (scrolltop == 0) {
        top.style.background = "rgba(255, 255, 255, 0)";
      } else {
        top.style.background = "#f00";
      }
    },
    //商品跳详情页面
    xq(gid){
      // console.log(gid)
      this.$router.push({path:"/xq/"+gid})
    },
    //分类跳转
    fl(cid){
      console.log(cid)
      this.$router.push({path:"/fenlei/"+cid})
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
.top {
  width: 100%;
  height: 50px;
  /* border: 1px solid #f00; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0);
  /* background: #fff;
    opacity: 0.3; */
}
.top .fenlei{
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
}
.top .top_one {
  position: relative;
  width: 70%;
  /* border: 1px solid #ccc; */
}
.top img {
  position: absolute;
  left: 4px;
  top: 0px;
  width: 25px;
  height: 25px;
}
.top_one  a input{
  width: 96%;
  padding: 2px 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  /* background:#eee; */
  background-color: hsla(0, 0%, 100%, 0.5);
}
/* .top_one  input {
  width: 100%;
  padding: 2px 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: hsla(0, 0%, 100%, 0.5);
} */
.top>a {
  width:10%;
  color: #000;
  display: block;
  /* border: 1px solid #f00; */
}
input::-webkit-input-placeholder {
  color: #fff;
}
.van-icon-search:before {
  position: absolute;
  left: 50px;
  top: 10px;
}
.van-icon-contact:before {
  width: 20%;
  font-size: 25px;
}
.lunbo {
  width: 100%;
}
.lunbo img {
  width: 100%;
}
.box {
  height: 1000px;
  width: 100%;
}
.daohang {
  margin-top: -3px;
  width: 100%;
  height: 100px;
  background: #ddd;
  padding: 10px 0px;
}
.daohang ul {
  display: flex;
  height: 100%;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.daohang p {
  font-size: 14px;
}
.daohang ul img {
  width: 50px;
  height: 50px;
}
.clnz_top {
  width: 120px;
  /* border: 1px solid #f00; */
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #f00;
}
.clnz_top .x {
  width: 20px;
  height: 1px;
  background: #f00;
}
.clnz_center img{
    width: 100px;
    height: 30px;
}
.clnz_center div:nth-child(1){
    width: 50%;
    height: 300px;
}
.clnz_center_top {
    width: 100%;
    height: 170px;
    border-top:1px solid #ccc; 
    border-bottom:1px solid #ccc; 
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.clnz_center_top_left{
    border-right:1px solid #ccc; 
}
.clnz_center_top_left,.clnz_center_top_right{
    width: 50%;
}
.clnz_center_top_left img{
    width: 100%;
    height: 100px;
}
.clnz_center_top_right dl:first-child{
    border-bottom:1px solid #ccc; 
}
.clnz_center_top_right dl{
    padding-right:10px; 
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.clnz_center_top_right dl dd{
    margin-right:20px; 
}
.clnz_center_top_right dl img{
    width: 60px;
    height: 60px;
}
.clnz_center_top_right dd p{
    font-size: 12px;
    font-weight: bolder;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    /* 显示文字行数。 */
    -webkit-line-clamp:1;  
    overflow:hidden
}
.clnz_center_top_right dd span{
    font-size: 10px;
}
.clnz_center_top_left{
    padding-left:10px; 
}
.clnz_center_top_left h3{
    width: 100%;
    font-size: 14px;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    /* 显示文字行数。 */
    -webkit-line-clamp:1;  
    overflow:hidden
}
.clnz_center_top_left p{
    padding: 10px 0px;
    font-size: 14px;
    color: #f00;
}
.clnz_center_top_left span{
    display: inline-block;
    color: #fff;
    background: #f00;
    margin-left:20px; 
    font-size: 12px;
    border-radius: 10px;
}
.clnz_center-bottom{
    width: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    text-align: center;
    border-bottom:1px solid #ccc; 
}
.clnz_center-bottom span{
    color: #f00;
    display: block;
}
.clnz_center-bottom p{
    font-size:12px;
    font-weight: bold; 
    display:-webkit-box;
    -webkit-box-orient:vertical;
    /* //显示文字行数。 */
    -webkit-line-clamp:1;  
    overflow:hidden;
    padding-bottom:3px; 
}
.clnz_center-bottom li{
    padding: 2px 3px;
    width: 25%;
    border-right: 1px solid #ccc;
}
.clnz_center-bottom i{
    list-style:none;
    font-style: normal;
    color: #ccc;
    text-decoration:line-through; 
    font-size:12px;
}
.clnz_center-bottom li img{
    width: 70px;
    height: 70px;
}
.clnz_center-bottom li:last-child{
    border:none;
}
.tuijian{
    width: 100%;
    height: auto;
    /* border: 1px solid #f00; */
    background: #EFEFEF;
    /* background: #ccc; */
}
.tuijian_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px; 
    padding-top: 15px;
}
.tuijian_top div:nth-child(2){
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
}
.tuijian_top div:first-child{
    width: 120px;
    height: 1px;
    background: #D4D4D4;
}
.tuijian_top div:last-child{
    width: 120px;
    height: 1px;
    background: #D4D4D4;
}
.tuijian_top  img{
    width: 20px;
    height: 20px;
}
.tuijian_con {
    margin-top:20px; 
}
.tuijian_con ul {
    display: flex;
    flex-wrap:wrap; 
    justify-content: space-around;
    /* align-items: center; */
    text-align: center;
}

.tuijian_con ul li{
    width: 46%;
    background: #fff;
    margin: 3px 0px;
    padding: 4px 0px;
}
.tuijian_con ul li p{
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding: 0px 10px;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
}
.tuijian_con ul li span{
    width: 100%;
    display: inline-block;
    text-align: left;
    color: #f00;
    padding: 3px 10px;
}
.tuijian_con img{
    width: 100px;
    height: 100px;
}
.tuijian_con ul li:last-child{
    margin-bottom:70px; 
}
.tuijian_con ul li:nth-child(11){
    margin-bottom:70px; 
}

</style>