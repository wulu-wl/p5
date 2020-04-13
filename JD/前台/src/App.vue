<template>
  <div id="app">
    <router-view />
    <!-- <div class="bottom">
      <van-tabbar v-model="active">
        <router-link to="/"><van-tabbar-item icon="home-o">首页</van-tabbar-item></router-link>
        <router-link to="/car"><van-tabbar-item icon="search">购物车</van-tabbar-item></router-link>
        <router-link to="/my"><van-tabbar-item icon="friends-o">我的</van-tabbar-item></router-link>
      </van-tabbar>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
    data() {
    return {
      // active: 0,
     
    }
  }
};
</script>

<style>
/* * {
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
  padding-top:10px; 
  color: #333;
} */
</style>
