<template>
  <div>
    <div class="top">
      <h2>渠道商管理平台</h2>
      <div>
        <img src="../../../bg/public/baby.jpg" alt />
        <span>管理员</span>
        <div @click="backout">
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <el-tree :data="arr" :props="defaultProps" @node-click="handleNodeClick" class="aaa"></el-tree>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { option } from "../api/config"
export default {
  data() {
    return {
      arr: [],
      defaultProps: {
        children: "children",
        label: "menuName"
      }
    };
  },
  methods: {
    backout() {
      this.$router.push("/login");
      sessionStorage.clear();
    },
    handleNodeClick(data) {
        // console.log(11)
        // console.log(data)
        if(data.path){
          // this.$router.push('/home'+)
          this.$router.push('/home'+data.path).catch(data => {});
        }
        // this.$router.push('/userfenxi')
    }
  },
  mounted() {
      let uid=sessionStorage.getItem("uid")
        option({uid:uid}).then(res => {
        //   console.log(res);
            this.arr = res.data;
            // console.log(this.arr)
            for(var i in this.arr){
                if(this.arr[i].children.length==0){
                    // console.log(this.arr[i].children==0)
                   this.arr.splice(i)
                }
            }
        });
  }
};
</script>

<style  scoped>
.el-tree-node {
    white-space: nowrap;
    outline: 0;
    padding: 10px 0px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.aaa>div{
  /* height: 200px; */
  margin: 40px 0;
  font-size: 16px;
}
.aaa .el-tree-node__content{
  height: 40px;
}
.top {
  width: 100%;
  background: linear-gradient(rgb(66, 183, 212), #fff);
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.top > div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.top > div > div {
  cursor: pointer;
}
.bottom {
  width: 100%;
  height: auto;
  margin-top:10px;
  border-top:1px solid #ccc;
  padding: 20px;  
  display: flex;
  justify-content: space-around;
}
.left{
    width: 20%;
    height: auto;
    line-height: 30px;
    border-right: 1px solid #ccc;
    /* background: #ddd; */
}
.right{
    width: 80%;
    height: auto;
    line-height: 30px;
    padding-left:20px; 
    /* background: #ddd; */
}
.el-tree-node {
     padding-top:10px;
     padding-bottom: 10px; 
}
</style>