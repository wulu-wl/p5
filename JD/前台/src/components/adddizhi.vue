<template>
  <div>
    <div class="header">
      <router-link to="/sure1">&lt;</router-link>
      <van-nav-bar title="选择收货地址" />
    </div>
    <div class="peisong">
        <p>配送地址</p>
        <p @click="adddizhi">+添加收货地址</p>
    </div>
    <div v-show="active1" class="active1">
        暂无收货地址
    </div>
    <div v-show="active2" class="active2">
      <ul>
        <li  v-for="(item,index) in dizhi" :key="item._id" @click="qrdz(item._id)">
            <p> <span>{{item.name}}</span> <span>{{item.tel}}</span> </p>
            <p>{{item.province+item.city+item.county+item.addressDetail}}</p>
            <p> <router-link to="/adddz" @click="edit(item._id,index)">编辑</router-link> <a href="#" @click="del(item._id)">删除</a> </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getdizhi,deldz} from '../api/index'
export default {
  data() {
    return {
      msg: "地址页面",
      active1:true,
      active2:false,
      dizhi:[],
    };
  },
  mounted(){
    getdizhi().then(res=>{
      // console.log(res)
      this.dizhi=res.data;
      // console.log(this.dizhi)
      if(res.data.length==0){
        this.active1=true
        this.active2=false
      }else{
        this.active1=false
        this.active2=true
      }
    })
  },
  methods:{
    adddizhi(){
      this.$router.push("/adddz")
    },
    edit(id,index){
      // console.log("修改")
      // console.log(this.dizhi[index])
      sessionStorage.setItem("obj",JSON.stringify(this.dizhi[index]) )
      //地址栏中不显示路由显示，页面可以跳转
      // this.$router.push("/adddz")
    },
    del(id){
      console.log("删除")
      deldz({id:id}).then(res=>{
        // console.log(res)
        if(res.data.result.n==1){
          alert("删除成功")
          window.location.reload()
        }
      })
    },
    qrdz(id){
      // console.log(id)
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
.peisong{
  margin-top:50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #D3C6BE;
  padding: 10px 5px; 
}
.active1{
  width: 100%;
  min-height: 100px;
  line-height: 100px;
  text-align: center;
}
.active2{
  width: 100%;
  height: auto;
}
.active2 ul li{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 15px;
  border-bottom:1px solid #ddd; 
}
.active2 ul p{
  width: 100%;
  /* padding: 0px 10px; */
}
.active2 ul p:first-child{
  padding: 5px 10px;
  border-bottom:1px solid #ccc;  
}
.active2 ul p:nth-child(2){
  padding: 5px 10px;
  border-bottom:1px dashed #ccc;  
}
.active2 ul p:last-child{
  padding: 5px 0px;
  display: flex;
  justify-content: flex-end;
}
.active2 ul p:last-child a{
  display: inline-block;
  margin: 0px 10px;
}
</style>