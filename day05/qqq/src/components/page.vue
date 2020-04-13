<template>
    <div>
         <router-view></router-view>
        <div class="bottom">
           
                <router-link to="/index">
                    <figure><img src="../../../12-18页面/img/dz_65.jpg" alt="">
                        <figcaption>首页</figcaption>
                    </figure>
                </router-link>
                <router-link to="/dis">
                    <figure><img src="../../../12-18页面/img/dz_68.jpg" alt="">
                        <figcaption>发现</figcaption>
                    </figure>
                </router-link>
                <router-link to="/order">
                    <figure><img src="../../../12-18页面/img/dz_70.jpg" alt="">
                        <figcaption>订单</figcaption>
                    </figure>
                </router-link>
                <router-link to="/my">
                    <figure><img src="../../../12-18页面/img/dz_62.jpg" alt="">
                        <figcaption>我的</figcaption>
                    </figure>
                </router-link>
            </div>
    </div>
</template>

<script>
    export default {
        name:"page",
        data() {
            return {
                // key: value
            }
        },
    }
</script>

<style  scoped>
.bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f0f0f0;
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 5px 10px;
    text-align: center;
}
.bottom a{
    width: 24%;
}
.bottom a img{
    width: 30%;
}
.bottom figcaption{
    font-size: 12px;
}
</style>