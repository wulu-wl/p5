<template>
  <div class="dis">
    <header>
      <h2>发现页面</h2>
    </header>
    <nav>
      <ul>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">待付款</a>
        </li>
        <li>
          <a href="#">待使用</a>
        </li>
        <li>
          <a href="#">待评价</a>
        </li>
        <li>
          <a href="#">退款/售后</a>
        </li>
      </ul>
    </nav>
    <div class="bot">
      <dl>
        <dt>
          <img src="../../../12-18页面/img/2.jpg" alt />
        </dt>
        <dd>
          <p>吱吱吱吱吱吱吱吱吱吱吱吱</p>
          <div>
            <img src="../../../12-18页面/img/dz_37.jpg" alt />
            <span>lllllll</span>
            <p class="zan">
              <img src="../../../12-18页面/img/2.png" alt />
              <span>54</span>
            </p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../12-18页面/img/2.jpg" alt />
        </dt>
        <dd>
          <p>吱吱吱吱吱吱吱吱吱吱吱吱</p>
          <div>
            <img src="../../../12-18页面/img/dz_37.jpg" alt />
            <span>lllllll</span>
            <p  class="zan">
              <img src="../../../12-18页面/img/2.png" alt />
              <span>54</span>
            </p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../12-18页面/img/2.jpg" alt />
        </dt>
        <dd>
          <p>吱吱吱吱吱吱吱吱吱吱吱吱</p>
          <div>
            <img src="../../../12-18页面/img/dz_37.jpg" alt />
            <span>lllllll</span>
            <p  class="zan">
              <img src="../../../12-18页面/img/2.png" alt />
              <span>54</span>
            </p>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../12-18页面/img/2.jpg" alt />
        </dt>
        <dd>
          <p>吱吱吱吱吱吱吱吱吱吱吱吱</p>
          <div>
            <img src="../../../12-18页面/img/dz_37.jpg" alt />
            <span>lllllll</span>
            <p class="zan">
              <img src="../../../12-18页面/img/2.png" alt />
              <span>54</span>
            </p>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "dis",
  data() {
    return {
      msg: "发现页面"
    };
  }
};
</script>

<style scoped>
header {
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
.dis {
  background: #f7fbfe;
  /* height: 1000px; */
}
.dis header {
  width: 100%;
  height: 50px;
  background: #ffcf00;
  text-align: center;
  line-height: 50px;
}
.dis nav {
  width: 100%;
  background: #fff;
  height: 50px;
  /* margin-top:50px; 	 */
  position: fixed;
  left: 0px;
  top: 50px;
}
.dis nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.dis nav ul li {
  height: 50px;
  line-height: 50px;
}
.dis nav ul li a {
  font-size: 12px;
  color: black;
  text-decoration: none;
  text-align: center;
}
.bot{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.bot dl:nth-child(1){
    margin-top:100px; 
}
.bot dl:nth-child(2){
    margin-top:100px; 
}
.bot dl:nth-child(1){
    margin-top:100px; 
}
.bot dl:last-child{
    margin-bottom:100px; 
}
.bot dl{
    width: 49%;
}
.bot dt img{
    width: 100%;
    height: 200px;
}
.bot dd{
    background: #fff;
    padding: 5px 10px;
}
.bot dd div>img{
    width: 20px;
    height: 20px;
    border-radius:50%;
    vertical-align: middle; 
}
.bot dd div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bot dd div span{
    font-size:12px; 
}
.zan img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
img {
  width: 100px;
  height: 100px;
}
</style>