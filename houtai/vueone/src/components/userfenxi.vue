<template>
<div>
    <div class="top_one" v-show="active1">
       <el-form status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
           
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="username" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门" prop="bumen">
                <el-input type="text" v-model="bumen" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="adduser">提交</el-button>
               
            </el-form-item>
       </el-form>
    </div>
    <div class="top_two" v-show="active2">
       <el-form status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
           
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="username" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门" prop="bumen">
                <el-input type="text" v-model="bumen" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="upduser">确认修改</el-button>
               
            </el-form-item>
       </el-form>
    </div>
<!-- 渲染列表 -->
<el-button type="primary" @click="btn">添加用户信息</el-button>
  <el-table  :data="tableData"   style="width: 100%">
    <el-table-column label="部门" width="180" prop="role"></el-table-column>
    <el-table-column label="用户名" width="180" prop="userName"></el-table-column>
    <el-table-column label="头像" width="180" prop="img"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--修改列表 -->
  
</div>

</template>

<script>
import {getuser,adduser,deluser,upduser} from '../api/config'
    export default {
        data() {
            return {
                username:"",
                pass:"",
                bumen:'',
                tableData:[],
                active1:false,
                active2:false,
            }
        },
        mounted(){
            getuser({}).then(res=>{
                // console.log(res)
                this.tableData=res.data
                // console.log(this.tableData)
            })
        },
         methods: {
             //修改用户信息列表
            handleEdit(index, row) {
                console.log(index, row);
                this.active2=true
                this.active1=false
                this.username=row.userName;
                this.pass=row.pass;
                this.bumen=row.role
                let obj={
                    userName:this.username,
                    pass:this.pass,
                    role:this.bumen,
                    id:row._id
                }   
                localStorage.setItem("updid",row._id)
            },
            //确认修改的方法
            upduser(){
                let updid=localStorage.getItem('updid')
                upduser({
                    id:updid,
                    userName:this.username,
                    pass:this.pass,
                    role:this.bumen}).then(res=>{
                    // console.log(res)
                    window.location.reload()
                    localStorage.clear("updid")
                })
            },
            //删除用户信息
            handleDelete(index, row) {
                // console.log(index, row);
                deluser({id:row._id}).then(res=>{
                    
                    // window.location.reload()
                    //将渲染列表里的数组删除
                    this.tableData.splice(index,1)
                })
            },
            //添加用户事件
            adduser(){
             
                let obj={
                    userName:this.username,
                    pass:this.pass,
                    role:this.bumen
                }
                adduser(obj).then(res=>{
                    //res.data.ops[0] 从后台返回的为添加的对象  
                    // console.log(res.data.ops[0])
                    this.tableData.push(res.data.ops[0])
                    //添加成功之后将添加输入的信息框隐藏
                     this.active1=false
                })
            },
            //控制添加用户信息的输入框显示隐藏
            btn(){
                this.active1=true
            }
        }
    }
</script>

<style scoped>

</style>