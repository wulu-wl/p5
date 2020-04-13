import qs from 'qs'
import Axios from 'axios';
//注册
export let Login = (data) => {
    return Axios({
        method: "post",
        url: "http://localhost:5000/api/login",
        data: qs.stringify(data)
    })
}
//验证码
export let Veri = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/veri",
        data: data
    })
}
//确认修改
export let sureupd = (data) => {
    return Axios({
        method: "post",
        url: "http://localhost:5000/api/sureupd",
        data: qs.stringify(data)
    })
}
//登录
export let loginin = (data) => {
    return Axios({
        method: "post",
        url: "http://localhost:5000/api/loginin",
        data: qs.stringify(data)
    })
}
//首页轮播
export let homeswiper = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/homeswiper",
        data: data
    })
}
//首页分类
export let homefoodlist = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/homefoodlist",
        data: data
    })
}
//首页三餐
export let getthree = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/getthree",
        data: data
    })
}
//大家都在做
export let geteverydo = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/geteverydo",
        data: data
    })
}
//我的菜单
export let getminemennu = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/getminemennu",
        data: data
    })
}
//视频
export let getvideo = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/getvideo",
        data: data
    })
}
//底部分类
export let gettypes = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/gettypes",
        data: data
    })
}
//底部分类左侧点击的对应分类
export let getcid1=(data)=>{
    return  Axios({
        method:"post",
        url:"http://localhost:5000/api/getcid1",
        data:qs.stringify(data)
    })
}
//首页分类
export let getfood = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/getfood",
        data: data
    })
}
//首页分类对应的分类
export let getaa = (data) => {
    return Axios({
        method: "post",
        url: "http://localhost:5000/api/getaa",
        data: qs.stringify(data)
    })
}
//我的菜单
export let getmenu = (data) => {
    return Axios({
        method: "get",
        url: "http://localhost:5000/api/getmenu",
        data: data
    })
}
//点击我的菜单对应的菜单
export let getmidmenu = (data) => {
    return Axios({
        method: "post",
        url: "http://localhost:5000/api/getmidmenu",
        data: qs.stringify(data)
    })
}