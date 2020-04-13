<template>
  <div>
    <div class="search">
      <div class="search-header">
        <router-link to="/index">
          <span>&lt;</span>
        </router-link>
        <h3>详情页面</h3>
      </div>     
       <div class="con">
                <img :src="obj.img1" alt="" />
                <div class="con1">
                    <p class="dian">{{obj.title}}</p>
                    <span class="nei">{{obj.eg}}</span>
                </div>
            </div>
            <div class="center">
                <h2>{{obj.pri}}</h2>
                <span>{{obj.old_pri}}</span>
                <router-link :to="{path:'/shopcar/'+obj._id}">
                  <button @click="fn">立即抢购</button>
                </router-link>
                
            </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "xq",
  data() {
    return {
      // msg:'详情页面'
      id: "",
      obj:{}
    };
  },
  mounted() {
    //    console.log(this.$route.params.id)
    this.id = this.$route.params.id;
    let params = new URLSearchParams();
    params.append("_id", this.id);
    axios({
      method: "post",
      url: "http://localhost:8000/xq",
      data: params
    }).then(res => {
      // console.log(res)
      this.obj = res.data;
      // console.log(this.obj);
    });
  },
  methods:{
    fn(){
          let params = new URLSearchParams();
          params.append("name",this.obj.title)
          params.append("pri",this.obj.pri)
          params.append("num","1")
          params.append("shopid", this.id);
          params.append("timer",new Date().toLocaleString())
          params.append("zj",Number(this.obj.pri))
      axios({
        method: "post",
        url: "http://localhost:8000/shopadd",
        data: params,
      }).then((res)=>{
        // console.log(res)
      })
    }
  }
};
</script>

<style scoped>
.search-header {
  width: 100%;
  height: 50px;
  background: #13c4b2;
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  align-items: center;
}
.search-header span {
  width: 12%;
  font-size: 20px;
  color: #fff;
}
.search-header h3 {
  width: 80%;
  text-align: center;
  color: #fff;
}
.con {
  position: relative;
}
.con img {
  width: 100%;
  height: 190px;
}
.con1 {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.con1 p {
  font-size: 18px;
  color: #fff;
}
.con1 span {
  font-size: 12px;
  color: #fff;
}
.center {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px;
}
.center h2 {
  color: #13c4b2;
}
.center button {
  width: 100px;
  height: 30px;
  text-align: center;
  align-items: center;
  color: #fff;
  background: orange;
  border: none;
  margin-left: 20%;
}
.center span {
  font-size: 14px;
  color: #ccc;
}
</style>