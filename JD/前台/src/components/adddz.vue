<template>
  <div>
    <div class="header">
      <router-link to="/adddizhi">&lt;</router-link>
      <van-nav-bar title="选择收货地址" />
    </div>
    <div class="con">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        v-model="searchResult"
      />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    </div>
  </div>
</template>

<script>
import {obj} from '../api/citi'
import {adddz} from '../api/index'
export default {
  data() {
    return {
        msg:"添加地址页面",
        areaList:obj,
        searchResult: [],
        obj:{},
        obj1:{}
    };
  },
  methods: {  
    onSave(content) {
    //   console.log(content)
      this.obj=content;
      adddz(this.obj).then(res=>{
          // console.log(res)
          if(res.data.result.n==1){
              alert("添加成功")
              this.$router.push("/adddizhi")
          }
      })
      content=this.obj1
    },
    onDelete() {

    }
  },
  mounted(){
      this.obj1=JSON.parse(sessionStorage.getItem("obj"))
      console.log(this.obj1)
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
.con {
  margin-top: 50px;
}
</style>