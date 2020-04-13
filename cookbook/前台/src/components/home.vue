<template>
  <div>
    <header>
      <!-- 顶部的搜索 -->
      <a href="https://m.meishij.net/search.php">
        <span class="i"></span>搜索百万免费菜谱
      </a>
    </header>
    <!-- 标题 -->
    <h3 class="a1">今日热门</h3>
    <!-- 轮播图 -->
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 需要定在轮播图上的文字和头像 -->
    <!-- <h4 class="t">红烧牛肉</h4>
    <div class="ding">
      <img class="tu" src="https://s1.c.meishij.net/images/default/tx2_8.png" />
      <i>美食姐姐</i>
    </div>-->
    <!-- <h4 class="t">红烧牛肉</h4>
    <div class="ding">
      <img class="tu" src="https://s1.c.meishij.net/images/default/tx2_8.png" />
      <i>美食姐姐</i>
    </div>-->
    <!-- <h4 class="t">红烧牛肉</h4>
    <div class="ding">
      <img class="tu" src="https://s1.c.meishij.net/images/default/tx2_8.png" />
      <i>美食姐姐</i>
    </div>-->
    <!-- 标题 -->
    <h3 class="a2">为你推荐</h3>
    <!-- 大标题下面的小图标 -->
    <div class="biao">
      <div class="b1">
        <span
          style="background:url(https://st-cn.meishij.net/p2/20191126/20191126213600_379.png) center no-repeat;background-size:cover;"
        ></span>
        <a href="https://m.meishij.net/huodong/jifenhuangou.php?from=wap">积分换购</a>
      </div>
      <div class="b2">
        <span
          style="background:url(https://st-cn.meishij.net/p2/20191126/20191126213600_527.png) center no-repeat;background-size:cover;"
        ></span>
        <a href="http://localhost:8080/#/foodlist">食材大全</a>
      </div>
      <div class="b3">
        <span
          style="background:url(https://st-cn.meishij.net/p2/20191024/20191024173548_934.png) center no-repeat;background-size:cover;"
        ></span>
        <a href="http://localhost:8080/#/cooktype">菜谱分类</a>
      </div>
      <div class="b4">
        <span
          style="background:url(https://st-cn.meishij.net/p2/20191024/20191024173548_460.png) center no-repeat;background-size:cover;"
        ></span>
        <a href="http://localhost:8080/#/weekrank">本周流行</a>
      </div>
      <div class="b5">
        <span
          style="background:url(https://st-cn.meishij.net/p2/20191024/20191024173548_337.png) center no-repeat;background-size:cover;"
        ></span>
        <a href="#">视频菜谱</a>
      </div>
    </div>
    <!-- 小标题 -->
    <div class="mrsc">
      <h2>每日三餐</h2>
      <!-- tab切换上-->
      <ul class="qh">
        <!-- 切换 -->
        <li v-for="(item,index) in three" :key="index" @click="threetab(index)">{{item.title}}</li>
      </ul>
      <!-- 切换下 -->
      <div class="qhx1">
        <!-- 第一个切换下面的两个盒子 -->
        <a href="#" v-for="(item1,index1) in threearr.children" :key="index1">
          <img :src="item1.image" class="image" />
          <p class="text">{{item1.title}}</p>
          <div class="xbt">
            <p class="wen">养</p>
            <p class="des">{{item1.details}}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="djdzz">
      <!-- 大家都在做的盒子 -->
      <h2>大家都在做</h2>
      <ul class="toggletop">
        <!-- tab切换上 -->
        <li v-for="(item,index) in every" :key="index" @click="everytab(index)">{{item.title}}</li>
      </ul>
      <div class="toggledown">
        <!-- tab切换下面的页面 -->
        <div class="cont-fen">
          <div v-for="(item1,index1) in everyarr.children" :key="index1">
            <img :src="item1.image" />
            <div class="cont-fen_bottom">
              <div class="infow">
                <div class="title">{{item1.title}}</div>
                <div class="yyw">
                  <div class="t">养</div>
                  <div class="des">{{item1.details}}</div>
                </div>
              </div>
              <div class="userw">
                <div class="avatar">
                  <img :src="item1.imagesmall" class="img" />
                  <div class="n">{{item1.pname}}</div>
                </div>
                <div class="view">
                  <div class="i"></div>
                  {{item1.psee}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  homeswiper,
  homefoodlist,
  getthree,
  geteverydo
} from "../api/api_router";
export default {
  data() {
    return {
      images: [],
      three: [],
      threearr: [],
      every: [],
      everyarr: []
    };
  },
  mounted() {
    //首页轮播图
    homeswiper().then(res => {
      //  console.log(res.data)
      let arr = res.data.map((item, index) => {
        return item.image;
      });
      this.images = arr;
    });
    //首页三餐
    getthree().then(res => {
      //  console.log(res)
      this.three = res.data;
      this.threearr = res.data[0];
      //  console.log(this.three)
    });
    //大家都在做
    geteverydo().then(res => {
      //  console.log(res)
      this.every = res.data;
      this.everyarr = res.data[0];
      console.log(this.everyarr);
    });
  },
  methods: {
    threetab(index) {
      this.threearr = this.three[index];
    },
    everytab(index) {
      this.everyarr = this.every[index];
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
}
/* 左侧栏字体颜色的更改 */
.el-tree-node__label{
  color:#f00
}
header {
  width: 100%;
  height: 72px;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #fff;
  z-index: 1000;
}
header a {
  height: 40px;
  display: block;
  background: #f5f5f5;
  border-radius: 4px;
  margin: 16px;
  font-size: 16px;
  color: #999;
  line-height: 40px;
}
header a .i {
  display: inline-block;
  vertical-align: top;
  background: url(https://s1.c.meishij.net/wap6/images/topsearchicon@3x.png)
    center no-repeat;
  background-size: 16px 16px;
  height: 16px;
  width: 16px;
  margin: 12px 8px 0px 16px;
}
.a1 {
  margin-top: 75px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  line-height: 36px;
}
.van-swipe {
  margin-top: 10px;
}
.van-swipe img {
  width: 95%;
  height: 290px;
  border-radius: 5px;
  margin-left: 10px;
}
.t {
  font-size: 20px;
  font-weight: 600;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  color: #f5f5f5;
}
.tu {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
i {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: 30px;
  display: inline-block;
  vertical-align: top;
  max-width: 60%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 10px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
}
.a2 {
  margin-top: 15px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  line-height: 36px;
}
.biao {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
}
.biao .b1,
.b2 {
  width: 42%;
  height: 42px;
  line-height: 42px;
  background: #fff;
  border-radius: 21px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.b3,
.b4,
.b5 {
  margin-top: 25px;
  width: 26%;
  height: 42px;
  line-height: 42px;
  background: #fff;
  border-radius: 21px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.biao .b1 {
  background: #fe9b95;
  box-shadow: 0px 0px 12px rgba(255, 155, 149, 0.5);
}
.biao .b1 a {
  color: #fff;
}
.biao a {
  font-size: 13px;
  color: #333;
  line-height: 42px;
  display: inline-block;
  vertical-align: top;
  font-weight: 600;
}
.biao span {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: 12px;
}
/* .biao .b1,.b2,.b3,.b4,.b5{
  display: flex;
} */
.mrsc h2 {
  font-size: 16px;
  font-weight: 600;
  color: #999;
  line-height: 22px;
  margin: 15px 15px;
}
.mrsc ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #666;
}
.qhx1,
.qhx2,
.qhx3,
.qhx4,
.qhx5 {
  box-sizing: border-box;
  padding: 0px 1.6vw;
  width: 47.33333333vw;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
}
.qhx1 a,
.qhx2 a,
.qhx3 a,
.qhx4 a,
.qhx5 a {
  display: inline-block;
  vertical-align: top;
  width: 44.666666666vw;
  position: relative;
}
.qhx1 .image,
.qhx2 .image,
.qhx3 .image,
.qhx4 .image,
.qhx5 .image {
  display: block;
  height: 59.555555vw;
  width: 44.6666666vw;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0);
  background-color: #f8f8f8;
}
.qhx1 .text,
.qhx2 .text,
.qhx3 .text,
.qhx4 .text,
.qhx5 .text {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  display: block;
  height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 28px;
  padding: 12px 0px 2px;
}
.qhx1 .xbt,
.qhx2 .xbt,
.qhx3 .xbt,
.qhx4 .xbt,
.qhx5 .xbt {
  background: #fff2f2;
  border-radius: 2px;
  position: relative;
  margin: 8px 16px 0px 0px;
  padding: 4px 6px 4px 6px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
}
.qhx1 .xbt .wen,
.qhx2 .xbt .wen,
.qhx3 .xbt .wen,
.qhx4 .xbt .wen,
.qhx5 .xbt .wen {
  font-size: 8px;
  line-height: 12px;
  height: 12px;
  border-radius: 2px;
  color: #fff;
  position: absolute;
  left: 0px;
  top: -10px;
  padding: 0px 3px;
  font-weight: 600;
  background: #ff8d8d;
  border-bottom-left-radius: 0px;
}
.qhx1 .xbt .des,
.qhx2 .xbt .des,
.qhx3 .xbt .des,
.qhx4 .xbt .des,
.qhx5 .xbt .des {
  font-size: 11px;
  color: #ff8d8d;
  line-height: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.djdzz {
  margin-bottom: 90px;
}
.djdzz h2 {
  font-size: 16px;
  font-weight: 600;
  color: #999;
  line-height: 22px;
  margin: 15px 15px;
}
.djdzz ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #666;
}
.djdzz .toggledown {
  width: 100%;
  margin-top: 25px;
}
.cont-fen {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* margin-bottom:70px;  */
}
.cont-fen img {
  width: 95%;
  margin-left:3px;
  /* border: 1px solid #f00;  */
  border-radius: 5px 5px 0 0;
}
.cont-fen > div {
  width: 45%;
  height: 100%;
  margin: 20px 0px;
}

.infow {
  background: #fff;
  padding-bottom: 5px;
  font-size: 12px;
}
.infow .title {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  line-height: 22px;
  padding: 10px 10px 0px 10px;
  position: relative;
}
.infow .yyw {
  background: #fff2f2;
  border-radius: 2px;
  position: relative;
  margin: 12px 10px 0px 10px;
  padding: 4px 6px 4px 6px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
}
.infow .yyw .t {
  font-size: 8px;
  line-height: 12px;
  height: 12px;
  border-radius: 2px;
  color: #fff;
  position: absolute;
  left: 0px;
  top: -10px;
  padding: 0px 3px;
  font-weight: 600;
  background: #ff8d8d;
  border-bottom-left-radius: 0px;
}
.infow .yyw .des {
  font-size: 11px;
  color: #ff8d8d;
  line-height: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.userw {
  /* height: 18px; */
  position: relative;
  line-height: 30px;
  font-size: 12px;
}
.userw .avatar {
  padding: 0 5px;
}
.userw .avatar .img {
  height: 18px;
  width: 18px;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-block;
  vertical-align: top;
}
.userw .avatar .n {
  display: inline-block;
  vertical-align: top;
  height: 18px;
  line-height: 18px;
  font-size: 9px;
  color: #666;
  padding-left: 5px;
  max-width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.view {
  position: absolute;
  right: 10px;
  top: 0px;
  height: 18px;
  padding-left: 15px;
  line-height: 18px;
  color: #666;
  font-size: 9px;
}
.view .i {
  position: absolute;
  left: 0px;
  top: 4px;
  height: 10px;
  width: 13px;
  background: url(https://st-cn.meishij.net/p2/20181206/20181206143142_460.png) -4px -20px
    no-repeat;
  background-size: 20px 40px;
}
.qh .active {
  font-size: 30px;
  font-weight: bold;
  /* text-decoration:underline; */
  border-bottom: 2px solid #fe9b95;
}
.cont-fen_bottom{
  background: #fff;
  box-shadow: 2px 2px #ddd;
  border-radius:0 0 10px 10px;
  /* border:1px solid #0f0; */
  width: 95%;
  margin-top:-4px;
  margin-left: 2px;  
}
</style>