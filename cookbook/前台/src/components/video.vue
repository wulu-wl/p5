<template>
  <div>
    <header>
      <div class="zuo">
        <a href="http://localhost:8080/#/" class="back">
          <span class="i"></span>返回
        </a>
      </div>
      <h1>菜谱视频大全</h1>
      <div class="you">
        <a href="https://m.meishij.net/search.php" class="search">搜索</a>
      </div>
    </header>
    <div class="content">
      <dl v-for="(item,index) in videoarr" :key="index">
          <dt :style="{background: 'url( '+ item.image +')', paddingTop:'133.333333%',backgroundSize:'cover',backgroundPosition:'center'}">
          
              <!-- <img :src="item.image" alt=""> -->
          </dt>
          <dd>
              <p class="content_top">{{item.title}}</p>
              <div>
                  <img src="https://st-cn.meishij.net/user/162/221/ns117912_142372157780527.jpg" alt="">
                  <p class="content_one">{{item.pname}}</p>
                  <p class="content_two"> <span></span> <i>{{item.psee}}</i> </p>
              </div>
          </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import {getvideo} from '../api/api_router'
export default {
  data() {
    return {
      msg: "视频",
      videoarr:[],
      
    }
  },
  mounted(){
    getvideo().then(res=>{
      // console.log(res)
      this.videoarr=res.data
      console.log(this.videoarr)
    })
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
header {
  width:100%;
  display: flex;
  justify-content: space-evently;
  align-items: center;
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  z-index: 100;
  /* border: 1px solid #000; */
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
header h1 {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  color: #000;
  font-weight: 600;
  text-align: center;
  height: 44px;
  line-height: 44px;
}
.zuo a {
  height: 44px;
  line-height: 44px;
  padding: 0px 16px;
  position: absolute;
  left: 0px;
  top: 0px;
  color: #333;
  font-size: 15px;
}
.zuo .i {
  display: inline-block;
  vertical-align: top;
  background: url(https://s1.st.meishij.net/p2/20191030/20191030181350_193.png)
    center no-repeat;
  background-size: 100% 100%;
  width: 10px;
  height: 17px;
  margin-right: 6px;
  margin-top: 13px;
}
.you a {
  background: url(https://st-cn.meishij.net/p2/20191115/20191115143704_696.png)
    center no-repeat;
  background-size: 44px 44px;
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  height: 44px;
  width: 44px;
  font-size: 0px;
}
.content{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap:wrap; 
    align-items: center;
    justify-content: flex-start;
    margin-top: 50px;
    /* border: 1px solid #f00; */
    margin-bottom:70px; 
}
.content dl{
    width: 46%;
    border-radius:10px; 
    margin:10px 6px; 
}
.content dl dt{
  width: 100%;
  /* height: 200px; */
  border-radius: 5px 5px 0 0 ;
  /* border: 1px solid #f00; */
  /* position: relative; */

}
/* .content dl dt img{
    width: 100%;
    height: 220px;
} */
.content dd{
  /* border: 1px solid; */
  background: #fff;
  box-shadow: 2px 2px 2px #ccc;
    padding: 5px 10px;
    border-radius:0px 0px 6px 6px; 
}
.content dd>img{
    width: 100%;
    height: 100px;
}
.content dd>div{
    width: 100%;
    margin: 15px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center
    
}
.content dd>div>img{
    width: 18px;
    height: 18px;
    border-radius:50%; 
}
.content dd>div>p>img{
    width: 20px;
    height: 20px;
}
.content dd>div{
  margin-top:10px; 
}
.content dd>div>p>span{
  width: 20px;
  height:10px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right:-6px; 
  margin-top:3px; 
  /* border: 1px solid #f00; */
  background: url("https://s1.st.meishij.net/p2/20181206/20181206143142_460.png") -4px -20px no-repeat;
  background-size: 20px 40px;
}
.content_one{
  font-size:10px; 
  margin-left:-52px; 
}
.content_two{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20px;
  line-height: 20px;
}
.content_two i{
  font-style: normal;
  font-size: 10px;
  display: inline-block;
}
.content_top{
  font-weight: 600;
  padding: 8px 0px;
}
</style>