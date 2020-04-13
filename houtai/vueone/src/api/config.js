import qs from "qs"
import axios from "axios"
//请求拦截器
axios.interceptors.request.use((config)=>{
    config.headers.Authorization=JSON.stringify({
        token:sessionStorage.token,
        uid:sessionStorage.uid
    })
    return config
})
//响应拦截器
axios.interceptors.response.use(data=>{
    return data;
},err=>{
    let str=err.toString();
    if(str.indexOf("401")>=0){
        window.location.href="http://localhost:8000/login"
    }else if(str.indexOf("403")>=0){
        window.history.back(-1)
    }
})
let baseUrl="http://localhost:8000"
//登陆接口
export let logins=(data)=>{
    return axios({
        method:"post",
        url:baseUrl+"/api/login",
        data:qs.stringify(data)
    })
}

//查找左侧列表的接口
export function option(data){
    return axios({
        method:"post",
        url:baseUrl+"/admin/option",
        data:qs.stringify(data)
    })
}
//添加二级权限
export function add(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/add",
        data:qs.stringify(data)
    })
}
//添加一级权限
export function addone(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/addone",
        data:qs.stringify(data)
    })
}

//获取用户信息  userlist
export function getuser(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/getuser",
        data:qs.stringify(data)
    })
}
//添加用户信息
export function adduser(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/adduser",
        data:qs.stringify(data)
    })
}
//删除用户信息
export function deluser(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/deluser",
        data:qs.stringify(data)
    })
}
//修改用户信息
export function upduser(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/upduser",
        data:qs.stringify(data)
    })
}

//渲染人员权限页面
export function getrole(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/getrole",
        data:qs.stringify(data)
    })
}
//获取角色权限
export function getmenulist(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/getmenulist",
        data:qs.stringify(data)
    })
}
//修改权限获取所有权限
export function updmenulist(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/updmenulist",
        data:qs.stringify(data)
    })
}
//修改过的权限
export function updqx(data){
    return axios({
        method:"post",
        url:baseUrl+"/api/updqx",
        data:data
    })
}