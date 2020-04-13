<template>
    <div class="box">
        <div class="top">
            <header>
                <h3><img src="../../../12-18页面/img/dz_37.jpg" alt="">   大宝</h3>
                <p><span></span><span></span></p>
            </header>
           
            <ul>
                <li>
                    <img src="../../../12-18页面/img/2.jpg" alt="">
                    <p>收藏</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/2.jpg" alt="">
                    <p>收藏</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/2.jpg" alt="">
                    <p>收藏</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/2.jpg" alt="">
                    <p>收藏</p>
                </li>
            </ul>
        </div>
        <div class="cen">
            <div class="cen-top">
                <p>我的钱包</p>
                <span>进入钱包  &gt;</span>
            </div>
            <ul  class="cen-cen">
                <li>
                    <h3>7000 </h3>
                    <p>借钱</p>
                    <span>最高额度(元)</span>
                </li>
                <li>
                    <h3>70<span>万</span> </h3>
                    <p>美团信用卡</p>
                    <span>最高额度(元)</span>
                </li>
                <li>
                    <h3>7 <span>元</span></h3>
                    <p>美食享优惠</p>
                    <span>最高额度(元)</span>
                </li>
            </ul>     
        </div>
        <div class="tu">
            <img src="../../../12-18页面/img/2.jpg" alt="">
        </div>
        <div class="bot">
            <h3>推荐有礼</h3>
            <ul>
                <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>
                 <li>
                    <img src="../../../12-18页面/img/tu(1).png" alt="">
                    <p>有礼</p>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
// let token=sessionStorage.getItem("token")

    export default {
        name:"dis",
        data() {
           return {
               msg:"我的页面",
           }
        },
        mounted(){
            // console.log(token)
        }
    }
</script>

<style scoped>
.top{
    width:100%;
    background: #FFCA05;
    padding: 20px 20px;
    padding-bottom: 40px;
}
.top header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-content: center; */
    align-items: center;
}
.top header img{
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius:50%; 
}
.top header span{
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    margin: 0px 10px;
}
.top ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top:20px; 
    padding: 0px 10px;
    text-align: center;
}
.top ul img{
    /* display: block; */
    width: 30px;
    height: 30px;
    /* border: 1px solid #ccc; */
}
.top li p{
    font-size: 12px;
}
.cen{
    width: 100%;
    margin-top:-20px;
    border-radius:20px 20px 0px 0px;
    background: #fff;  
}
.cen .cen-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    /* border-bottom:1px solid #ccc;  */
}
.cen-top span{
    font-size:12px;
    color: #666;

}
.cen-cen{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px 30px;
    border-bottom:1px solid #ccc; 
}
.cen-cen li{
    text-align: center;
}
.cen-cen li h3 span{
    font-size:12px; 
}
.cen-cen li p{
    font-size:12px; 
}
.cen-cen li span{
    font-size:10px;
    color: #666; 
}
.tu img{
    width: 97%;
   height: 70px;
   margin: 10px 5px;
}
.bot{
    width: 100%;
    padding: 10px 20px;
    border-top:1px solid #ccc; 
}
.bot ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    text-align: center;
}
.bot ul li{
    width: 20%;
    margin-bottom:5px; 
}
.bot img{
    width: 70%;
}
.bot li p{
    font-size:12px; 
}
</style>