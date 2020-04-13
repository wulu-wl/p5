<template>
    <div>
        <!-- {{msg}} -->
        <div class="top">
            <div class="top1">
                <a href="#" class="a1">
                    <img src="https://s1.c.meishij.net/images/default/tx2_1.png" alt="">
                    <div class="c">
                        <strong>杰米2685820025</strong>
                        <span>正在通往美食达人的路上...</span>
                    </div>
                </a>
                <a href="#" class="a2">
                    <span>美食杰DNA 0条 ></span>
                </a>
            </div>
        </div>
        <ul class="top_cen">
            <li><span>0</span>关注</li>
            <li><span>0</span>粉丝</li>
            <li><span>0</span>菜谱</li>
        </ul>
        <div class="color"></div>
        <div class="rongyu">
            <p>荣誉勋章</p>
            <div class="huizhang">
                <ul>
                    <li><img src="http://static.meishij.net/images/get3/ceshi/sousuo.png" alt=""></li>
                    <li><img src="http://static.meishij.net/images/get3/ceshi/sousuo.png" alt=""></li>
                    <li><img src="http://static.meishij.net/images/get3/ceshi/sousuo.png" alt=""></li>
                    <li><img src="http://static.meishij.net/images/get3/ceshi/sousuo.png" alt=""></li>
                    <li><img src="http://static.meishij.net/images/get3/ceshi/sousuo.png" alt=""></li>
                    <li><img src="http://static.meishij.net/images/get3/ceshi/sousuo.png" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="color"></div>
        <div class="bottom">
            <ul>
                <li>
                    <img src="https://s1.c.meishij.net/wap7/images/myhome_jifen@3x.png" alt="">
                    <p>积分商城</p>
                    <span>免费兑换</span>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "收藏"
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
    padding-top: 40%;
    background: url("../assets/home_bgOnline@3x.png") center no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.top1{
    
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
}
.top1 .a1{
    width: 80%;
    margin: 5% auto 0px;
    display: block;
    position: relative;
}
.top1 .a1 img{
    display: block;
    height: 66px;
    width: 66px;
    border: 3px solid rgba(255,255,255,0.5);
    border-radius: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
}
.top1 .c{
    height: 72px;
    width: 100%;
    padding-left: 80px;
    box-sizing: border-box;
}
.top1 .c strong{
        color: #fff;
    font-size: 16px;
    line-height: 24px;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-top: 12px;
}
.top1 .c span{
    color: #fff;
    font-size: 12px;
    line-height: 24px;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.top1 .a2{
    width: 80%;
    margin: 0px auto 0px;
    display: block;
    position: relative;
    padding-left: 80px;
    box-sizing: border-box;
}
.top1 .a2 span{
    height: 24px;
    line-height: 22px;
    border-radius: 16px;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.2);
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    padding: 0px 12px;
}
.top_cen{
    background: #fff;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center
}
.top_cen li{
    width: 33%;
    text-align: center;
    color: #999;
}
.top_cen li span{
    color: #f00;
    padding-right: 8px;
    font-size: 14px;
}
.top_cen li:nth-child(2){
    border-left:1px solid #eee ;
    border-right:1px solid #eee ;

}
.color{
    width: 100%;
    height: 10px;
    background: #eee;
}
.rongyu{
    
    width: 100%;
}
.rongyu p{
    padding-top: 14px;
    padding-left: 14px;
    padding-bottom: 8px;
}
.huizhang{
    width: 100%;
    padding: 0px 3.125%;
    box-sizing: border-box;
    overflow-x: auto;
}
.huizhang ul{
display: inline-block;
    width: 400px;
    font-size: 0px;
    padding: 0px 0px 14px;
    vertical-align: top;
}
.huizhang ul li{
    height: 32px;
    width: 38px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 12px 0px 0px;
}
.huizhang img{
    display: block;
    height: 32px;
    width: 38px;
}
</style>