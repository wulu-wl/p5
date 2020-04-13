<template>
  <div>
    <header>
      <!-- 顶部的搜索 -->
      <span></span>
      <input type="search" placeholder="搜索百万免费菜谱" />
    </header>

    <div class="center">
      <div class="center_left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="item.title" v-for="(item,index) in typesleft " :key="index" @click="getcidd(item.cid)"/>
        </van-sidebar>
      </div>
      <div class="center_right">
        <div v-for="item in typesright" :key="item.cidd"> 
        <dl v-for="(item1,index1) in item" :key="index1">
          <dt>
            <img  :src="item1.image" v-show="tushow"/>
          </dt>
          <dd>{{item1.title}}</dd>
        </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gettypes , getcid1 } from "../api/api_router";
export default {
  data() {
    return {
      msg: "底部路由分类",
      typesleft: [],
      activeKey: 0,
      typesright:[],
      tushow:true
    };
  },
  mounted() {
    gettypes().then(res => {
      // console.log(res);
      this.typesleft = res.data;
      // console.log(this.typesleft)
      let arr=res.data.map((item,index)=>{
        return item.children
      })
      // console.log(arr)
      this.typesright=arr;
    });
  },
  methods:{
    getcidd(n){
      // console.log(n)
      getcid1({cid:n}).then(res=>{
        // console.log(res.data)
        let arr=res.data.map((item,index)=>{
          return item.children
        })
        this.typesright=arr
        // console.log(arr[0])
        let arr1=arr[0].map((item,index)=>{
          // console.log(item)
          if(item.image){
            this.tushow=true
          }else{
            this.tushow=false
          }
        })
       
      })
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
header {
  width: 100%;
  height: 72px;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #fff;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}
header span {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(https://s1.c.meishij.net/wap6/images/topsearchicon@3x.png)
    center no-repeat;
  background-size: 16px 16px;
  position: absolute;
  left: 28px;
  top: 28px;
}
header input {
  border: 1px solid #ccc;
  width: 95%;
  height: 40px;
  padding-left: 25px;
  /* 文字纵向对齐方式 */
  writing-mode: sideways-lr;
}
/* 中间部分 */
.center {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 70px;
  justify-content: flex-start;
  align-items: flex-start;
}
/* 左侧样式 */
.van-sidebar-item--select {
  border: none;
}
.van-sidebar-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 12px 10px 8px;
  width: 100px;
}
.van-sidebar-item--select[data-v-20c9ec9e] {
  color: #f00;
}
.center_left img{
  width: 20px;
  height: 20px;
}
/* 右侧 */
.center_right {
  width: 100%;
  /* background: #ccc; */

  padding-left: 20px;
}

.center_right {
  width: 100%;
  height: 750px;
  overflow-y: scroll;
  /* height: auto; */
}
.center_right>div{
  width: 100%;
  /* height: 100%; */
    display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.center_right dl {
  width:28%;
  margin: 5px 5px;
}
.center_right img {
  width: 70px;
  height: 70px;
}
</style>