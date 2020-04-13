<template>
<div class="order">
    <header>
        <h2>订单页面</h2>
    </header>
    <nav>
        <ul>
            <li><a href="#">全部</a></li>
            <li><a href="#">待付款</a></li>
            <li><a href="#">待使用</a></li>
            <li><a href="#">待评价</a></li>
            <li><a href="#">退款/售后</a></li>
        </ul>
    </nav>	
    <div class="con">
        <ul v-for="(item,index) in arr" v-bind:key="index">
            <li>
              
                <h5><img src="../../../12-18页面/img/tu(1).png" alt=""> &nbsp;&nbsp;{{item.name}} &gt;</h5>
                <p>商家已接单</p>
            </li>
            <li>
                <img src="../../../12-18页面/img/2.jpg" alt="">
                <p>
                    <span>下单时间: {{item.timer}}</span>
                    <span>总价：￥{{item.zj}}</span>
                </p>
            </li>
            <li>
                <button>确认收货</button>
                <button>再来一单</button>
            </li>
        </ul>
    </div> 
</div>  

</template>

<script>

import axios from 'axios';
    export default {
        name:"order",
        data() {
           return {
               msg:"订单页面",
               arr:[],
           }
        },
        mounted(){
             this.shopid= this.$route.params.id;
            let params=new URLSearchParams();
            params.append("shopid",this.shopid)
            axios({
                method:"post",
                url:"http://localhost:8000/order",
                data:params,
            }).then((res)=>{
                // console.log(res.data)
                this.arr=res.data
                // console.log(this.arr)
            })
        }
    }
</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
}
/* h2{
    width: 50%;
    text-align: left;
    margin: 0 auto;
    
} */
.order{
    background:#f7fbfe ;
    /* height: 1000px; */
}
.order header{
    width:100%;
    height:50px;
    background:#FFCF00;
    text-align:center;
    line-height:50px;
}
.order nav{
	width: 100%;
	background: #fff;
    height: 50px;	
    /* margin-top:50px; 	 */
    position: fixed;
    left: 0px;
    top: 50px;	
}
.order nav ul{
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.order nav ul li{
	height: 50px;
	line-height: 50px;
}
.order nav ul li a{
	font-size: 12px;
	color: black;
	text-decoration: none;
	text-align: center;
}
.con ul:first-child{
    margin-top:100px; 
}
.con{
    width: 100%;
    height: auto;
    /* background: #9fcff3; */
    margin-top: 10px;
}
.con ul{
    width: 97%;
    margin: 5px auto;
    background: #fff;
    border-radius:10px; 
}
.con  ul li:first-child img{
    width: 20px;
    height: 20px;
    /* visibility: hidden; */
    vertical-align: top;
    
}
.con  ul li:nth-child(2) img{
    width: 50px;
    height: 50px;
}
.con  ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.con  ul li:nth-child(1){
    padding: 5px 10px;
    border-bottom:1px solid #ccc; 
}
.con  ul li:nth-child(1) p{
    font-size: 12px;
}
.con  ul li:nth-child(2){
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px 10px;
}
.con  ul li:nth-child(2) p{
    line-height: 20px;
    padding-left: 10px;
}
.con  ul li:nth-child(2) span{
    display:block;
    font-size: 12px;
}
.con ul li:last-child{
    justify-content: flex-end;
}
.con ul li:last-child button{
    border: 1px solid #ccc;
    background: #fff;
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius:10px; 
}
.con ul:last-child{
    margin-bottom:70px; 
}
</style>