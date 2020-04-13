<template>
    <div>
        <div class="top">我的菜单</div>
        <div class="content">
            <dl>
                <dt>
                    <div><p>我的菜单</p><span>10篇菜单</span></div>
                    <div><img src="" alt=""><span></span></div>
                </dt>
                <dd>

                </dd>
            </dl>
        </div>

    </div>
</template>

<script>
import {getmidmenu} from '../api/api_router'
    export default {
        data() {
            return {
                msg: "我的菜单对应的菜单"
            }
        },
        mounted(){
            // console.log(this.$route.params.id)
            let  mid=this.$route.params.id
            getmidmenu({mid:mid}).then(res=>{
                console.log(res)
            })
        }
    }
</script>

<style scoped>
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
</style>