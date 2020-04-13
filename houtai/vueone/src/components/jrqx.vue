<template>
  <div class="jrqx">
    <div class="top">
      <el-button @click="yiji">一级路由</el-button>
      <el-button @click="erji">二级路由</el-button>
    </div>
    <div class="bottom_one" v-show="active1">
      <el-input v-model="lname" placeholder="请输入名称"></el-input>
      <el-input v-model="path" placeholder="请输入路由接口"></el-input>
      <el-select v-model="selectValue" placeholder="请选择菜单">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <br />
      <el-button @click="add">确认添加</el-button>
    </div>
    <div class="bottom_one" v-show="active2">
      <el-input v-model="lname1" placeholder="请输入一级路由名称"></el-input>
      <el-input v-model="lname2" placeholder="请输入二级路由名称"></el-input>
      <el-input v-model="path1" placeholder="请输入路由接口"></el-input>
      <br />
      <el-button @click="addone">确认添加</el-button>
    </div>
  </div>
</template>

<script>
import { add, option, addone } from "../api/config"
export default {
  data() {
    return {
      lname: "",
      lname1: "",
      path1: "",
      lname2: "",
      path: "",
      selectValue: "",
      active1: true,
      active2: false,
      options: [
        {
          value: "统计",
          label: "统计"
        },
        {
          value: "管理",
          label: "管理"
        },
        {
          value: "开发",
          label: "开发"
        },
        {
          value: "设置",
          label: "设置"
        }
      ]
    };
  },
  methods: {
    add() {
      //   console.log(this.lname);
      //   console.log(this.path);
      //   console.log(this.selectValue);
      let obj = {
        selectValue: this.selectValue,
        menuName: this.lname,
        path: this.path
      };
      add(obj).then(res => {
        // console.log(res);
        let uid = sessionStorage.getItem("uid");
        option({ uid: uid }).then(res => {
          //   console.log(res);
          this.arr = res.data;
          // console.log(this.arr)
          for (var i in this.arr) {
            if (this.arr[i].children.length == 0) {
              // console.log(this.arr[i].children==0)
              this.arr.splice(i);
            }
          }
          window.location.reload();
        });
      });
    },
    yiji() {
      this.active1 = false;
      this.active2 = true;
    },
    erji() {
      this.active1 = true;
      this.active2 = false;
    },
    addone() {
      // console.log(this.lname1)
      // console.log(this.lname2)
      // console.log(this.path1)
      let obj = {
        menuName1: this.lname1,
        menuName2: this.lname2,
        path1: this.path1
      };
      addone(obj).then(res => {
        console.log(res);
        let uid = sessionStorage.getItem("uid");
        option({ uid: uid }).then(res => {
          //   console.log(res);
          this.arr = res.data;
          // console.log(this.arr)
          for (var i in this.arr) {
            if (this.arr[i].children.length == 0) {
              // console.log(this.arr[i].children==0)
              this.arr.splice(i);
            }
          }
          window.location.reload();
        });
      });
    }
  }
};
</script>

<style scoped>
.top {
  margin-bottom: 20px;
}
</style>