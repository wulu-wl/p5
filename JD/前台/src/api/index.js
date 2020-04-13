import qs from 'qs'
import Axios from 'axios';
//登录接口
export let Login=(data)=>{
    return Axios({
        method:"post",
        url:"http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f",
        data:qs.stringify(data)
    })
}   
//首页轮播接口
export let Lunbo=(data)=>{
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f",
        data:qs.stringify(data)
    })
}
//首页导航接口
export let daohang=(data)=>{
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f",
        data:qs.stringify(data)
    })
}
//潮流女装 品牌男装 电脑办公接口
export let clnz=(data)=>{
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f",
        data:qs.stringify(data)
    })
}
//潮流女装接口
export let wntj=(data)=>{
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f",
        data:qs.stringify(data)
    })
}
//分类左侧列表
export let flleft=(data)=>{
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f",
        data:qs.stringify(data)
    })
}
//获取分类右侧对应详情
export let flright=(data)=>{
    // let cid=sessionStorage.getItem("cid")
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/category/show?cid=492&token=1ec949a15fb709370f",
        data:data
    })
}
//右侧从首页分类点击进来默认显示
export let flright_one=(data)=>{
    let cid=sessionStorage.getItem("cid")
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/category/show?cid="+cid+"&token=1ec949a15fb709370f",
        data:data
    })
}
// //获取分类列表里点击时传输的数据
export let flright_two=(data)=>{
    let id=sessionStorage.getItem("id")
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/category/show?cid="+id+"&token=1ec949a15fb709370f",
        data:data
    })
}
//详情页面数据获取  默认 
export let xq=(data)=>{
    let gid=sessionStorage.getItem("gid")
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/goods/info?gid="+gid+"&type=details&token=1ec949a15fb709370f",
        data:data
    })
}
//详情页面加入购物车商品规格数据获取  
export let xq_gg=(data)=>{
    let gid=sessionStorage.getItem("gid")
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/goods/info?gid="+gid+"&type=spec&token=1ec949a15fb709370f",
        data:data
    })
}
//详情页面数据获取  商品评价信息 
export let pl=(data)=>{
    let gid=sessionStorage.getItem("gid")
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/reviews/index?gid="+gid+"&token=1ec949a15fb709370f&page=1",
        data:data
    })
}
//搜索热词
export let ssrc=(data)=>{
    return Axios({
        method:"get",
        url:"http://vueshop.glbuys.com/api/home/public/hotwords?token=1ec949a15fb709370f",
        data:data
    })
}

//加入购物车
export let addp=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/addp",
        data:qs.stringify(data)
    })
}
//获取后台商品
export let hqp=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/hqp",
        data:qs.stringify(data)
    })
}
//删除
export let delid=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/delid",
        data:qs.stringify(data)
    })
}
//加
export let jiaid=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/jiaid",
        data:qs.stringify(data)
    })
}
//减
export let jianid=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/jianid",
        data:qs.stringify(data)
    })
}
//单选总价
export let danzj=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/danzj",
        data:qs.stringify(data)
    })
}
//确认订单
export let sureorder=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/sureorder",
        data:qs.stringify(data)
    })
}
//确认订单
export let getdizhi=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/getdizhi",
        data:qs.stringify(data)
    })
}
//添加地址
export let adddz=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/adddz",
        data:qs.stringify(data)
    })
}
//删除地址
export let deldz=(data)=>{
    return Axios({
        method:"post",
        url:"http://localhost:4000/api/deldz",
        data:qs.stringify(data)
    })
}