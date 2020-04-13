<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="角色" width="180" prop="rolename"></el-table-column>
    <el-table-column label="角色权限范围" width="180" prop="rolerank"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getrole, getmenulist } from "../api/config";
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    getrole().then(res=>{
      // console.log(res.data)
      //获取角色的权限列表
      let rolelist=res.data
      getmenulist().then(res=>{
        //获取全部的权限列表
        console.log(res.data)
        let menulist=res.data
        //处理角色权限列表里的权限   将数字转化为对应的权限
        for(let item of rolelist){
          //item rolerank 为权限对应的数组列表  数字权限
          item.rolerank=item.rolerank.map((item1,index1)=>{
            //数组遍历 得到每一个权限数字
            for(var i=0;i<menulist.length;i++){
              //全部权限列表遍历  获取所有的rankopen值 和权限数字进行对比 相同的话返回对应的权限名字
              if(menulist[i].rankOpen==item1){
                return  menulist[i].menuName
              }
            }
          })
        }
        //将处理完的rolelist数组处理完赋值给tableDate
        this.tableData=rolelist
        //将数据存在本地存储中  方便修改时使用  所有的权限列表
        localStorage.setItem("arr",JSON.stringify(rolelist) )
      })
    })
  },
  methods: {
    handleEdit(row) {
      // console.log(row)
      this.$router.push({ path: "/home/updataQx/" + row._id });
    }
  }
};
</script>

<style  scoped>
</style>