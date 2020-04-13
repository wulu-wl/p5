<template>
  <div>
    <div class="header">
      <router-link to="/xq">&lt;</router-link>
      <van-nav-bar title="购物车" />
    </div>
    <div class="center">
      <div class="con" v-for="(item,index) in carlist" :key="index" :data_id="item.gid">
        <!-- <van-checkbox v-model="checked">复选框</van-checkbox> -->
        <input
          type="checkbox"
          :checked="item.checked"
          @click="danxuan(index,item.price,item.num,item._id)"
        />
        <dl>
          <dt>
            <img :src="item.images" />
            <span @click="del(item._id)">删除</span>
          </dt>
          <dd>
            <p>{{item.title}}</p>
            <p>
              <span>颜色：{{item.yanse}}</span>
              <span>尺码：{{item.chima}}</span>
            </p>
            <div>
              <p>￥{{item.price}}</p>
              <div>
                <span @click="jian(item._id,item.num,item.price)">-</span>
                <span>|</span>
                <input type="text" v-model="item.num" />
                <span>|</span>
                <span @click="jia(item._id,item.num,item.price)">+</span>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="center_bottom">
      <ul>
        <li @click="quanxuan">
          <input type="checkbox" :checked="active" />全选
        </li>
        <li>
          <p>
            运费：
            <span>￥{{yunfei}}</span>
          </p>
          <p>
            合计：
            <span>￥{{zj}}</span>
          </p>
          <button @click="jiesuan">去结算</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { hqp, delid, jiaid, jianid, danzj } from "../api/index";
export default {
  data() {
    return {
      carlist: [],
      pinfo: {},
      //全选全不选的点击次数
      dian: null,
      //总价
      zj: null,
      active: false,
      arr1: [],
      // danactive:false,
      yunfei: null,
      xz: []
    };
  },
  mounted() {
    hqp().then(res => {
      this.carlist = res.data;
    });
  },
  methods: {
    //删除
    del(id) {
      // console.log(id)
      delid({ id: id }).then(res => {
        // console.log(res)
        if (res.data.n == 1) {
          window.location.reload();
        }
      });
    },
    jia(id, num, price) {
      // console.log(id)
      num++;
      jiaid({ id: id, num: num, zj: this.zj }).then(res => {
        // console.log(res)
        if (res.data.result.n == 1) {
          window.location.reload();
          this.zj = Number(price) * Number(num);
        }
      });
    },
    //减
    jian(id, num, price) {
      if (num == 1) {
        alert("不能再减少了");
      } else {
        num--;
        jiaid({ id: id, num: num, zj: this.zj }).then(res => {
          // console.log(res)
          if (res.data.result.n == 1) {
            window.location.reload();
            this.zj = Number(price) * Number(num);
          }
        });
      }
    },
    //全选
    quanxuan() {
      let arr = this.carlist;
      if (!this.active) {
        this.active = true;
        for (var i = 0; i < arr.length; i++) {
          arr[i].checked = true;
          this.zj += Number(Number(arr[i].price) * Number(arr[i].num));
          this.yunfei += Number(arr[i].freight);
        }
      } else {
        this.active = false;
        for (var i = 0; i < arr.length; i++) {
          arr[i].checked = false;
          this.zj = 0;
          this.yunfei = 0;
        }
      }
    },
    //单选
    danxuan(index, price, num, id) {
      console.log(1)
      let arr = this.carlist;
      for (var i = 0; i < arr.length; i++) {
        if (i == index && arr[i].checked == false) {
          console.log(2)
          arr[i].checked = true;
          this.xz.push(arr[i]);
          if (this.xz.length == 0) {
            this.zj = 0;
            this.yunfei = 0;
          }
          this.zj += Number(arr[i].price) * Number(arr[i].num);
          this.yunfei += Number(arr[i].freight);
        } else if (i == index && arr[i].checked == true) { 
          console.log(3)
          arr[i].checked = false;
          console.log(arr[i].checked)
          this.xz.splice(i, i + 1);
          console.log(this.xz);
          if (this.xz.length == 0) {
            this.zj = 0;
            this.yunfei = 0;
          } else if (this.xz.length != 0) {
            console.log(4)
            let zj1 = 0;
            let yf1 = 0;
            for (var j = 0; j < this.xz.length; j++) {
              console.log(this.xz);
              console.log(this.xz[j].price);
              console.log(this.xz[j].num);
              zj1 += Number(this.xz[j].price) * Number(this.xz[j].num);
              // console.log(this.zj);
              yf1 += Number(this.xz[j].freight);
            }
            this.zj = zj1;
            this.yunfei = yf1;
          }

          // console.log(this.xz);
        }
      }
      if (arr.length == this.xz.length) {
        this.active = true;
      } else {
        this.active = false;
      }
      // console.log(this.xz);
    },
    jiesuan() {
      this.$router.push("/sure1");
    }
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 10px;
  background: #fff;
}
.header a {
  width: 10%;
  font-family: "黑体";
  font-weight: bold;
  font-size: 40px;
  color: #000;
}
.header .van-hairline--bottom {
  width: 90%;
  padding-left: 80px;
}
.center {
  width: 100%;
  min-height: 550px;
  background: #efefef;
}
.center > div:first-child {
  margin-top: 50px;
}
.con {
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background: #fff;
}

.con img {
  width: 100%;
  display: block;
  /* border: 1px solid #ccc; */
}
.con dl {
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}
.con dt {
  width: 25%;
  margin-right: 10px;
}
.con dt span {
  display: block;
  /* border: 1px solid #ccc; */
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #ccc;

  margin-top: 8px;
}
.con dd {
  width: 75%;
}
.con dd p {
  font-size: 12px;
  font-family: "宋体";
  line-height: 30px;
}
.con dd > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con dd > div > p {
  color: #f00;
  font-size: 14px;
}
.con dd > div > div {
  width: 100px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 3px 10px;
  border-radius: 10px;
}
.con dd > div > div span {
  padding: 0px 2px;
}
.center_bottom {
  width: 100%;
  position: fixed;
  bottom: 50px;
  left: 0px;
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
}
.center_bottom ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
}
.center_bottom ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.center_bottom ul button {
  width: 80px;
  height: 100%;
  background: #f00;
  color: #fff;
  border: none;
  font-size: 14px;
  margin-left: 10px;
}
.center_bottom ul li p span {
  color: #f00;
}
.center .con:last-child {
  margin-bottom: 100px;
  /* border: 1px solid #f00; */
}
.con input {
  width: 10px;
  border: none;
  display: inline-block;
}
</style>