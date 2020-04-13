<template>
  <div>
    <header>
      <img src="https://st-cn.meishij.net/r/97/32/4758097/s4758097_157853200329259.jpg" alt />
      <div class="top">
          <span>&lt;美食杰</span>
          <span>菜谱分类&gt;</span>
      </div>
    </header>
    <div class="xq">
        <div class="xq_top1">
            <h1>软式牛奶小面包</h1>
            <p>by sourcehe　249 收藏　1553 浏览</p>
        </div>
        <div class="xq_top2">
            <dl>
                <dt></dt>
                <dd>烘焙</dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>甜味</dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>&lt;30分钟</dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>较低热量</dd>
            </dl>
        </div>
        <p class="xq_top3">软式牛奶小面包是我家最经常做的，小巧可爱，松软可口，一次可以吃5个。食材常见，只要按以下配方做，烘焙小白也能百分之成功。</p>
       <!-- 主材料 -->
        <ul class="xq_con1">
            <li>主料 <span>3人份</span></li>
            <li><span>高筋面粉</span> <span>170克</span></li>
            <li><span>低筋面粉</span> <span>30克</span></li>
        </ul>
        <!-- 辅料 -->
        <ul class="xq_con2">
            <li>辅料</li>
            <li><span>黄油</span> <span>30克</span></li>
            <li><span>蛋液</span> <span>20克</span></li>
            <li><span>奶粉</span> <span>15克</span></li>
            <li><span>水</span> <span>100克</span></li>
            <li><span>细砂糖</span> <span>25克</span></li>
            <li><span>盐</span> <span>3克</span></li>
            <li><span>酵母</span> <span>3克</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "详情"
    };
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
header{
    width: 100%;
    height: 400px;
}
header img {
  width: 100%;
  height: 100%;
  z-index: -100;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

}
.top span{
    color: #fff;
    display: inline-block;
    padding: 6px 16px;
    background:rgba(0, 0, 0, 0.5);
    border-radius:20px;
}
.xq{
    width: 90%;
    height: auto;
    border: 1px solid;
    /* background: #f00;  */
    z-index: 1000;
    margin: 0 auto;
    padding: 10px 10px;
    border-radius:20px;
}
.xq_top1{
    padding:10px 5px;
    border-bottom:1px solid #ccc;  
}
.xq_top2{
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    
}
.xq_top2 dl{
    padding: 10px;
     
}
.xq_top2 dt{
    width: 50px;
    height: 50px;
    /* border: 1px solid #ccc; */
    margin-bottom:10px; 
}
.xq_top2  dl:last-child dt{
    background: url(https://st-cn.meishij.net/p2/20191028/20191028163459_894.png) no-repeat 0px 0px;
    background-size: cover;
}
.xq_top2  dl:nth-child(1) dt{
    background: url(https://st-cn.meishij.net/p2/20191028/20191028163459_894.png) no-repeat 0px -48px;
    background-size: cover;
}
.xq_top2  dl:nth-child(2) dt{
    background: url(https://st-cn.meishij.net/p2/20191028/20191028163459_894.png) no-repeat 0px -100px;
    background-size: cover;
}
.xq_top2  dl:nth-child(3) dt{
    background: url(https://st-cn.meishij.net/p2/20191028/20191028163459_894.png) no-repeat 0px -147px;
    background-size: cover;
}

</style>