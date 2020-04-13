<template>
  <div class="box">
   
    <!-- 头部 -->
    <div class="header">
      <select>
        <option value="上海">上海</option>
        <option value="北京">北京</option>
      </select>
      <router-link to="/search">
        <input type="text" placeholder="全程热搜" />
      </router-link>
      <p>+</p>
    </div>
    <!-- 导航 -->
    <nav>
      <figure v-for="(item,index) in arr" v-bind:key="index">
        <img :src="item.img" alt />
        <figcaption>{{item.title}}</figcaption>
      </figure>
    </nav>
     <div class="zhong"></div>
       <div class="con">
                <p>猜你喜欢</p>
                <router-link :to="{path:'/xq/'+item._id}" v-for="(item,index) in arr1" class="red" v-bind:key="index">
                    <dl>
                        <dt><img :src="item.img" alt=""></dt>
                        <dd>
                            <p>{{item.title}}</p>
                            <span>{{item.address}}{{item.eg}}</span>
                            <div class="dd-one">
                                 <span class="dd-two">{{item.pri}}<i>元</i></span>
                                 <p class="dd-three">{{item.old_pri}}</p>
                                 <p class="dd-four">{{item.buy}}</p>
                            </div>
                        </dd>
                    </dl>
                </router-link>
            </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "HelloWorld",
  data() {
    return {
      arr:[],
      arr1:[],
    };
  },
  mounted(){
            axios({
                method:'get',
                url:'http://localhost:8000/show',
                data:{},
            }).then((res)=>{
                // console.log(res)
                this.arr=res.data
                // console.log(this.arr)
            }),
              axios({
                method:"post",
                url:"http://localhost:8000/shopshow",
                data:{},
            }).then((res)=>{
                // console.log(res)
                this.arr1=res.data;
                // console.log(this.arr1)
            })
        }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped 只在此页面管用 */
.header{
    width: 100%;
    background: #FFCF00;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0px;
    position: fixed;
    top: 0px;
    left:0px;

}
.header select{
    width: 15%;
    background:#FFCF00;
    border: none;
    color: #fff;
    vertical-align: bottom;
}
.header option{
    border: none;
    color: #fff;
    margin-top: -10px;
}
.header input{
    width: 100%;
    padding: 5px 10px;
    padding-left:35px ;
    border: none;
    border-radius:20px ;
}
.header p{
    width: 25px;
    height: 25px;
    border: 2px solid #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
    font-size: 20px;
    color: #fff;
}
nav{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 10px 0px;
    font-size: 12px;
    border-bottom:1px solid #ccc ;
    margin-top:50px; 
}
nav figure{
    width: 19%;
    padding: 10px;
}
nav img{
    width: 70%;
}
.zhong{
    width: 100%;
    height: 15px;
    border-top:1px solid #E4E0D9 ;
    border-bottom:1px solid #E4E0D9 ;
    background: #F0EFED;
}
.con{
    width: 100%;
    padding: 10px 10px;
}
.con>p{
    font-size: 20px;
    padding: 5px 10px 10px 10px;
    border-bottom:1px solid  #E4E0D9;
}
.con dl{
    display: flex;
    justify-content: flex-start;
    padding:10px;
    border-bottom:1px solid  #E4E0D9 ;
}
.con dt{
    width: 30%;
}
.con dd{
    width: 70%;
}
.con dd>span{
    display: inline-block;
    padding: 5px 0px;
    font-size: 12px;
}
.con .dd-one{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top:15px ;
}
.dd-two{
    width: 18%;
    font-size: 16px;
    color: #FF6F4B;
}
.dd-two i{
    font-style: normal;
    font-size: 10px;
}
.dd-three{
    width: 35%;
    font-size: 12px;
    margin-left: 5px;
    margin-right: 30px;
}
.dd-four{
    font-size: 14px;
}
.con a:last-child dl{
  margin-bottom:60px;
}

.search-header{
    width: 100%;
    height: 50px;
    background: #FFCF00;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    align-items: center;
}
</style>
