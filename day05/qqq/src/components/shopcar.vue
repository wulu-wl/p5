<template>
    <div>
        <div class="gou">
             <h2>购物车</h2>
        </div>
               <table border="1" cellspacing='0'>
                    <thead>
                        <tr>
                            <th>名字</th>
                            <th>单价</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr>{{arr[0].num}}</tr> -->
                        <tr v-for="(item,index) in arr" v-bind:key="index">

                           <td>{{item.name}}</td> 
                          <td>  {{pri}}</td>
                         <td>  <button @click="jian">-</button>   {{num}}  <button @click="jia">+</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">总价：<span>{{zj}}</span> </td>
                        </tr>
                    </tfoot>
        </table>
        <router-link to="/order">
            <button class="jie">去结算</button>
        </router-link>

        <!-- <router-link to="/login">
            <button class="deng">去登录</button>
        </router-link> -->
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"shopcar",
        data() {
            return {
                shopid:'',
                arr:[],
                zj:'',
                num:0,
                pri:0
            }
        },
        mounted(){
            this.shopid= this.$route.params.id;
            let params=new URLSearchParams();
            params.append("shopid",this.shopid)
            axios({
                method:"post",
                url:"http://localhost:8000/getshop",
                data:params,
            }).then((res)=>{
                // console.log(res)
                this.arr=res.data
                // console.log()
                this.num=this.arr[0].num;
                // console.log(this.num)
                this.zj=Number(this.arr[0].pri)*(this.arr[0].num)
                this.pri=Number(this.arr[0].pri)
            })
        },
        methods:{
            jian(){
                if(this.num==1){
                    alert("不能在减少了")
                }else{
                    this.num=this.num-1;
                    this.zj=this.pri*this.num
                }
                this.shopid= this.$route.params.id;
                let params=new URLSearchParams();
                params.append("shopid",this.shopid)
                params.append('num',this.num);
                params.append('zj',this.zj);
                axios({
                   method:"post",
                    url:"http://localhost:8000/jian",
                    data:params,
                }).then((res)=>{
                    console.log(res)
                })
            },  
            jia(){                
                this.num= Number(this.num)+1
                this.zj=this.pri*this.num;
                this.shopid= this.$route.params.id;
                let params=new URLSearchParams();
                params.append("shopid",this.shopid)
                params.append('num',this.num)
                params.append('zj',this.zj);
                axios({
                   method:"post",
                    url:"http://localhost:8000/jia",
                    data:params,
                }).then((res)=>{
                    console.log(res)
                })
            }
        }

    }
</script>

<style  scoped>
.gou h2{
    width: 100%;
    background: #FFCF00;
    text-align: center;
    color: aliceblue;
}
table{
    width: 100%;
    text-align: center;
    border-collapse:0; 
    margin-top:20px; 
}
.jie,.deng{
    width: 100px;
    height: 30px;
    text-align: center;
    /* line-height: 30px; */
    background: #fff;
    border: 1px solid #FFCF00;
    padding: 5px 10px;
    letter-spacing: 2px;
    border-radius:20px; 
    margin: 20px;
    margin-left:70%; 
}
</style>