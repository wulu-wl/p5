<template>
    <div>
        <div class="top">
            菜单            
        </div>
        <div class="content">
            <dl @click="ent(item.mid)" v-for="(item,index) in menu" :key="index">
                <dt>
                    <p>{{item.title}}</p><span>{{item.children.length}}篇菜谱</span>
                </dt>
                <dd>
                    <img :src="item.children[0].image" alt="">
                    <img :src="item.children[1].image" alt="">
                    <img :src="item.children[2].image" alt="">
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import {getmenu} from '../api/api_router'
    export default {
        data() {
            return {
                msg: "我的菜单",
                menu:[]
            }
        },
        mounted(){
            getmenu().then(res=>{
                // console.log(res)
                this.menu=res.data
                console.log(this.menu)
            })
        },
        methods:{
            ent(n){
                // console.log(n)
                this.$router.push("/minemenu_1/"+n)
            }
        },
    }
</script>

<style  scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
}
.top{
    width: 100%;
    text-align: center;
    padding: 10px 0px ;
    font-size: 20px;
    font-weight: bolder;
    /* border-bottom:1px solid #ccc; */
    letter-spacing: 1px; 
}
.content {
    width: 100%;
   
}
.content dl{
    width: 100%;
    border-bottom: 1px solid #ccc;
     padding: 20px 10px;
}
.content dl  dt{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align:center; 
    padding: 10px 0px;
}
.content dt p{
    font-weight: bolder;

}
.content dt span{
    font-size:12px;
    color: #ddd;
    
}
.content dl  dd{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align:center; 
}
.content dd img{
    width: 30%;
}
</style>