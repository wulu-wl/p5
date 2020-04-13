<template>
  <div>
    <router-view></router-view>
    <div class="bottom">
      <van-tabbar v-model="active">
        <router-link to="/">
          <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        </router-link>
        <router-link to="/video">
          <van-tabbar-item icon="play-circle-o">视频</van-tabbar-item>
        </router-link>
        <router-link to="/cooktype">
          <van-tabbar-item icon="notes-o">分类</van-tabbar-item>
        </router-link>
         <router-link to="/minemenu">
          <van-tabbar-item icon="diamond-o">菜单</van-tabbar-item>
        </router-link>
         <router-link to="/collection">
          <van-tabbar-item icon="like-o">收藏</van-tabbar-item>
        </router-link>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
      active: 0,
     
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
.bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #ccc;
  padding: 3px 0px;
}
.bottom a{
  width: 33.33%;
  /* border-right: 1px solid #ccc; */
  padding-top:10px; 
  color: #333;
}
.van-tabbar-item--active {
    color: #ff7474;
}
</style>