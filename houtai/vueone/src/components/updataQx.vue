<template>
    <div class="updata">
       <div>
      角色名称：
      <input type="text" v-model="roleName" />
    </div>
    <br />
      <div class="content">
        <ul v-for="(item,index) in menuList" :key="index">
          <h3>{{item.menuName}}</h3>
          <li v-for="item1 in item.children" :key="item1.rankOpen">
            <el-checkbox-group v-model="checkList">
              <el-checkbox :label="item1.menuName" ></el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
      <div>
        <el-button type="danger" @click="updqx">提交</el-button>
        <el-button plain @click="quxiao">取消</el-button>
      </div>
    </div>
</template>

<script>
import {updmenulist,updqx} from '../api/config'
    export default {
        name:'updataQx',
        data() {
            return {
                arr: [],
                options: [],
                value: "",
                id: "",
                roleName: "",
                menuList: [],
                checkList: []
            }
        },
        mounted(){
            // console.log(this.$route.params.id)
            //点击修改传输过来的id
           let id=this.$route.params.id
           this.id=this.$route.params.id
            //将本地存储的数据取出来
            let arr=JSON.parse(localStorage.getItem("arr")) 
            // console.log(arr)
            let newArr=arr.filter((item,index)=>{
                //将修改的id 和  本地存储的数据进行对比  返回id相等的数组
                return item._id==id
            })
            console.log(newArr)
            //角色名称
            this.roleName=newArr[0].rolename
            // console.log(this.roleName)
            //选中的权限  原本的权限
            this.checkList=newArr[0].rolerank
            
            updmenulist().then(res=>{
              // console.log(res)
              this.menuList=res.data
            })

        },
        methods:{
            quxiao(){
                this.$router.push("/home/accountquanxian")
            },
            updqx(){
              console.log(this.checkList)
              updqx({
                roleName:this.roleName,
                checkList:this.checkList
              }).then(res=>{
                console.log(res)
                if(res.data.result.n==1){
                  alert("修改成功")
                }
              })
            }
        }
    }
</script>

<style scoped>
li,
ul {
  margin: 10px 0;
  padding: 0;
  list-style: none;
}
.content {
  display: flex;
  justify-content: space-around;
}
.content + div {
  margin-top: 40px;
  text-align: center;
}
h3 {
  text-align: center;
}
</style>