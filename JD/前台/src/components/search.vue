<template>
    <div>
        <div class="header">
            <router-link to="/">×</router-link>
            <van-search placeholder="请输入搜索关键词" v-model="searchnr" />
        </div>
        <div class="con">
            <p>热门搜索</p>
            <ul>
                <li v-for="(item,index) in rc" :key="index">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ssrc} from '../api/index'
    export default {
        data() {
            return {
                searchnr: "",
                rc:[]
            }
        },
        mounted(){
            ssrc().then(res=>{
                console.log(res)
                this.rc=res.data.data
            })
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    border-bottom:1px solid #ccc; 
}
.header a{
    width: 10%;
    font-weight: bold;
    font-family: "黑体";
    font-size: 30px;
}
.header .van-search{
    width: 80%;
}
.con{
    width: 100%;
    padding: 10px;
}
.con p{
    margin-left:20px; 
}
.con ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align:center;
}
.con ul li{
    width: 30%;
    padding: 3px 10px;
    border: 1px solid #ccc;
    border-radius:20px; 
    margin: 5px;
}
</style>