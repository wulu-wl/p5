<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <span></span>
      <input type="text" placeholder="搜索百万免费菜谱" />
    </div>
    <div class="bottom">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="item.title" v-for="(item,index) in foodlist" :key="index" @click="aa(item.fid)"/>
        </van-sidebar>
      </div>
      <div class="right1" v-show="active1">
        <div v-for="(item,index) in foodtypes " :key="index" >
            <dl v-for="(itema,indexa) in item.children" :key="indexa" >
                <dt>{{itema.title}}</dt>
                 <dd>
                    <p  v-for="(item1,index1) in itema.children" :key="index1" >{{item1}}</p>
                  </dd>   
            </dl>
        </div>
      </div>
       <div class="right2" v-show="active2">
           <!-- <div v-for="(item,index) in foodtypes " :key="index" > -->
            <dl v-for="(itema,indexa) in food" :key="indexa" >
                <dt>{{itema.title}}</dt>
                 <dd>
                    <p  v-for="(item1,index1) in itema.children" :key="index1" >{{item1}}</p>
                  </dd>   
            </dl>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getfood , getaa} from "../api/api_router";
export default {
  data() {
    return {
      msg: "首页食材的分类页面",
      foodlist: [],
      activeKey: 0,
      foodtypes:[],
      food:[],
      active1:true,
      active2:false
    };
  },
  mounted() {
    getfood().then(res => {
      // console.log(res);
      this.foodlist = res.data;
      this.foodtypes=res.data
      console.log(this.foodtypes)
      // let arr=[];
      // for(var i=0;i<res.data.length;i++){
      //   arr.push(res.data[i].children)
      // }
      // // console.log(arr)
      // this.foodtypes=arr
      // console.log(this.foodtypes)
    });
  },
  methods:{
    aa(n){
      // console.log(n)
      this.active1=false;
      this.active2=true
      getaa({fid:n}).then(res=>{
        // console.log(res)
        console.log(res.data[0].children)
        this.food=res.data[0].children
        
      })
      
    }
  }
};
</script>

<style scoped>

.search {
  height: 40px;
  display: block;
  background: #f5f5f5;
  border-radius: 4px;
  margin: 16px;
  font-size: 16px;
  color: #999;
  line-height: 40px;
  padding-left: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
}
.search span {
  display: inline-block;
  vertical-align: top;
  background: url(https://s1.c.meishij.net/wap6/images/topsearchicon@3x.png)
    center no-repeat;
  background-size: 16px 16px;
  height: 16px;
  width: 16px;
  margin: 12px 8px 0px 16px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.search input {
  height: 22px;
  padding: 9px;
  line-height: 22px;
  font-size: 14px;
  color: #333;
  border: 0px;
  display: block;
  background: none;
  width: 100%;
  box-sizing: content-box;
}
.fen {
  width: 200px;
  height: 100px;
  margin: 0 auto;
}
.bottom {
  height: 593px;
  display: flex;
  justify-content: flex-start;
}
.left{
  width: 23%;
  /* border: 1px solid #00f; */
  height: auto;
}

.right1,.right2{
  width: 77%;
  height: 100%;
  /* border: 1px solid #f00; */
  overflow-y:scroll; 
  padding: 0px 10px 0px 15px;
}
.right1 dl,.right2 dl{
  width: 100%;
  height: auto;
}
.right1 dt,.right2 dt {
  width: 100%;
  text-align: center;
  padding: 5px 0px;
  color: #f25e52;
}
.right1 dl dd,.right2 dl dd{
  width: 100%;
  margin-left:0px; 
  display: flex;
  flex-wrap:wrap; 
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.right1 dd p,.right2 dd p{
  width: 30%;
  font-size: 12px;
  padding: 5px 0px;
  border: 1px solid #ccc;
  margin: 8px 3px;
  border-radius:20px; 
}
</style>