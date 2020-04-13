<template>
    <div>
        <div class="top">
            <router-link to="/">&lt;</router-link>
            <input type="search" placeholder="请输入信息">
        </div>
        <div class="center">
            <div class="center_left">
                <van-sidebar v-model="activeKey" >
                    <van-sidebar-item @click="xq(item.cid)" v-for="item in flleft" :key="item.cid" :title="item.title" />
                </van-sidebar>
            </div>
            <div class="center_right">
                <div class="right_one" v-for="(item,index) in flright" :key="index">
                    <p>{{item.title}}</p>
                    <ul>
                        <li v-for="(item1,index1) in item.goods" :key="index1">
                            <p>{{item1.title}}</p>
                            <img :src="item1.image" alt="">
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {flleft,flright,flright_one,flright_two} from '../api/index'
    export default {
        data() {
            return {
                 activeKey: 0,
                 flleft:[],
                 flright:[],
                 arrcid:[],
            }
        },
        mounted(){
              //路由传值  对应商品传过来的gid
            // console.log(this.$route.params.id)
            sessionStorage.setItem("cid",this.$route.params.id),

            flleft().then(res=>{
                // console.log(res.data.data)
                this.flleft=res.data.data
                // console.log(this.flleft)
                 let arr=[];
                for(var i=0;i<this.flleft.length;i++){
                    arr.push(this.flleft[i].cid)
                }
                // console.log(arr)
                this.arrcid=arr;
                // console.log(this.arrcid)
            })
            flright_one().then(res=>{
                this.flright=res.data.data
            })
            
        },
        methods:{
            xq(id){
                this.$router.push({path:"/fenlei/"+id})
                sessionStorage.setItem("id",id)
                flright_two().then(res=>{
                    // console.log(res)
                    this.flright=res.data.data
                    // console.log(this.flright)
                })

            }
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.top{
    
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3px 10px;
    border-bottom:1px solid #ccc; 
}
.top a{
    font-family: "黑体";
    font-weight: bold;
    font-size: 50px;
    color: #000;
}
.top input{
    margin-left:20px;
    width: 80%;
    padding: 5px 20px;
    border: 1px solid #ccc;
    border-radius:10px;  
}
/* 中间部分 */
.center{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
}
/* 左侧样式 */
.van-sidebar-item--select{
    border: none;
}

.van-sidebar-item{
    border-bottom:1px solid #ccc; 
    padding: 10px 12px 10px 8px;
}
.van-sidebar-item--select[data-v-20c9ec9e]{
    color:#f00;
}
.center_right{
    width: 100%;
    background: #ccc;
    padding: 10px;
}
.center_right ul {
    margin: 8px 0px;
    background: #fff;
    display: flex;
    flex-wrap:wrap; 
    justify-content:flex-start;
    text-align: center;
    padding: 10px;
}
.center_right ul li{
    width: 33%;
}
.center_right ul li p{
    width: 100%;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.center_right img{
    width: 70px;
    height: 70px;
}
</style>